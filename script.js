/* =========================================================
   DATA — from CV + public GitHub repos (github.com/samiul501)
   ========================================================= */
const GH = 'https://github.com/samiul501/';

const roles = ['Junior SQA Engineer', 'API Tester', 'Performance Tester', 'Automation Enthusiast', 'Bug Hunter'];

const domains = ['ERP', 'POS', 'Business Management (BMA)', 'Job Portal', 'E-commerce', 'AI Chat', 'REST APIs', 'Android', 'Windows Desktop', 'Ticketing'];

const services = [
  { t: 'Manual & functional testing', d: 'Test case design and execution across functional, integration, system, regression and UAT, plus UI/UX and workflow validation.',
    i: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
  { t: 'API testing', d: 'Postman collections and Newman runs with assertions on status codes, payloads and response times, wired into CI.',
    i: '<path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>' },
  { t: 'Performance testing', d: 'Load, stress and user-journey tests with Apache JMeter and k6: throughput, response time, APDEX and HTML reports.',
    i: '<path d="M12 14l4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>' },
  { t: 'UI test automation', d: 'Playwright and Selenium suites built on the Page Object Model, plus pywinauto for Windows desktop apps.',
    i: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M10 9l-2 2 2 2M14 9l2 2-2 2"/>' },
  { t: 'AI-assisted QA', d: 'Agent-driven pipelines that read specs, generate and run tests, and explain failures — built with Claude Code.',
    i: '<path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>' },
  { t: 'QA documentation & Agile', d: 'Test plans, checklists, RTM and clear bug reports, with defects tracked in Jira through Scrum sprints.',
    i: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>' },
];

const skills = [
  { t: 'Testing', s: ['Manual Testing', 'Test Case Design', 'Functional', 'Integration', 'Regression', 'UAT', 'Usability', 'Security basics', 'Root Cause Analysis'] },
  { t: 'API & Performance', s: ['Postman', 'Newman', 'REST APIs', 'Apache JMeter', 'k6', 'APDEX analysis'] },
  { t: 'Automation', s: ['Playwright', 'Selenium', 'Pytest', 'pywinauto', 'Page Object Model', 'Allure'] },
  { t: 'Process & Docs', s: ['SDLC', 'STLC', 'Defect Life Cycle', 'Agile Scrum', 'Test Plans', 'RTM', 'Bug Reports'] },
  { t: 'Languages & Data', s: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'MySQL', 'SQL Server'] },
  { t: 'Tools & CI', s: ['Jira', 'Git', 'GitHub Actions', 'Jenkins', 'Docker', 'Claude Code'] },
  { t: 'AI & Productivity', s: ['AI-assisted Testing', 'Agent Pipelines', 'Prompt Engineering', 'LLM test generation'] },
  { t: 'Platforms', s: ['Web', 'Windows Desktop', 'Android', 'ERP / POS'] },
  { t: 'Soft skills', s: ['Analytical Thinking', 'Attention to Detail', 'Communication', 'Teamwork', 'Adaptability', 'Time Management'] },
];

const experience = [
  {
    role: 'Junior Software QA Engineer', date: 'Feb 2026 — Present', org: 'AKIJ iBOS Limited', loc: 'Dhaka, Bangladesh',
    points: [
      'Perform manual, API and performance testing for Managerium ERP, Managerium POS, BMA and NextJobz.',
      'Design and execute test cases; perform functional, integration, system, regression and UAT testing.',
      'Run API tests with Postman / Newman and performance tests with Apache JMeter.',
      'Prepare test plans, test cases, checklists and bug reports following SDLC, STLC and Agile Scrum practices.',
      'Report, track and verify defects in Jira, working with developers to get them resolved on time.',
      'Validate business workflows, UI/UX, ERP/POS modules and critical functionality before production releases.',
    ],
    tags: ['ERP', 'POS', 'Postman', 'JMeter', 'Jira'],
  },
  {
    role: 'Automation Testing Engineer (Intern)', date: 'Dec 2025 — Jan 2026', org: 'a1qa', loc: '',
    points: ['Developed and executed automated test scripts while learning modern automation frameworks and QA best practices.'],
    tags: ['Automation', 'Frameworks'],
  },
  {
    role: 'SQA Engineer (Intern)', date: 'Sep 2025 — Nov 2025', org: 'Zensoft Lab', loc: '',
    points: ['Performed manual and API testing, regression testing and bug reporting, and took part in Agile Scrum activities.'],
    tags: ['Manual', 'API', 'Scrum'],
  },
];

const education = [
  { date: 'Feb 2022 — Feb 2026', t: 'BSc in Computer Science & Engineering', o: 'Green University of Bangladesh, Dhaka' },
  { date: 'Jun 2018 — May 2021', t: 'Higher Secondary Certificate (HSC)', o: 'Police Lines College, Bogura', gpa: 'GPA 5.00 / 5.00' },
  { date: 'Jan 2015 — May 2017', t: 'Secondary School Certificate (SSC)', o: 'Hatibandha High School, Bogura', gpa: 'GPA 4.94 / 5.00' },
];

const certs = [
  { t: 'Software Testing and Quality Assurance', o: 'People N Tech', d: 'Hands-on manual and automation testing, test case design, bug reporting and secure coding practices.', url: 'https://www.peoplentech.com.bd/' },
  { t: 'SQA Manual and Automation Testing', o: 'Ostad', d: 'SDLC, STLC, API testing (Postman, Newman), UI automation (Selenium, Playwright) and database testing.', url: 'https://ostad.app' },
  { t: 'Get Started with Jira', o: 'Coursera', d: 'Jira fundamentals: project setup, task and workflow management, and agile boards.', url: 'https://www.coursera.org/account/accomplishments/verify/4F4OA6A0AJV5', verify: true },
  { t: 'Automation Testing Basics', o: 'Simplilearn', d: 'Foundations of automation testing concepts and practices.' },
];

const activities = [
  { t: 'Technical Seminar Participation', o: 'IEEE Computer Society SBC, GUB', d: 'Certificate for the seminar "Towards Data-Efficient and Interpretable Computer Vision: Advances in Few-Shot Learning and Explainable AI", presented by the GUB Vice-Chancellor and the CSE Chairperson.', icon: 'award' },
  { t: 'Volunteer — STI 2025 International Conference', o: 'Green University of Bangladesh · Dec 2025', d: 'Volunteered at the two-day international conference held on 18–19 December 2025.', icon: 'users' },
  { t: 'Rover Scout Volunteer', o: 'Police Lines School & College, Bogura · 2018 — 2020', d: 'Leadership, community service and teamwork as a Rover Scout.', icon: 'flag' },
];

const projects = [
  // Automation
  { name: 'AutonomaPI', repo: 'AutonomaPI', cat: 'automation', featured: true, lang: 'Python',
    desc: 'Autonomous API testing agent: reads an OpenAPI spec, chains dependent endpoints, fuzzes them, and flags auth-bypass, BOLA and data-leak bugs on a live dashboard.',
    tags: ['FastAPI', 'Next.js', 'Fuzzing', 'Security testing'] },
  { name: 'AI-QA Automation Framework', repo: 'AI-QA-Automation-Framework', cat: 'automation', featured: true, lang: 'JavaScript',
    desc: 'Safety-first web test automation framework: Playwright + Page Object Model with a 12-agent QA pipeline driven through Claude Code. 251 framework tests, CI-ready.',
    tags: ['Playwright', 'POM', 'AI agents', 'Claude Code'] },
  { name: 'AI Android Automation Studio', repo: 'AI-Android-Automation-Studio', cat: 'automation', featured: true, lang: 'TypeScript',
    desc: 'Record taps on a real Android phone, generate a clean test script, run it live, and get an AI-explained failure report (HTML/PDF/XLSX). No emulator needed.',
    tags: ['Android', 'React', 'Mobile testing'] },
  { name: 'POS Automation Framework', repo: 'pos-automation-framework', cat: 'automation', featured: true, lang: 'Python',
    desc: 'End-to-end automation for a retail POS: Windows desktop app (pywinauto), back-office web (Playwright), SQL Server verification, Flask console, Allure and GitHub Actions.',
    tags: ['pywinauto', 'Playwright', 'Pytest', 'SQL Server', 'Allure'] },
  { name: 'SauceDemo Automation Testing', repo: 'sauceDemo_automation_testing', cat: 'automation', lang: 'Python',
    desc: 'Selenium + Python UI tests for SauceDemo: full checkout for standard and performance-glitch users, locked-out login, with assertions on products, total and confirmation.',
    tags: ['Selenium', 'Python', 'UI testing'] },
  { name: 'My First Automation Project', repo: 'my_first_automation-_project', cat: 'automation', lang: 'Python',
    desc: 'My first test automation project, written in Python — where the automation journey started.',
    tags: ['Python', 'Automation'] },
  // API & performance
  { name: 'Performance Testing with k6 (Shohoz)', repo: 'performance-testing-with-k6', cat: 'api', featured: true, lang: 'HTML',
    desc: 'k6 scripts for homepage, user-journey, load and stress testing, with automated HTML reports and performance analysis.',
    tags: ['k6', 'Load testing', 'Stress testing'] },
  { name: 'Ecom API Testing (Postman)', repo: 'Ecom-API-Testing-Postman', cat: 'api', lang: null,
    desc: 'API testing project for the DummyJSON REST API: Postman collections, environments and test scripts, run with Newman.',
    tags: ['Postman', 'Newman', 'REST API'] },
  { name: 'Pet Store API Testing', repo: 'Pet_Store_API_Testing', cat: 'api', lang: 'HTML',
    desc: 'PetStore API testing with Postman and Newman: user, product and order scenarios with status, data and response-time assertions, HTML reports and Jenkins CI.',
    tags: ['Postman', 'Newman', 'Jenkins'] },
  { name: 'Books API (Express) with JMeter', repo: 'Books-api-express-with-JMETER', cat: 'api', lang: 'JavaScript',
    desc: 'Node.js + Express + SQLite Books REST API (CRUD, Docker) used as a practice target for API and JMeter testing.',
    tags: ['Express', 'SQLite', 'JMeter', 'Docker'] },
  { name: 'Bookstore API', repo: 'bookstore-api', cat: 'api', lang: null,
    desc: 'Bookstore REST API practice project for API testing.',
    tags: ['API'] },
  // Manual
  { name: 'EchoGPT QA Project', repo: 'Echogpt-AI-Testing', cat: 'manual', featured: true, lang: null,
    desc: "QA evaluation of EchoGPT's sign-up: 39 test cases across functional, security, usability, accessibility and performance using Selenium and JMeter, with risk assessment and full documentation.",
    tags: ['Manual testing', 'Selenium', 'JMeter', 'Bug reports'] },
  { name: 'Evershop Manual & API Testing', repo: 'Evershop_Demo_Manual-API-Testing', cat: 'manual', lang: null,
    desc: 'Manual and API testing of the EverShop e-commerce app: requirement analysis, test scenarios, UI test cases, RTM, bug reports and a Postman collection.',
    tags: ['Manual testing', 'Postman', 'RTM'] },
  { name: 'NextJobz Manual Testing', repo: 'Nextjobz-manual-testing-Jobseeker', cat: 'manual', lang: null,
    desc: 'Manual testing portfolio for the NextJobz job-seeker portal: test plan, test strategy, manual test cases and QA documentation.',
    tags: ['Test plan', 'Test cases', 'Agile'] },
  // Other
  { name: 'English & Bangla Digit Prediction', repo: 'English-and-Bangla-digit-prediction-PythonProject-', cat: 'other', lang: null,
    desc: 'AI project in Python that predicts handwritten English and Bangla digits.',
    tags: ['Python', 'Machine learning'] },
  { name: 'EduMentor', repo: 'Edu-_mentor', cat: 'other', lang: 'JavaScript',
    desc: 'Education web app with login/register, toast notifications, and private routes for requesting and adding classes.',
    tags: ['JavaScript', 'Auth', 'Web app'] },
  { name: 'Tourism Management', repo: 'Tourism-Mangagement-web-based-project-', cat: 'other', lang: null,
    desc: 'Web-based tourism management project.',
    tags: ['Web app'] },
  { name: 'JavaScript Mid-to-High Level Problems', repo: 'Java_script_Mid-to-High_level_problem_solve', cat: 'other', lang: 'JavaScript',
    desc: 'Mid- to high-level JavaScript problem-solving exercises.',
    tags: ['JavaScript', 'Problem solving'] },
  { name: 'JavaScript Basic Problems', repo: 'java_script_Basic_problem', cat: 'other', lang: 'JavaScript',
    desc: 'Basic JavaScript problem-solving exercises.',
    tags: ['JavaScript', 'Problem solving'] },
  { name: 'Portfolio (v1)', repo: 'samiul-islam-portfolio-', cat: 'other', lang: 'CSS',
    desc: 'The first version of my personal portfolio website.',
    tags: ['HTML', 'CSS'], demo: 'https://samiul501.github.io/samiul-islam/' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'automation', label: 'Automation' },
  { id: 'api', label: 'API & Performance' },
  { id: 'manual', label: 'Manual Testing' },
  { id: 'other', label: 'Development & Other' },
];

const langColors = { Python: '#3572A5', JavaScript: '#f1e05a', TypeScript: '#3178c6', HTML: '#e34c26', CSS: '#563d7c' };

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = (n, l = 2) => String(n).padStart(l, '0');
const svg = (inner, size = 20) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const icons = {
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  cert: '<circle cx="12" cy="9" r="6"/><path d="M9 14.5L8 22l4-2 4 2-1-7.5"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 3.1a4 4 0 0 1 0 7.8M22 21a7 7 0 0 0-5-6.7"/>',
  flag: '<path d="M4 22V4M4 4h13l-2 4 2 4H4"/>',
  ext: '<path d="M7 17L17 7M8 7h9v9"/>',
};

/* =========================================================
   Render
   ========================================================= */
function renderStats() {
  const stats = [
    [projects.length, '', 'Public GitHub projects'],
    [3, '', 'QA roles & internships'],
    [4, '', 'Products tested at work'],
    [4, '', 'Certifications'],
  ];
  $('#statGrid').innerHTML = stats.map(([n, suf, l]) =>
    `<div class="stat"><b><span class="count" data-to="${n}">0</span>${suf}</b><span>${l}</span></div>`).join('');
}

function renderMarquee() {
  const items = domains.map((d) => `<span class="domain">${esc(d)}</span>`).join('');
  $('#marqueeTrack').innerHTML = items + items; // duplicated for seamless loop
  $('#domainCount').textContent = pad(domains.length);
}

function renderServices() {
  $('#serviceGrid').innerHTML = services.map((s, i) => `
    <article class="service reveal spot" style="--d:${(i % 3) * 0.08}s">
      <div class="service-icon">${svg(s.i)}</div>
      <h3>${esc(s.t)}</h3>
      <p>${esc(s.d)}</p>
    </article>`).join('');
}

function renderSkills() {
  $('#skillBoard').innerHTML = skills.map((g, i) => `
    <div class="skill-cell">
      <div class="skill-top"><h3>${esc(g.t)}</h3><span>${pad(i + 1)}</span></div>
      <div class="chips">${g.s.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
    </div>`).join('');
}

function renderExperience() {
  $('#timeline').innerHTML = experience.map((e) => `
    <div class="tl-item reveal">
      <div class="tl-head"><h3>${esc(e.role)}</h3><span class="date-pill">${esc(e.date)}</span></div>
      <div class="tl-org">${svg('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>', 15)}<b>${esc(e.org)}</b>${e.loc ? ` · ${esc(e.loc)}` : ''}</div>
      <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      <div class="chips">${e.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    </div>`).join('');
}

function renderEducation() {
  $('#eduList').innerHTML = education.map((e, i) => `
    <div class="edu-item reveal" style="--d:${i * 0.08}s">
      <div class="edu-icon">${svg(icons.cap, 19)}</div>
      <div>
        <span class="edu-date">— ${esc(e.date)}</span>
        <h3>${esc(e.t)}</h3>
        <p>${esc(e.o)}</p>
        ${e.gpa ? `<span class="gpa">${esc(e.gpa)}</span>` : ''}
      </div>
    </div>`).join('');

  $('#certGrid').innerHTML = certs.map((c, i) => `
    <div class="cert reveal spot" style="--d:${(i % 2) * 0.08}s">
      <div class="edu-icon">${svg(icons.cert, 19)}</div>
      <div>
        <h4>${esc(c.t)}</h4>
        <span class="org">${esc(c.o)}</span>
        <p>${esc(c.d)}</p>
        ${c.url ? `<a class="verify" href="${c.url}" target="_blank" rel="noopener">${c.verify ? 'Verify certificate' : 'Visit'} ↗</a>` : ''}
      </div>
    </div>`).join('');

  $('#activityGrid').innerHTML = activities.map((a, i) => `
    <div class="cert reveal spot" style="--d:${(i % 2) * 0.08}s">
      <div class="edu-icon">${svg(icons[a.icon], 19)}</div>
      <div>
        <h4>${esc(a.t)}</h4>
        <span class="org">${esc(a.o)}</span>
        <p>${esc(a.d)}</p>
      </div>
    </div>`).join('');
}

const countFor = (id) => id === 'all' ? projects.length : id === 'featured' ? projects.filter((p) => p.featured).length : projects.filter((p) => p.cat === id).length;

function renderFilters(active) {
  $('#filters').innerHTML = categories.map((c) =>
    `<button class="filter${c.id === active ? ' active' : ''}" data-cat="${c.id}">${c.label}<small>${pad(countFor(c.id))}</small></button>`).join('');
}

function renderProjects(cat, animate) {
  const list = projects.filter((p) => cat === 'all' || (cat === 'featured' ? p.featured : p.cat === cat));
  const grid = $('#projectGrid');
  grid.innerHTML = list.map((p, i) => `
    <article class="project reveal spot" style="--d:${Math.min(i, 6) * 0.06}s">
      <div class="project-top">
        <h3>${esc(p.name)}</h3>
        ${p.featured ? '<span class="feat">FEATURED</span>' : ''}
      </div>
      <p>${esc(p.desc)}</p>
      <div class="chips">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
      <div class="project-foot">
        <span class="lang">${p.lang ? `<i style="background:${langColors[p.lang] || '#94a3b8'}"></i>${p.lang}` : '<i style="background:var(--faint)"></i>Docs / Collections'}</span>
        <span class="p-links">
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live ${svg(icons.ext, 13)}</a>` : ''}
          <a href="${GH + p.repo}" target="_blank" rel="noopener">Code ${svg(icons.ext, 13)}</a>
        </span>
      </div>
    </article>`).join('');
  if (animate) {
    requestAnimationFrame(() => requestAnimationFrame(() => $$('.project', grid).forEach((el) => el.classList.add('in'))));
  } else {
    $$('.project', grid).forEach((el) => revealObserver.observe(el));
  }
  bindSpotlight(grid);
}

/* =========================================================
   Effects
   ========================================================= */

// Scroll reveal (blur-in)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Typing role
function startTyping() {
  const el = $('#typing');
  if (reduceMotion) { el.textContent = roles[0]; return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = roles[r];
    el.textContent = word.slice(0, c);
    if (!del && c < word.length) { c++; setTimeout(tick, 70); }
    else if (!del) { del = true; setTimeout(tick, 1800); }
    else if (c > 0) { c--; setTimeout(tick, 35); }
    else { del = false; r = (r + 1) % roles.length; setTimeout(tick, 300); }
  })();
}

// Count-up numbers
function countUp(el) {
  const to = +el.dataset.to, dur = 1400, start = performance.now();
  (function step(now) {
    const t = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(to * eased);
    if (t < 1) requestAnimationFrame(step);
  })(start);
}
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { $$('.count', e.target).forEach(countUp); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  io.observe($('#statGrid'));
}

// Card spotlight follows the mouse
function bindSpotlight(root = document) {
  $$('.spot', root).forEach((el) => {
    if (el.dataset.spot) return;
    el.dataset.spot = '1';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

// 3D tilt on the profile card
function initTilt() {
  const card = $('#profileCard');
  if (!card || reduceMotion || window.matchMedia('(hover: none)').matches) return;
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
}

// Twinkling pixels
function initPixels() {
  const host = $('#pixels');
  const n = window.innerWidth < 700 ? 10 : 24;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${-Math.random() * 6}s`;
    p.style.animationDuration = `${4 + Math.random() * 5}s`;
    const s = Math.random() < 0.2 ? 14 : 7;
    p.style.width = p.style.height = `${s}px`;
    host.appendChild(p);
  }
}

// HUD: uptime, clock, FPS, mouse coords, cursor glow
function initHud() {
  const t0 = Date.now();
  const up = $('#hudUptime'), clk = $('#hudClock');
  const tickClock = () => {
    const s = Math.floor((Date.now() - t0) / 1000);
    up.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
    const d = new Date();
    clk.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };
  tickClock(); setInterval(tickClock, 1000);

  let frames = 0, last = performance.now();
  const fpsEl = $('#hudFps');
  (function loop(now) {
    frames++;
    if (now - last >= 1000) { fpsEl.textContent = pad(Math.min(frames, 999), 3); frames = 0; last = now; }
    requestAnimationFrame(loop);
  })(last);

  const hx = $('#hudX'), hy = $('#hudY'), glow = $('#cursorGlow');
  window.addEventListener('pointermove', (e) => {
    hx.textContent = pad(e.clientX, 4); hy.textContent = pad(e.clientY, 4);
    glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// Section tracking: nav highlight, rail, HUD, status pill
function initSections() {
  const sections = $$('main section[data-name]');
  const total = pad(sections.length);
  const dots = $('#railDots');
  dots.innerHTML = sections.map((s, i) =>
    `<a class="rail-dot" href="#${s.id}" style="top:${(i / (sections.length - 1)) * 100}%"><span>${s.dataset.name}</span></a>`).join('');
  const dotEls = $$('.rail-dot', dots);
  const navLinks = $$('#navLinks a');
  const secNum = $('#hudSecNum'), secName = $('#hudSecName'), pillSec = $('#pillSec');
  let current = -1;

  function setActive(i) {
    if (i === current) return;
    current = i;
    const s = sections[i];
    dotEls.forEach((d, j) => d.classList.toggle('active', j === i));
    navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${s.id}`));
    secNum.textContent = `${pad(i + 1)}/${total}`;
    pillSec.textContent = `${pad(i + 1)}/${total} ${s.dataset.name}`;
    // retype the section name
    const name = s.dataset.name;
    let k = 0;
    clearInterval(setActive.timer);
    setActive.timer = setInterval(() => { secName.textContent = name.slice(0, ++k); if (k >= name.length) clearInterval(setActive.timer); }, 40);
  }

  const pctRail = $('#railPct'), pctPill = $('#pillPct'), fill = $('#railFill');
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? Math.round((scrollY / max) * 100) : 0;
    pctRail.textContent = pctPill.textContent = `${pad(pct, 3)}%`;
    fill.style.height = `${pct}%`;
    const mid = scrollY + innerHeight * 0.35;
    let idx = 0;
    sections.forEach((s, i) => { if (s.offsetTop <= mid) idx = i; });
    setActive(idx);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
}

// Theme toggle
function initTheme() {
  $('#themeToggle').addEventListener('click', () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });
}

// Mobile menu
function initMenu() {
  const links = $('#navLinks');
  $('#menuBtn').addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) links.classList.remove('open'); });
}

// Contact form -> delivered to my Gmail through FormSubmit (falls back to mailto)
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/samiul20207@gmail.com';
function initForm() {
  const form = $('#contactForm'), btn = $('#sendBtn'), status = $('#formStatus');
  const setStatus = (html, cls) => { status.innerHTML = html; status.className = `form-status ${cls || ''}`; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = new FormData(form);
    if (f.get('_honey')) return; // bot
    const name = f.get('name').trim(), email = f.get('email').trim(), message = f.get('message').trim();
    const subject = (f.get('subject') || '').trim() || `Portfolio message from ${name}`;
    const mailto = `mailto:samiul20207@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

    btn.disabled = true;
    setStatus('Sending…');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: subject, _replyto: email, _template: 'table', _captcha: 'false' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || `HTTP ${res.status}`);
      form.reset();
      setStatus('✓ Message sent. Thanks — I\'ll reply soon.', 'ok');
    } catch (err) {
      setStatus(`Couldn't send right now. <a href="${mailto}">Email me directly</a> instead.`, 'err');
    } finally {
      btn.disabled = false;
    }
  });
}

/* =========================================================
   Quality report — updated from the latest local / CI run
   ========================================================= */
const qaReport = {
  tests: { passed: 46, total: 46, projects: 'Desktop Chrome + mobile (Pixel 7)' },
  lighthouse: { performance: 90, accessibility: 100, 'best-practices': 100, seo: 100 },
  audited: 'Nov 2026',
};

function renderQa() {
  $('#qaTestCount').dataset.to = qaReport.tests.passed;
  $('#qaTestTotal').textContent = qaReport.tests.total;
  $('#qaTestMeta').textContent = `${qaReport.tests.projects} · runs on every push`;
  const labels = { performance: 'Performance', accessibility: 'Accessibility', 'best-practices': 'Best practices', seo: 'SEO' };
  $('#gauges').innerHTML = Object.entries(qaReport.lighthouse).map(([k, v]) => `
    <div class="gauge${v < 90 ? ' mid' : ''}" data-score="${v}">
      <div class="gauge-ring">
        <svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="42"/><circle class="bar" cx="50" cy="50" r="42"/></svg>
        <span class="gauge-num"><span class="count" data-to="${v}">0</span></span>
      </div>
      <p>${labels[k]}</p>
    </div>`).join('');
  $('#lhMeta').textContent = `Mobile audit · last run ${qaReport.audited}`;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      $$('.count', e.target).forEach(countUp);
      $$('.gauge', e.target).forEach((g) => { $('.bar', g).style.strokeDashoffset = 264 * (1 - g.dataset.score / 100); });
      io.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  $$('.qa-card').forEach((c) => io.observe(c));
}

/* =========================================================
   Boot
   ========================================================= */
renderStats();
renderMarquee();
renderServices();
renderSkills();
renderExperience();
renderEducation();
renderFilters('all');
renderProjects('all', false);
renderQa();

$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  renderFilters(btn.dataset.cat);
  renderProjects(btn.dataset.cat, true);
});

$$('.hero .reveal').forEach((el, i) => el.style.setProperty('--d', `${0.1 + i * 0.09}s`));
$$('.reveal').forEach((el) => revealObserver.observe(el));
bindSpotlight();
startTyping();
initCounters();
initTilt();
initPixels();
initHud();
initSections();
initTheme();
initMenu();
initForm();
$('#year').textContent = new Date().getFullYear();
