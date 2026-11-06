/* =========================================================
   Motion layer (loaded after script.js, all deferred)
   1. Boot sequence      2. Lenis smooth scroll
   3. GSAP ScrollTrigger (split headings, timeline draw, parallax, hero intro)
   4. Text scramble      5. Custom cursor   6. Magnetic buttons
   (7. project scan line is pure CSS in animations.css)
   Every part checks for reduced motion and for the libraries,
   so the site still works if any of this fails to load.
   ========================================================= */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const gsap = window.gsap;
  const hasGsap = !!(gsap && window.ScrollTrigger);
  const q = (s, el = document) => el.querySelector(s);
  const qa = (s, el = document) => [...el.querySelectorAll(s)];

  let lenis = null;
  let bootDone = !root.classList.contains('is-booting');
  const afterBoot = [];
  const whenBooted = (fn) => (bootDone ? fn() : afterBoot.push(fn));

  /* ---------------- 1. Boot sequence ---------------- */
  function runBoot() {
    window.__bootStarted = true;
    const boot = q('#boot'), log = q('#bootLog'), bar = q('#bootProgress');
    const total = typeof qaReport !== 'undefined' ? qaReport.tests.total : 46;
    const passed = typeof qaReport !== 'undefined' ? qaReport.tests.passed : total;
    const lines = [
      { t: 'cmd', s: 'npx playwright test', type: true },
      { t: 'dim', s: `Running ${total} tests using 2 workers` },
      { t: 'ok', s: '  ✓ hero <em>› renders with no console errors</em>' },
      { t: 'ok', s: '  ✓ projects <em>› 20 public repos, filters work</em>' },
      { t: 'ok', s: '  ✓ contact <em>› message delivered</em>' },
      { t: 'ok', s: '  ✓ mobile <em>› no horizontal overflow</em>' },
      { t: 'progress' },
      { t: 'pass', s: `  ${passed} passed` },
      { t: 'cmd', s: 'open portfolio --user samiul', type: true },
      { t: 'go', s: '> ALL SYSTEMS GO — welcome.' },
    ];
    let finished = false, timer = null;
    const html = [];
    const render = (extra = '') => { log.innerHTML = html.join('\n') + extra; };
    const wait = (ms) => new Promise((r) => { timer = setTimeout(r, ms); });

    async function play() {
      for (const line of lines) {
        if (finished) return;
        if (line.t === 'progress') {
          for (let p = 0; p <= 100; p += 5) { if (finished) return; bar.style.width = `${p}%`; await wait(16); }
          continue;
        }
        if (line.type) {
          let out = '';
          for (const ch of line.s) { if (finished) return; out += ch; render(`${html.length ? '\n' : ''}<span class="b-cmd">${out}</span><span class="b-caret"></span>`); await wait(22); }
          html.push(`<span class="b-cmd">${line.s}</span>`);
          await wait(120);
        } else {
          html.push(`<span class="b-${line.t}">${line.s}</span>`);
          render('<span class="b-caret"></span>');
          await wait(line.t === 'go' ? 450 : 90);
        }
      }
      leave();
    }

    function leave() {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      clearTimeout(window.__bootSafety);
      boot.classList.add('leave');
      root.classList.remove('is-booting');
      try { sessionStorage.setItem('booted', '1'); } catch (e) {}
      ['keydown', 'pointerdown', 'wheel', 'touchstart'].forEach((ev) => removeEventListener(ev, leave));
      setTimeout(() => { boot.classList.remove('leave'); boot.style.display = 'none'; }, 800);
      bootDone = true;
      if (lenis) lenis.start();
      afterBoot.splice(0).forEach((fn) => fn());
    }

    ['keydown', 'pointerdown', 'wheel', 'touchstart'].forEach((ev) => addEventListener(ev, leave, { passive: true }));
    play();
  }
  if (!bootDone) runBoot();

  if (reduce) { root.classList.remove('anim-pending'); return; }

  /* ---------------- 2. Lenis smooth scroll ---------------- */
  if (window.Lenis && finePointer) {
    lenis = new window.Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -76 } });
    if (!bootDone) lenis.stop();
    if (hasGsap) {
      lenis.on('scroll', window.ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
    window.__lenis = lenis;
  }

  /* ---------------- 4. Text scramble ---------------- */
  const GLYPHS = '!<>-_\\/[]{}=+*^?#$%&01ABCDEFXZ';
  function scramble(el, duration = 900) {
    const text = el.dataset.text || el.textContent;
    el.dataset.text = text;
    const start = performance.now();
    (function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const revealCount = Math.floor(p * text.length);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (i < revealCount || c === ' ') out += c;
        else out += `<span class="scr">${GLYPHS[(Math.random() * GLYPHS.length) | 0]}</span>`;
      }
      el.innerHTML = out;
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    })(start);
  }

  /* ---------------- 3. GSAP + ScrollTrigger ---------------- */
  if (hasGsap) {
    const ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);
    if (window.SplitText) gsap.registerPlugin(window.SplitText);
    const stopReveal = (el) => {
      el.classList.remove('reveal');
      el.classList.add('in');
      if (typeof revealObserver !== 'undefined') revealObserver.unobserve(el);
    };

    // Hero name: characters rise in after the boot sequence
    const heroName = q('.hero-name');
    if (heroName && window.SplitText) {
      stopReveal(heroName);
      const split = new window.SplitText(heroName, { type: 'words,chars', wordsClass: 'word', charsClass: 'char' });
      heroName.classList.add('is-split');
      gsap.set(split.chars, { yPercent: 115, rotate: 8, opacity: 0 });
      root.classList.remove('anim-pending');
      whenBooted(() => {
        gsap.to(split.chars, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.035, delay: 0.15 });
      });
    } else {
      root.classList.remove('anim-pending');
    }

    // Section headings: words slide up from behind a line mask
    if (window.SplitText) {
      const splitHeading = (el) => {
        window.SplitText.create(el, {
          type: 'lines,words', mask: 'lines', linesClass: 'split-line', wordsClass: 'word', autoSplit: true,
          onSplit: (self) => gsap.from(self.words, {
            yPercent: 110, duration: 0.95, ease: 'power4.out', stagger: 0.055,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            onComplete: () => self.revert(), // drop the line masks so the heading glow isn't clipped
          }),
        });
      };
      // split each heading only when it is about a screen away, keeping startup light
      const headIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { headIO.unobserve(e.target); splitHeading(e.target); } });
      }, { rootMargin: '0px 0px 100% 0px' });
      qa('.heading').forEach((el) => { stopReveal(el); headIO.observe(el); });
    }

    // Kickers: decode effect when they scroll into view
    qa('.kicker, .mono-label').forEach((el) => {
      ST.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => whenBooted(() => scramble(el)) });
    });

    // Experience: the timeline line draws itself as you scroll, dots light up
    const tl = q('#timeline');
    if (tl) {
      tl.classList.add('has-draw');
      const line = document.createElement('div');
      line.className = 'tl-line';
      line.innerHTML = '<i></i>';
      tl.prepend(line);
      gsap.to(line.firstChild, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: tl, start: 'top 72%', end: 'bottom 72%', scrub: 0.6 },
      });
      qa('.tl-item', tl).forEach((item) => {
        ST.create({
          trigger: item, start: 'top 72%',
          onEnter: () => item.classList.add('lit'),
          onLeaveBack: () => item.classList.remove('lit'),
        });
      });
    }

    // Parallax depth: floating icons drift at different speeds, hero content eases away
    const hero = q('.hero');
    if (hero) {
      qa('.fl, .tag-float', hero).forEach((el, i) => {
        const depth = 60 + ((i * 37) % 140); // 60–200px
        gsap.to(el, { '--py': `${-depth}px`, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      });
      gsap.to('.hero-grid', { y: -70, opacity: 0.35, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    }
    if (finePointer) qa('.aurora').forEach((el, i) => {
      gsap.to(el, { '--py': `${[220, -160, 300][i] || 120}px`, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 } });
    });

    // Keep trigger positions right when content height changes (filters, fonts, images)
    let rt;
    new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => ST.refresh(), 150); }).observe(q('main'));
    if (document.fonts) document.fonts.ready.then(() => ST.refresh());
  } else {
    root.classList.remove('anim-pending');
  }

  /* ---------------- 5. Custom cursor ---------------- */
  if (finePointer && hasGsap) {
    const dot = q('#cursorDot'), ring = q('#cursorRing'), label = q('#cursorLabel');
    root.classList.add('has-cursor');
    ring.classList.add('is-out'); dot.classList.add('is-out'); // hidden until the mouse moves
    const dx = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' });
    const rx = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3' });
    const setState = (state, text = '') => {
      ['is-link', 'is-view', 'is-text'].forEach((c) => { ring.classList.toggle(c, c === state); dot.classList.toggle(c, c === state); });
      label.textContent = text;
    };
    addEventListener('pointermove', (e) => {
      dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
      ring.classList.remove('is-out'); dot.classList.remove('is-out');
    }, { passive: true });
    document.addEventListener('pointerover', (e) => {
      const t = e.target;
      if (t.closest('input, textarea')) return setState('is-text');
      const link = t.closest('a, button, label, .filter');
      const card = t.closest('.project');
      if (card && !link) return setState('is-view', 'VIEW');
      if (link) return setState('is-link');
      setState(null);
    });
    document.addEventListener('pointerleave', () => { ring.classList.add('is-out'); dot.classList.add('is-out'); });
    addEventListener('pointerdown', () => ring.classList.add('is-down'));
    addEventListener('pointerup', () => ring.classList.remove('is-down'));
  }

  /* ---------------- 6. Magnetic buttons ---------------- */
  if (finePointer && hasGsap) {
    qa('.btn, .icon-btn, .chip-link').forEach((el) => {
      const strength = el.classList.contains('chip-link') ? 0.25 : 0.35;
      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      el.addEventListener('pointerleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }
})();
