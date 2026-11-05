// @ts-check
const { test, expect } = require('@playwright/test');

const SECTIONS = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'education', 'contact'];
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/samiul20207@gmail.com';

// Collect page errors and console errors for every test.
test.beforeEach(async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
  testInfo['errors_'] = errors;
  // Never hit the real form service from tests.
  await page.route(FORM_ENDPOINT, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":"true"}' }));
});

const isMobile = (testInfo) => testInfo.project.name === 'mobile';

test.describe('Page basics', () => {
  test('loads with the right title and no JavaScript errors', async ({ page }, testInfo) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Samiul Islam/);
    await expect(page.locator('h1.hero-name')).toHaveText('Samiul Islam');
    await page.waitForTimeout(500);
    expect(testInfo['errors_'], 'no page or console errors').toEqual([]);
  });

  test('has all eight sections in order', async ({ page }) => {
    await page.goto('/');
    const ids = await page.locator('main section[data-name]').evaluateAll((els) => els.map((e) => e.id));
    expect(ids).toEqual(SECTIONS);
  });

  test('typing animation cycles through roles', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#typing')).toHaveText(/Junior SQA Engineer/, { timeout: 5000 });
  });

  test('has no horizontal scroll', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('every image has alt text and loads', async ({ page }) => {
    await page.goto('/');
    const imgs = page.locator('img:not(.ci-badge)');
    const n = await imgs.count();
    expect(n).toBeGreaterThan(0);
    for (let i = 0; i < n; i++) {
      await expect(imgs.nth(i)).toHaveAttribute('alt');
      await imgs.nth(i).scrollIntoViewIfNeeded();
      const ok = await imgs.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0);
      expect(ok, `image ${i} loaded`).toBe(true);
    }
  });
});

test.describe('Navigation', () => {
  test('nav links point to existing sections', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page.locator('#navLinks a').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
    expect(hrefs.length).toBe(7);
    for (const href of hrefs) await expect(page.locator(href)).toHaveCount(1);
  });

  test('clicking a nav link scrolls there and highlights it', async ({ page }, testInfo) => {
    await page.goto('/');
    if (isMobile(testInfo)) {
      await page.locator('#menuBtn').click();
      await expect(page.locator('#navLinks')).toHaveClass(/open/);
    }
    await page.locator('#navLinks a[href="#projects"]').click();
    await expect(page.locator('#projects')).toBeInViewport();
    await expect(page.locator('#navLinks a[href="#projects"]')).toHaveClass(/active/);
    if (isMobile(testInfo)) await expect(page.locator('#navLinks')).not.toHaveClass(/open/);
  });

  test('status pill tracks the current section', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.evaluate(() => document.getElementById('contact').scrollIntoView());
    await expect(page.locator('#pillSec')).toHaveText('08/08 CONTACT');
  });
});

test.describe('Projects', () => {
  test('shows all 20 public projects, each linking to my GitHub', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('#projectGrid .project');
    await expect(cards).toHaveCount(20);
    const codeLinks = await page.locator('#projectGrid .p-links a', { hasText: 'Code' }).evaluateAll((as) => as.map((a) => a.href));
    expect(codeLinks).toHaveLength(20);
    for (const href of codeLinks) expect(href).toMatch(/^https:\/\/github\.com\/samiul501\/[\w.-]+$/);
  });

  test('filters narrow the list and the counts match', async ({ page }) => {
    await page.goto('/');
    const expected = { featured: 6, automation: 6, api: 5, manual: 3, other: 6, all: 20 };
    for (const [cat, n] of Object.entries(expected)) {
      const btn = page.locator(`.filter[data-cat="${cat}"]`);
      await expect(btn.locator('small')).toHaveText(String(n).padStart(2, '0'));
      await btn.click();
      await expect(page.locator('#projectGrid .project')).toHaveCount(n);
      await expect(page.locator(`.filter[data-cat="${cat}"]`)).toHaveClass(/active/);
    }
  });

  test('the GitHub profile README repo is not listed', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page.locator('#projectGrid a').evaluateAll((as) => as.map((a) => a.href));
    expect(hrefs).not.toContain('https://github.com/samiul501/samiul501');
  });
});

test.describe('Links and files', () => {
  test('CV download link returns the PDF', async ({ page, request }) => {
    await page.goto('/');
    const links = page.locator('a[download]');
    expect(await links.count()).toBeGreaterThanOrEqual(3);
    const href = await links.first().getAttribute('href');
    const res = await request.get(`/${href}`);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/pdf');
  });

  test('external links open in a new tab safely', async ({ page }) => {
    await page.goto('/');
    const bad = await page.locator('a[target="_blank"]').evaluateAll((as) =>
      as.filter((a) => !(a.getAttribute('rel') || '').includes('noopener')).map((a) => a.href));
    expect(bad).toEqual([]);
  });

  test('email and phone links are correct', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero-contact a[href="mailto:samiul20207@gmail.com"]')).toBeVisible();
    await expect(page.locator('.hero-contact a[href="tel:+8801750519617"]')).toBeVisible();
    await expect(page.locator('#contact a[href="mailto:samiul20207@gmail.com"]')).toHaveCount(1);
  });

  test('social preview meta tags are set', async ({ page, request }) => {
    await page.goto('/');
    for (const prop of ['og:title', 'og:description', 'og:image', 'og:url']) {
      await expect(page.locator(`meta[property="${prop}"]`)).toHaveAttribute('content', /.+/);
    }
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    const res = await request.get('/og-image.png');
    expect(res.status()).toBe(200);
  });
});

test.describe('Contact form', () => {
  test('blocks empty submissions', async ({ page }) => {
    await page.goto('/');
    let called = false;
    page.on('request', (r) => { if (r.url().startsWith(FORM_ENDPOINT)) called = true; });
    await page.locator('#sendBtn').click();
    const valid = await page.locator('#contactForm').evaluate((f) => f.checkValidity());
    expect(valid).toBe(false);
    expect(called).toBe(false);
  });

  test('rejects an invalid email address', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[name="email"]', 'not-an-email');
    const valid = await page.locator('input[name="email"]').evaluate((i) => i.checkValidity());
    expect(valid).toBe(false);
  });

  test('sends the message and shows success', async ({ page }) => {
    await page.goto('/');
    const reqPromise = page.waitForRequest(FORM_ENDPOINT);
    await page.fill('input[name="name"]', 'QA Bot');
    await page.fill('input[name="email"]', 'qa.bot@example.com');
    await page.fill('input[name="subject"]', 'Automated test');
    await page.fill('textarea[name="message"]', 'Hello from Playwright');
    await page.locator('#sendBtn').click();
    const req = await reqPromise;
    const body = req.postDataJSON();
    expect(body).toMatchObject({ name: 'QA Bot', email: 'qa.bot@example.com', message: 'Hello from Playwright', _subject: 'Automated test' });
    await expect(page.locator('#formStatus')).toHaveText(/Message sent/);
    await expect(page.locator('input[name="name"]')).toHaveValue('');
  });

  test('falls back to a direct email link when the service fails', async ({ page }) => {
    await page.route(FORM_ENDPOINT, (route) => route.fulfill({ status: 500, body: '{}' }));
    await page.goto('/');
    await page.fill('input[name="name"]', 'QA Bot');
    await page.fill('input[name="email"]', 'qa.bot@example.com');
    await page.fill('textarea[name="message"]', 'Failure path');
    await page.locator('#sendBtn').click();
    await expect(page.locator('#formStatus')).toHaveText(/Couldn't send/);
    await expect(page.locator('#formStatus a')).toHaveAttribute('href', /^mailto:samiul20207@gmail\.com/);
  });

  test('ignores bots that fill the hidden honeypot', async ({ page }) => {
    await page.goto('/');
    let called = false;
    page.on('request', (r) => { if (r.url().startsWith(FORM_ENDPOINT)) called = true; });
    await page.fill('input[name="name"]', 'Bot');
    await page.fill('input[name="email"]', 'bot@example.com');
    await page.fill('textarea[name="message"]', 'spam');
    await page.locator('input[name="_honey"]').evaluate((i) => { i.value = 'gotcha'; });
    await page.locator('#sendBtn').click();
    await page.waitForTimeout(300);
    expect(called).toBe(false);
  });
});

test.describe('Theme and layout', () => {
  test('theme toggle switches and remembers the choice', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await page.locator('#themeToggle').click();
    await expect(html).toHaveAttribute('data-theme', 'light');
    await page.reload();
    await expect(html).toHaveAttribute('data-theme', 'light');
  });

  test('HUD panels show on wide screens only', async ({ page }, testInfo) => {
    await page.goto('/');
    if (isMobile(testInfo)) {
      await expect(page.locator('.hud-tl')).toBeHidden();
      await expect(page.locator('#menuBtn')).toBeVisible();
    } else {
      await expect(page.locator('.hud-tl')).toBeVisible();
      await expect(page.locator('#hudClock')).not.toHaveText('00:00:00');
    }
  });

  test('scroll reveal makes content visible', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('#experience .heading');
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toHaveClass(/in/);
    await expect(page.locator('#timeline .tl-item')).toHaveCount(3);
  });
});
