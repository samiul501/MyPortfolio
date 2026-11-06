// @ts-check
const { test, expect } = require('@playwright/test');

const SECTIONS = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'education', 'contact'];
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

// Collect page errors and console errors for every test.
test.beforeEach(async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
  testInfo['errors_'] = errors;
  // Never hit the real form service from tests.
  await page.route(FORM_ENDPOINT, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true,"message":"Email sent successfully!"}' }));
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

  test('self-hosted fonts load (no third-party font requests)', async ({ page }) => {
    const external = [];
    page.on('request', (r) => { if (/fonts\.(googleapis|gstatic)\.com/.test(r.url())) external.push(r.url()); });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.fonts.check('600 16px Geist') && document.fonts.check('500 12px "Geist Mono"'))).toBe(true);
    expect(external).toEqual([]);
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
    expect(body).toMatchObject({ name: 'QA Bot', email: 'qa.bot@example.com', message: 'Hello from Playwright', subject: 'Automated test' });
    expect(body.access_key).toMatch(/^[0-9a-f-]{36}$/);
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

test.describe('Motion layer', () => {
  test('boot sequence plays, then reveals the site', async ({ page }) => {
    await page.goto('/?boot');
    await expect(page.locator('#boot')).toBeVisible();
    await expect(page.locator('#bootLog')).toContainText('npx playwright test', { timeout: 10000 });
    await expect(page.locator('#bootLog')).toContainText('ALL SYSTEMS GO', { timeout: 15000 });
    await expect(page.locator('html')).not.toHaveClass(/is-booting/, { timeout: 10000 });
    await expect(page.locator('#boot')).toBeHidden({ timeout: 5000 });
    await expect(page.locator('.hero-name')).toBeVisible();
  });

  test('boot sequence can be skipped with a key press', async ({ page }) => {
    await page.goto('/?boot');
    await expect(page.locator('#boot')).toBeVisible();
    // wait until the sequence is running (its key listener is attached), then skip
    await expect(page.locator('#bootLog')).toContainText('npx', { timeout: 10000 });
    await page.keyboard.press('Escape');
    await expect(page.locator('html')).not.toHaveClass(/is-booting/, { timeout: 2000 });
    await expect(page.locator('#bootLog')).not.toContainText('ALL SYSTEMS GO');
    await expect(page.locator('#boot')).toBeHidden({ timeout: 5000 });
  });

  test('boot sequence is skipped for reduced motion', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('http://localhost:4173/?boot');
    await expect(page.locator('html')).not.toHaveClass(/is-booting/);
    await expect(page.locator('#boot')).toBeHidden();
    await ctx.close();
  });

  test('animation libraries load; smooth scroll on desktop, native scroll on touch', async ({ page }, testInfo) => {
    await page.goto('/');
    await page.waitForFunction(() => window.gsap && window.ScrollTrigger && window.SplitText);
    if (isMobile(testInfo)) {
      expect(await page.evaluate(() => !!window.__lenis)).toBe(false);
      await expect(page.locator('html')).not.toHaveClass(/lenis/);
    } else {
      await page.waitForFunction(() => !!window.__lenis);
      await expect(page.locator('html')).toHaveClass(/lenis/);
    }
  });

  test('hero name and headings are split for their entrance', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero-name .char')).toHaveCount('SamiulIslam'.length);
    await page.evaluate(() => document.getElementById('about').scrollIntoView());
    // words animate in, then the split is reverted so the heading is plain text again
    await expect(page.locator('#about .heading .split-line')).toHaveCount(0, { timeout: 8000 });
    await expect(page.locator('#about .heading')).toHaveText("I break things so users don't have to");
    await expect(page.locator('#about .heading')).toBeVisible();
    await expect(page.locator('.hero-name')).toHaveAccessibleName('Samiul Islam');
  });

  test('experience timeline draws as you scroll', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#timeline')).toHaveClass(/has-draw/);
    await page.evaluate(() => document.getElementById('timeline').scrollIntoView({ block: 'center' }));
    await expect(page.locator('#timeline .tl-item').first()).toHaveClass(/lit/, { timeout: 4000 });
    const scale = await page.locator('.tl-line i').evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).d);
    expect(scale).toBeGreaterThan(0);
  });

  test('custom cursor on desktop, native cursor on touch', async ({ page }, testInfo) => {
    await page.goto('/');
    if (isMobile(testInfo)) {
      await page.waitForFunction(() => window.gsap);
      await expect(page.locator('html')).not.toHaveClass(/has-cursor/);
      await expect(page.locator('#cursorRing')).toBeHidden();
      return;
    }
    await expect(page.locator('html')).toHaveClass(/has-cursor/);
    await expect(page.locator('#cursorRing')).toHaveClass(/is-out/); // hidden before the mouse moves
    await page.mouse.move(400, 300);
    await expect(page.locator('#cursorRing')).not.toHaveClass(/is-out/);
    await page.waitForTimeout(700);
    const box = await page.locator('#cursorRing').boundingBox();
    expect(Math.abs(box.x + box.width / 2 - 400)).toBeLessThan(6);
    await page.locator('.hero-cta .btn-accent').hover();
    await expect(page.locator('#cursorRing')).toHaveClass(/is-link/);
    await expect(page.locator('#hudX')).toHaveText(/^\d{4}$/);
  });

  test('project cards scan and open the repo when clicked', async ({ page, context }) => {
    await page.goto('/');
    const card = page.locator('#projectGrid .project').first();
    await expect(card.locator('.scan-pass')).toHaveText('✓ PASS');
    await card.scrollIntoViewIfNeeded();
    const popupPromise = context.waitForEvent('page');
    await card.locator('p').click();
    const popup = await popupPromise;
    expect(popup.url()).toContain('github.com/samiul501/AutonomaPI');
    await popup.close();
  });
});
