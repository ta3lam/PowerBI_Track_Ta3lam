// Shell app — Ta3laM Power BI course platform
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // ─── Internationalization ───────────────────────────────
  const I18N = {
    ar: {
      searchPlaceholder: "ابحث في الدروس...",
      progressLabel: "وصلت لفين؟",
      resetBtn: "↺ ابدأ من الأول",
      tweaksBtn: "Tweaks",
      quizBtn: "📝 اختبر نفسك",
      markDone: "خلّصت الدرس",
      alreadyDone: "✓ خلّصت الدرس ده",
      prevArrow: "← اللي فات",
      nextArrow: "الجاي →",
      readingTime: "وقت القراءة",
      minutes: "دقيقة",
      lessonOf: "درس",
      of: "من",
      resetConfirm: "متأكد إنك عايز تبدأ من الأول؟ هيتمسح كل تقدمك!",
      englishContentNote: "",
      quizNote: "",
      kindLabels: { concept: "فاهم الفكرة", practice: "تطبيق عملي", theory: "نظري", code: "كود", reference: "مرجع" },
      calloutLabels: { warn: "تنبيه مهم", note: "لازم تعرف", tip: "نصيحة" },
    },
    en: {
      searchPlaceholder: "Search lessons...",
      progressLabel: "Your progress",
      resetBtn: "↺ Start over",
      tweaksBtn: "Tweaks",
      quizBtn: "📝 Quiz yourself",
      markDone: "Mark as done",
      alreadyDone: "✓ Lesson complete",
      prevArrow: "← Previous",
      nextArrow: "Next →",
      readingTime: "Read time",
      minutes: "min",
      lessonOf: "Lesson",
      of: "of",
      resetConfirm: "Reset all progress? This cannot be undone.",
      englishContentNote: "<strong>Lesson content is in Arabic.</strong> English translations are coming in a future update.",
      quizNote: "Questions are currently in Arabic.",
      kindLabels: { concept: "Concept", practice: "Practice", theory: "Theory", code: "Code", reference: "Reference" },
      calloutLabels: { warn: "Important", note: "Good to know", tip: "Tip" },
    }
  };

  // ─── State ───────────────────────────────
  const STATE = {
    lang: localStorage.getItem("t3m_lang") || "ar",
    currentId: localStorage.getItem("t3m_current") || "intro",
    done: new Set(JSON.parse(localStorage.getItem("t3m_done") || "[]")),
    openChapters: new Set(JSON.parse(localStorage.getItem("t3m_open") || '["foundations","dax"]')),
  };

  const persist = () => {
    localStorage.setItem("t3m_lang", STATE.lang);
    localStorage.setItem("t3m_current", STATE.currentId);
    localStorage.setItem("t3m_done", JSON.stringify([...STATE.done]));
    localStorage.setItem("t3m_open", JSON.stringify([...STATE.openChapters]));
  };

  const t = (key) => I18N[STATE.lang][key] || I18N.ar[key];

  function setLang(lang) {
    STATE.lang = lang;
    persist();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("lang-en", lang === "en");
    document.documentElement.classList.toggle("lang-ar", lang === "ar");
    updateTopbarLangBtn();
    updateStaticStrings();
    renderSidebar();
    renderLesson();
  }

  window.setLang = setLang;

  const findLesson = (id) => {
    for (const ch of window.CURRICULUM) {
      const l = ch.lessons.find(x => x.id === id);
      if (l) return { lesson: l, chapter: ch };
    }
    return null;
  };

  const flatIndex = (id) => window.ALL_LESSONS.findIndex(l => l.id === id);

  // ─── Sidebar ───────────────────────────────
  function renderSidebar() {
    const toc = $("#toc");
    toc.innerHTML = "";
    window.CURRICULUM.forEach((ch) => {
      const chEl = document.createElement("div");
      chEl.className = "chapter" + (STATE.openChapters.has(ch.id) ? " open" : "");
      chEl.dataset.chapter = ch.id;

      const chTitle = STATE.lang === "en" ? (ch.en || ch.title) : ch.title;
      const chSub = STATE.lang === "en" ? ch.subtitle : ch.en || ch.subtitle;

      chEl.innerHTML = `
        <div class="chapter-head">
          <div class="chapter-num">${ch.num}</div>
          <div style="flex:1;">
            <div class="chapter-title">${chTitle}</div>
            <div class="chapter-sub">${chSub}</div>
          </div>
          <span class="chapter-count">${ch.lessons.length}</span>
          <span class="chapter-chev">▾</span>
        </div>
        <div class="chapter-body">
          ${ch.lessons.map((l, i) => `
            <div class="lesson-item ${STATE.currentId === l.id ? "active" : ""} ${STATE.done.has(l.id) ? "done" : ""}" data-lesson="${l.id}">
              <span class="lesson-idx">${String(i + 1).padStart(2, "0")}</span>
              <span class="lesson-title">${STATE.lang === "en" ? l.en : l.title}</span>
              <span style="display:flex;align-items:center;gap:8px;">
                <span class="lesson-kind" data-k="${l.kind}"></span>
                <span class="lesson-meta">${l.mins}′</span>
              </span>
            </div>
          `).join("")}
        </div>
      `;
      chEl.querySelector(".chapter-head").addEventListener("click", (e) => {
        if (e.target.closest(".lesson-item")) return;
        chEl.classList.toggle("open");
        if (chEl.classList.contains("open")) STATE.openChapters.add(ch.id);
        else STATE.openChapters.delete(ch.id);
        persist();
      });
      $$(".lesson-item", chEl).forEach(el => {
        el.addEventListener("click", () => goTo(el.dataset.lesson));
      });
      toc.appendChild(chEl);
    });
    updateProgress();
  }

  function updateProgress() {
    const total = window.ALL_LESSONS.length;
    const done = STATE.done.size;
    const pct = Math.round((done / total) * 100);
    $(".rail-fill").style.width = pct + "%";
    $(".rail-val").innerHTML = `${done}<span> / ${total}</span>`;
  }

  // ─── Lesson rendering ───────────────────────────────
  function escapeHTML(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]); }

  function renderBlock(b) {
    switch (b.kind) {
      case "html": return b.html;
      case "h2": return `<h2>${escapeHTML(b.text)}</h2>`;
      case "p": return `<p>${escapeHTML(b.text)}</p>`;
      case "list": return `<ul class="bullets">${b.items.map(i => `<li>${escapeHTML(i)}</li>`).join("")}</ul>`;
      case "callout": {
        const tones = { warn: "tone-warn", note: "tone-note", tip: "" };
        const labels = I18N[STATE.lang].calloutLabels;
        return `<div class="callout ${tones[b.tone] || ""}">
          <div class="callout-label">${labels[b.tone] || (STATE.lang === "en" ? "Tip" : "نصيحة ⚡")}</div>
          <div class="callout-title">${escapeHTML(b.title)}</div>
          <p class="callout-body">${escapeHTML(b.body)}</p>
        </div>`;
      }
      case "triple":
        return `<div class="triple">${b.items.map(i => `
          <div class="triple-cell">
            <div class="triple-tag">${escapeHTML(i.tag)}</div>
            <div class="triple-title">${escapeHTML(i.title)}</div>
            <p class="triple-body">${escapeHTML(i.body)}</p>
          </div>`).join("")}</div>`;
      case "compare":
        return `<div class="compare">
          <div class="compare-side left">
            <div class="compare-title">${escapeHTML(b.left.title)}</div>
            <ul>${b.left.items.map(i => `<li>${escapeHTML(i)}</li>`).join("")}</ul>
          </div>
          <div class="compare-side right">
            <div class="compare-title">${escapeHTML(b.right.title)}</div>
            <ul>${b.right.items.map(i => `<li>${escapeHTML(i)}</li>`).join("")}</ul>
          </div>
        </div>`;
      case "quote":
        return `<div class="pullquote">
          <div class="pullquote-text">${escapeHTML(b.text)}</div>
          <div class="pullquote-by">— ${escapeHTML(b.by)}</div>
        </div>`;
      case "code": {
        const body = b.body.map(t => `<span class="tk-${t.t}">${escapeHTML(t.v)}</span>`).join("");
        const copyText = STATE.lang === "en" ? "Copy" : "نسخ 📋";
        return `<div class="code">
          <div class="code-head">
            <span class="code-dots"><span></span><span></span><span></span></span>
            <span>${b.lang || "dax"}</span>
            <button class="copy-btn" data-copy>${copyText}</button>
          </div>
          <div class="code-body">${body}</div>
        </div>`;
      }
      case "shortcuts": {
        const links = b.ids.map(id => {
          const { lesson, chapter } = findLesson(id) || {};
          if (!lesson) return "";
          const lessonTitle = STATE.lang === "en" ? lesson.en : lesson.title;
          return `<div class="shortcut" data-goto="${id}">
            <span class="shortcut-num">${chapter.num}·${String(chapter.lessons.findIndex(l => l.id === id) + 1).padStart(2, "0")}</span>
            <span class="shortcut-title">${lessonTitle}</span>
          </div>`;
        }).join("");
        return `<div class="shortcuts">${links}</div>`;
      }
    }
    return "";
  }

  function renderLesson() {
    const info = findLesson(STATE.currentId);
    if (!info) return;
    const { lesson, chapter } = info;
    const content = window.LESSONS[lesson.id] || window.stubLesson(lesson, chapter);

    const idx = flatIndex(lesson.id);
    const prev = idx > 0 ? window.ALL_LESSONS[idx - 1] : null;
    const next = idx < window.ALL_LESSONS.length - 1 ? window.ALL_LESSONS[idx + 1] : null;

    const chapterTitle = STATE.lang === "en" ? (chapter.en || chapter.title) : chapter.title;
    const lessonTitle = STATE.lang === "en" ? lesson.en : lesson.title;
    const prevTitle = prev ? (STATE.lang === "en" ? prev.en : prev.title) : null;
    const nextTitle = next ? (STATE.lang === "en" ? next.en : next.title) : null;

    $("#crumbChapter").textContent = `${chapter.num} — ${chapterTitle}`;
    $("#crumbLesson").textContent = lessonTitle;

    // title with italic accent on last word — use English title in EN mode
    const displayTitle = STATE.lang === "en" ? (lesson.en || content.title) : content.title;
    const parts = displayTitle.split(" ");
    const titleHTML = parts.length > 1
      ? parts.slice(0, -1).join(" ") + " <em>" + parts.slice(-1) + "</em>"
      : displayTitle;

    const blocksToRender = STATE.lang === "en" && content.en_blocks ? content.en_blocks : content.blocks;
    const blocks = blocksToRender.map(renderBlock).join("");
    const isDone = STATE.done.has(lesson.id);

    // Check if quiz available for this lesson
    const hasQuiz = window.quizData && window.quizData.some(q => q.section === lesson.id);
    const quizBtnId = "topbarQuizBtn";

    // English content note
    const englishNote = STATE.lang === "en" && I18N.en.englishContentNote
      ? `<div class="callout tone-note" style="margin-bottom: 2rem;">
          <div class="callout-label">Good to know</div>
          <p class="callout-body">${I18N.en.englishContentNote}</p>
        </div>`
      : "";

    const lessonDir = STATE.lang === "ar" ? "rtl" : "ltr";

    const displayEyebrow = STATE.lang === "en" ? (content.en_eyebrow || chapter.en || content.eyebrow) : content.eyebrow;
    const displayLede = STATE.lang === "en" ? (content.en_lede || "") : content.lede;

    $("#reader-body").innerHTML = `
      <article class="lesson" dir="${lessonDir}">
        <div class="eyebrow">${escapeHTML(displayEyebrow)}</div>
        <h1 class="lesson-h1">${titleHTML}</h1>
        ${displayLede ? `<p class="lede">${escapeHTML(displayLede)}</p>` : ""}
        <div class="meta-strip">
          <span class="meta-item"><span class="lesson-kind" data-k="${lesson.kind}" style="width:6px;height:6px;border-radius:50%;"></span><b>${kindLabel(lesson.kind)}</b></span>
          <span class="meta-dot"></span>
          <span class="meta-item">${t("readingTime")} <b>${lesson.mins} ${t("minutes")}</b></span>
          <span class="meta-dot"></span>
          <span class="meta-item">${t("lessonOf")} <b>${idx + 1} ${t("of")} ${window.ALL_LESSONS.length}</b></span>
        </div>
        ${englishNote}
        ${blocks}
      </article>
      <div class="lesson-footer">
        ${prev ? `<div class="foot-nav prev" data-goto="${prev.id}">
            <div class="foot-arrow">${t("prevArrow")}</div>
            <div class="foot-title">${escapeHTML(prevTitle)}</div>
          </div>` : '<div class="foot-nav empty"></div>'}
        <button class="foot-cta" id="markDoneBtn">
          ${isDone ? t("alreadyDone") : t("markDone")}
          ${next ? (STATE.lang === "en" ? " →" : " ←") : ""}
        </button>
        ${next ? `<div class="foot-nav" data-goto="${next.id}">
            <div class="foot-arrow" style="text-align:${STATE.lang === "en" ? "left" : "right"};">${t("nextArrow")}</div>
            <div class="foot-title" style="text-align:${STATE.lang === "en" ? "left" : "right"};">${escapeHTML(nextTitle)}</div>
          </div>` : '<div class="foot-nav empty"></div>'}
      </div>
    `;

    // wire copy buttons (new-style code blocks)
    $$("[data-copy]").forEach(btn => {
      btn.addEventListener("click", () => {
        const pre = btn.closest(".code").querySelector(".code-body");
        navigator.clipboard.writeText(pre.innerText);
        btn.textContent = "✓";
        btn.classList.add("copied");
        const originalText = STATE.lang === "en" ? "Copy" : "نسخ 📋";
        setTimeout(() => { btn.textContent = originalText; btn.classList.remove("copied"); }, 1400);
      });
    });
    $$("[data-goto]").forEach(el => el.addEventListener("click", () => goTo(el.dataset.goto)));
    $("#markDoneBtn").addEventListener("click", () => {
      STATE.done.add(lesson.id);
      persist();
      renderSidebar();
      // Check if all done → certificate
      if (STATE.done.size === window.ALL_LESSONS.length && typeof window.showCertificate === "function") {
        setTimeout(() => window.showCertificate(), 300);
      } else if (next) {
        setTimeout(() => goTo(next.id), 300);
      } else {
        $("#markDoneBtn").textContent = t("alreadyDone");
      }
    });

    // wire quiz button in topbar
    const quizTopBtn = $("#topbarQuizBtn");
    if (quizTopBtn) {
      quizTopBtn.style.display = "";
      quizTopBtn.onclick = () => {
        if (typeof window.startQuiz === "function") window.startQuiz(lesson.id);
      };
    }

    $(".reader").scrollTop = 0;

    // Re-init lightbox and copy buttons for raw HTML lesson content
    if (typeof window.initLightbox === "function") window.initLightbox();
    if (typeof window.initCopyButtons === "function") window.initCopyButtons();
    if (typeof window.updateQuizButtons === "function") window.updateQuizButtons();
  }

  function kindLabel(k) {
    return I18N[STATE.lang].kindLabels[k] || k;
  }

  function goTo(id) {
    STATE.currentId = id;
    const info = findLesson(id);
    if (info) STATE.openChapters.add(info.chapter.id);
    persist();
    renderSidebar();
    renderLesson();
    if (window.innerWidth < 880) $(".sidebar").classList.remove("open");
  }

  // Expose goTo globally so quiz/cert code can use it
  window.shellGoTo = goTo;

  // ─── Reading progress ───────────────────────────────
  function wireReadingProgress() {
    const reader = $(".reader");
    const fill = $(".reading-progress-fill");
    reader.addEventListener("scroll", () => {
      const h = reader.scrollHeight - reader.clientHeight;
      const pct = h > 0 ? (reader.scrollTop / h) * 100 : 0;
      fill.style.width = pct + "%";
    });
  }

  // ─── Search ───────────────────────────────
  function wireSearch() {
    const input = $("#searchInput");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      $$(".lesson-item").forEach(el => {
        const title = el.querySelector(".lesson-title").textContent.toLowerCase();
        el.style.display = !q || title.includes(q) ? "" : "none";
      });
      $$(".chapter").forEach(ch => {
        const visibleLessons = $$(".lesson-item", ch).filter(li => li.style.display !== "none").length;
        if (q && visibleLessons > 0) ch.classList.add("open");
      });
    });
  }

  // ─── Tweaks panel ───────────────────────────────
  const TWEAK_DEFAULTS = {
    "accent": "gold",
    "density": "cozy",
    "backdrop": true,
    "grain": true
  };

  const TWEAKS = { ...TWEAK_DEFAULTS, ...JSON.parse(localStorage.getItem("t3m_tweaks") || "{}") };

  function applyTweaks() {
    document.documentElement.dataset.accent = TWEAKS.accent;
    document.documentElement.dataset.density = TWEAKS.density;
    document.body.classList.toggle("no-backdrop", !TWEAKS.backdrop);
    document.body.classList.toggle("no-grain", !TWEAKS.grain);
    $$("[data-tweak-accent] button").forEach(b => b.classList.toggle("on", b.dataset.val === TWEAKS.accent));
    $$("[data-tweak-density] button").forEach(b => b.classList.toggle("on", b.dataset.val === TWEAKS.density));
    $("#sw-backdrop").classList.toggle("on", TWEAKS.backdrop);
    $("#sw-grain").classList.toggle("on", TWEAKS.grain);
  }

  function setTweak(key, value) {
    TWEAKS[key] = value;
    localStorage.setItem("t3m_tweaks", JSON.stringify(TWEAKS));
    applyTweaks();
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
    } catch (e) {}
  }

  function wireTweaks() {
    window.addEventListener("message", (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") $("#tweaksPanel").classList.add("open");
      if (e.data.type === "__deactivate_edit_mode") $("#tweaksPanel").classList.remove("open");
    });
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

    $$("[data-tweak-accent] button").forEach(b => b.addEventListener("click", () => setTweak("accent", b.dataset.val)));
    $$("[data-tweak-density] button").forEach(b => b.addEventListener("click", () => setTweak("density", b.dataset.val)));
    $("#sw-backdrop").addEventListener("click", () => setTweak("backdrop", !TWEAKS.backdrop));
    $("#sw-grain").addEventListener("click", () => setTweak("grain", !TWEAKS.grain));
    $("#tweaksClose").addEventListener("click", () => $("#tweaksPanel").classList.remove("open"));

    applyTweaks();
  }

  // ─── Mobile sidebar toggle ───────────────────────────────
  function wireMobile() {
    const tb = $("#sidebarToggle");
    if (tb) tb.addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  }

  // ─── Reset progress ───────────────────────────────
  window.resetShellProgress = function() {
    if (confirm(t("resetConfirm"))) {
      STATE.done.clear();
      STATE.currentId = "intro";
      STATE.openChapters = new Set(["foundations", "dax"]);
      persist();
      renderSidebar();
      goTo("intro");
    }
  };

  // ─── Language toggle button ───────────────────────────────
  function updateTopbarLangBtn() {
    const langBtn = $("#topbarLangBtn");
    if (langBtn) {
      langBtn.textContent = STATE.lang === "ar" ? "EN" : "AR";
      langBtn.classList.toggle("active-en", STATE.lang === "en");
      langBtn.classList.toggle("active-ar", STATE.lang === "ar");
    }
  }

  function updateStaticStrings() {
    const railLabel = $(".rail-label");
    if (railLabel) railLabel.textContent = t("progressLabel");

    const search = $("#searchInput");
    if (search) {
      search.placeholder = t("searchPlaceholder");
      search.dir = STATE.lang === "ar" ? "rtl" : "ltr";
    }

    const resetBtn = $(".topbar-btn[onclick*='resetShellProgress']");
    if (resetBtn) resetBtn.textContent = t("resetBtn");

    const quizBtn = $("#topbarQuizBtn");
    if (quizBtn) quizBtn.textContent = t("quizBtn");
  }

  // ─── Init ───────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    // Set initial language
    document.documentElement.lang = STATE.lang;
    document.documentElement.dir = STATE.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("lang-en", STATE.lang === "en");
    document.documentElement.classList.toggle("lang-ar", STATE.lang === "ar");

    renderSidebar();
    renderLesson();
    wireReadingProgress();
    wireSearch();
    wireTweaks();
    wireMobile();
    updateTopbarLangBtn();
    updateStaticStrings();

    // Wire language toggle button
    const langBtn = $("#topbarLangBtn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const newLang = STATE.lang === "ar" ? "en" : "ar";
        setLang(newLang);
      });
    }
  });
})();
