// All public repositories from github.com/samiul501 (profile README repo excluded).
const GH = 'https://github.com/samiul501/';

const projects = [
  // ---------- Automation ----------
  {
    name: 'AutonomaPI', repo: 'AutonomaPI', category: 'automation', featured: true, icon: '🤖', lang: 'Python',
    desc: 'Autonomous API testing agent: reads an OpenAPI spec, chains dependent endpoints, fuzzes them, and flags auth-bypass, BOLA and data-leak bugs on a live dashboard.',
    tags: ['FastAPI', 'Next.js', 'Fuzzing', 'Security testing'],
  },
  {
    name: 'AI-QA Automation Framework', repo: 'AI-QA-Automation-Framework', category: 'automation', featured: true, icon: '🧠', lang: 'JavaScript',
    desc: 'Safety-first web test automation framework: Playwright + Page Object Model with a 12-agent QA pipeline driven through Claude Code. 251 framework tests, CI-ready.',
    tags: ['Playwright', 'POM', 'AI agents', 'Claude Code'],
  },
  {
    name: 'AI Android Automation Studio', repo: 'AI-Android-Automation-Studio', category: 'automation', featured: true, icon: '📱', lang: 'TypeScript',
    desc: 'Record taps on a real Android phone, generate a clean test script, run it live, and get an AI-explained failure report (HTML/PDF/XLSX). No emulator needed.',
    tags: ['Android', 'React', 'Mobile testing'],
  },
  {
    name: 'POS Automation Framework', repo: 'pos-automation-framework', category: 'automation', featured: true, icon: '🧾', lang: 'Python',
    desc: 'End-to-end automation for a retail POS: Windows desktop app (pywinauto), back-office web (Playwright), SQL Server verification, Flask console, Allure and GitHub Actions.',
    tags: ['pywinauto', 'Playwright', 'Pytest', 'SQL Server', 'Allure'],
  },
  {
    name: 'SauceDemo Automation Testing', repo: 'sauceDemo_automation_testing', category: 'automation', icon: '🛒', lang: 'Python',
    desc: 'Selenium + Python UI tests for SauceDemo: full checkout for standard and performance-glitch users, locked-out login, with assertions on products, total and confirmation.',
    tags: ['Selenium', 'Python', 'UI testing'],
  },
  {
    name: 'My First Automation Project', repo: 'my_first_automation-_project', category: 'automation', icon: '🌱', lang: 'Python',
    desc: 'My first test automation project, written in Python — where the automation journey started.',
    tags: ['Python', 'Automation'],
  },

  // ---------- API & Performance ----------
  {
    name: 'Performance Testing with k6', repo: 'performance-testing-with-k6', category: 'api', featured: true, icon: '⚡', lang: 'HTML',
    desc: 'Hands-on performance testing with k6: homepage, user-journey, load and stress tests with HTML reporting.',
    tags: ['k6', 'Load testing', 'Stress testing'],
  },
  {
    name: 'Ecom API Testing (Postman)', repo: 'Ecom-API-Testing-Postman', category: 'api', icon: '🧪', lang: null,
    desc: 'API testing project for the DummyJSON REST API: Postman collections, environments and test scripts, run with Newman.',
    tags: ['Postman', 'Newman', 'REST API'],
  },
  {
    name: 'Pet Store API Testing', repo: 'Pet_Store_API_Testing', category: 'api', icon: '🐶', lang: 'HTML',
    desc: 'PetStore API testing with Postman and Newman: user, product and order scenarios with status, data and response-time assertions, HTML reports and Jenkins CI.',
    tags: ['Postman', 'Newman', 'Jenkins'],
  },
  {
    name: 'Books API (Express) with JMeter', repo: 'Books-api-express-with-JMETER', category: 'api', icon: '📚', lang: 'JavaScript',
    desc: 'Node.js + Express + SQLite Books REST API (CRUD, Docker) used as a practice target for API and JMeter testing.',
    tags: ['Express', 'SQLite', 'JMeter', 'Docker'],
  },
  {
    name: 'Bookstore API', repo: 'bookstore-api', category: 'api', icon: '📖', lang: null,
    desc: 'Bookstore REST API practice project for API testing.',
    tags: ['API'],
  },

  // ---------- Manual testing ----------
  {
    name: 'EchoGPT AI Testing', repo: 'Echogpt-AI-Testing', category: 'manual', featured: true, icon: '💬', lang: null,
    desc: "QA evaluation of EchoGPT's sign-up feature: 39 test cases across functional, security, usability, accessibility and performance, with strategy, bug reports and summary.",
    tags: ['Manual testing', 'Bug reports', 'JMeter'],
  },
  {
    name: 'NextJobz Manual Testing', repo: 'Nextjobz-manual-testing-Jobseeker', category: 'manual', icon: '💼', lang: null,
    desc: 'Manual testing portfolio for the NextJobz job-seeker portal: test plan, test strategy, manual test cases and QA documentation.',
    tags: ['Test plan', 'Test cases', 'Agile'],
  },
  {
    name: 'Evershop Manual & API Testing', repo: 'Evershop_Demo_Manual-API-Testing', category: 'manual', icon: '🏬', lang: null,
    desc: 'Manual and API testing of the Evershop demo e-commerce site: requirement analysis, test scenarios, UI test cases, a Postman collection and documentation.',
    tags: ['Manual testing', 'Postman', 'E-commerce'],
  },

  // ---------- Development & other ----------
  {
    name: 'English & Bangla Digit Prediction', repo: 'English-and-Bangla-digit-prediction-PythonProject-', category: 'other', icon: '🔢', lang: null,
    desc: 'AI project in Python that predicts handwritten English and Bangla digits.',
    tags: ['Python', 'Machine learning'],
  },
  {
    name: 'EduMentor', repo: 'Edu-_mentor', category: 'other', icon: '🎓', lang: 'JavaScript',
    desc: 'Education web app with login/register, toast notifications, and private routes for requesting and adding classes.',
    tags: ['JavaScript', 'Auth', 'Web app'],
  },
  {
    name: 'Tourism Management', repo: 'Tourism-Mangagement-web-based-project-', category: 'other', icon: '🧭', lang: null,
    desc: 'Web-based tourism management project.',
    tags: ['Web app'],
  },
  {
    name: 'JavaScript Mid-to-High Level Problems', repo: 'Java_script_Mid-to-High_level_problem_solve', category: 'other', icon: '🧩', lang: 'JavaScript',
    desc: 'Mid- to high-level JavaScript problem-solving exercises.',
    tags: ['JavaScript', 'Problem solving'],
  },
  {
    name: 'JavaScript Basic Problems', repo: 'java_script_Basic_problem', category: 'other', icon: '✏️', lang: 'JavaScript',
    desc: 'Basic JavaScript problem-solving exercises.',
    tags: ['JavaScript', 'Problem solving'],
  },
  {
    name: 'Portfolio (v1)', repo: 'samiul-islam-portfolio-', category: 'other', icon: '🗂️', lang: 'CSS',
    desc: 'The first version of my personal portfolio website.',
    tags: ['HTML', 'CSS'], demo: 'https://samiul501.github.io/samiul-islam/',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'automation', label: 'Automation' },
  { id: 'api', label: 'API & Performance' },
  { id: 'manual', label: 'Manual Testing' },
  { id: 'other', label: 'Development & Other' },
];

const langColors = {
  Python: '#3572A5', JavaScript: '#f1e05a', TypeScript: '#3178c6', HTML: '#e34c26', CSS: '#563d7c',
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function countFor(id) {
  if (id === 'all') return projects.length;
  if (id === 'featured') return projects.filter((p) => p.featured).length;
  return projects.filter((p) => p.category === id).length;
}

function renderFilters(active) {
  document.getElementById('filters').innerHTML = categories
    .map((c) => `<button class="filter${c.id === active ? ' active' : ''}" data-cat="${c.id}">${c.label}<small>${countFor(c.id)}</small></button>`)
    .join('');
}

function renderProjects(cat) {
  const list = projects.filter((p) => cat === 'all' || (cat === 'featured' ? p.featured : p.category === cat));
  document.getElementById('projectsGrid').innerHTML = list
    .map((p, i) => `
      <article class="project" style="animation-delay:${i * 30}ms">
        <div class="project-top">
          <div class="project-icon">${p.icon}</div>
          ${p.featured ? '<span class="featured-tag">Featured</span>' : ''}
        </div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="chips">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        <div class="project-foot">
          <span class="lang">${p.lang ? `<i style="background:${langColors[p.lang] || '#94a3b8'}"></i>${p.lang}` : 'Docs / Collections'}</span>
          <span>
            ${p.demo ? `<a class="project-link" href="${p.demo}" target="_blank" rel="noopener">Live</a> · ` : ''}
            <a class="project-link" href="${GH + p.repo}" target="_blank" rel="noopener">Code →</a>
          </span>
        </div>
      </article>`)
    .join('');
}

function renderStats() {
  const stats = [
    [projects.length, 'Public projects'],
    [countFor('automation'), 'Automation frameworks'],
    [countFor('api'), 'API & performance suites'],
    [countFor('manual'), 'Manual QA case studies'],
  ];
  document.getElementById('stats').innerHTML = stats
    .map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`)
    .join('');
}

let current = 'all';
renderFilters(current);
renderProjects(current);
renderStats();

document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  current = btn.dataset.cat;
  renderFilters(current);
  renderProjects(current);
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = isDark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

document.getElementById('year').textContent = new Date().getFullYear();
