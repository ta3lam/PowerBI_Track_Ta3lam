// Shell app - Ta3laM Power BI course platform
(function () {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const I18N = {
    ar: {
      searchPlaceholder: "ابحث في الدروس...",
      progressLabel: "وصلت لفين؟",
      resetBtn: "↺ ابدأ من الأول",
      tweaksBtn: "Tweaks",
      quizBtn: "📝 اختبر نفسك",
      markDone: "خلّصت الدرس",
      alreadyDone: "✓ خلّصت الدرس ده",
      stubLesson: "الدرس قيد الإعداد",
      comingSoonMeta: "قريبًا",
      prevArrow: "← اللي فات",
      nextArrow: "الجاى →",
      readingTime: "وقت القراءة",
      minutes: "دقيقة",
      lessonOf: "درس",
      of: "من",
      resetConfirm: "متأكد إنك عايز تبدأ من الأول؟ هيتمسح كل تقدمك!",
      tweaksTitle: "Tweaks",
      tweakAccentLabel: "اختار اللون",
      tweakDensityLabel: "تباعد المحتوى",
      tweakBackdropLabel: "خلفية متحركة",
      tweakGrainLabel: "Grain texture",
      tweakThemeLabel: "🌙 وضع فاتح",
      tweakQuizRequiredLabel: "الاختبار الإجباري",
      tweakAccentOptions: { gold: "ذهبي", teal: "تيل", dual: "مزدوج" },
      tweakDensityOptions: { compact: "ضيق", cozy: "عادي", spacious: "واسع" },
      courseStageLabel: "المرحلة",
      levelLabel: "المستوى",
      bestForLabel: "مناسب لـ",
      howToUseLabel: "طريقة مذاكرة الدرس",
      beforeLessonLabel: "قبل هذا الدرس",
      nextMilestoneLabel: "الخطوة التالية",
      chapterMilestoneLabel: "محطة التعلم",
      chapterProgressLabel: "داخل الفصل",
      chapterOverviewLabel: "ما الذي سوف تتعلمه في هذا الفصل",
      chapterChecklistLabel: "قبل أن تنتقل للفصل التالي",
      chapterTimeLabel: "الوقت التقريبي للفصل",
      noPrereq: "ابدأ من هنا؛ لا تحتاج أكثر من تركيزك ورغبتك في الفهم.",
      finalMilestone: "أنت في آخر محطة من المسار. بعد هذا الدرس انتقل للمشروعات أو راجع ما تحتاجه بثقة.",
      studyModes: {
        concept: "ابدأ بالفكرة العامة أولاً، ثم ارجع للأمثلة وربطها بما سبق.",
        practice: "نفّذ الخطوات بالترتيب، ثم كررها على ملف أو سيناريو قريب من شغلك.",
        theory: "اربط الفكرة بما قبلها وما بعدها؛ هذا الدرس يبني منطقًا ذهنيًا أكثر من كونه حفظًا.",
        code: "افهم المنطق أولاً ثم اقرأ الكود، وبعدها عدّله على سيناريو قريب منك.",
        reference: "استخدم هذا الدرس كملخص ترجع له بعد التطبيق، وليس كبديل عن الممارسة."
      },
      levelNames: { beginner: "مبتدئ", intermediate: "متوسط", advanced: "متقدم", expert: "احترافي" },
      englishContentNote: "",
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
      stubLesson: "Coming soon",
      comingSoonMeta: "Soon",
      prevArrow: "← Previous",
      nextArrow: "Next →",
      readingTime: "Read time",
      minutes: "min",
      lessonOf: "Lesson",
      of: "of",
      resetConfirm: "Reset all progress? This cannot be undone.",
      tweaksTitle: "Tweaks",
      tweakAccentLabel: "Accent color",
      tweakDensityLabel: "Content density",
      tweakBackdropLabel: "Animated backdrop",
      tweakGrainLabel: "Grain texture",
      tweakThemeLabel: "🌙 Light mode",
      tweakQuizRequiredLabel: "Quiz required",
      tweakAccentOptions: { gold: "Gold", teal: "Teal", dual: "Dual" },
      tweakDensityOptions: { compact: "Compact", cozy: "Cozy", spacious: "Spacious" },
      courseStageLabel: "Phase",
      levelLabel: "Level",
      bestForLabel: "Best for",
      howToUseLabel: "Best way to study",
      beforeLessonLabel: "Before this lesson",
      nextMilestoneLabel: "Next step",
      chapterMilestoneLabel: "Learning milestone",
      chapterProgressLabel: "in chapter",
      chapterOverviewLabel: "What you will learn in this chapter",
      chapterChecklistLabel: "Before moving to the next chapter",
      chapterTimeLabel: "Estimated chapter time",
      noPrereq: "Start here. You only need focus and a willingness to understand the logic.",
      finalMilestone: "You are at the final stop in the track. From here, move into projects or review the areas you want to strengthen.",
      studyModes: {
        concept: "Get the big idea first, then come back to the examples and how they connect.",
        practice: "Follow the steps in order, then repeat them on your own file or a similar case.",
        theory: "Connect this lesson to what comes before and after it; this one builds a mental model.",
        code: "Understand the logic first, then read the code, then adapt it to a scenario close to your work.",
        reference: "Use this as a quick recap after practice, not as a replacement for hands-on work."
      },
      levelNames: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", expert: "Expert" },
      englishContentNote: "<strong>Lesson content is in Arabic.</strong> English translations are coming in a future update.",
      kindLabels: { concept: "Concept", practice: "Practice", theory: "Theory", code: "Code", reference: "Reference" },
      calloutLabels: { warn: "Important", note: "Good to know", tip: "Tip" },
    }
  };

  const STATE = {
    lang: localStorage.getItem("t3m_lang") || "ar",
    currentId: localStorage.getItem("t3m_current") || "intro",
    done: new Set(JSON.parse(localStorage.getItem("t3m_done") || "[]")),
    openChapters: new Set(JSON.parse(localStorage.getItem("t3m_open") || '["foundations","dax"]')),
  };

  const DEFAULT_OPEN_CHAPTERS = ["foundations", "dax"];
  const getDefaultLessonId = () => window.CURRICULUM?.[0]?.lessons?.[0]?.id || "intro";
  const lessonExists = (id) => window.CURRICULUM.some((chapter) => chapter.lessons.some((lesson) => lesson.id === id));

  function ensureCurrentLesson() {
    if (!lessonExists(STATE.currentId)) {
      STATE.currentId = getDefaultLessonId();
    }
  }

  ensureCurrentLesson();

  const isStubLesson = (id) => !window.LESSONS[id] || window.LESSONS[id].isStub;
  const COMPLETABLE_LESSON_IDS = new Set(
    window.ALL_LESSONS.filter((lesson) => !isStubLesson(lesson.id)).map((lesson) => lesson.id)
  );
  const COMPLETABLE_LESSON_COUNT = COMPLETABLE_LESSON_IDS.size;
  const getCompletedCount = () => [...STATE.done].filter((id) => COMPLETABLE_LESSON_IDS.has(id)).length;
  const hasQuizForLesson = (lessonId) => Array.isArray(window.quizData) && window.quizData.some((q) => q.section === lessonId);
  if (STATE.done.size !== getCompletedCount()) {
    STATE.done = new Set([...STATE.done].filter((id) => COMPLETABLE_LESSON_IDS.has(id)));
  }

  const persist = () => {
    localStorage.setItem("t3m_lang", STATE.lang);
    localStorage.setItem("t3m_current", STATE.currentId);
    localStorage.setItem("t3m_done", JSON.stringify([...STATE.done]));
    localStorage.setItem("t3m_open", JSON.stringify([...STATE.openChapters]));
  };

  const t = (key) => I18N[STATE.lang][key] || I18N.ar[key];
  const COURSE_PATH = window.COURSE_PATH_META || { chapters: {} };

  function localizeCourseCopy(value, fallback = "") {
    if (!value) return fallback;
    if (typeof value === "string") return value;
    return STATE.lang === "en"
      ? (value.en || value.ar || fallback)
      : (value.ar || value.en || fallback);
  }

  function getChapterPath(chapter) {
    return chapter.path || COURSE_PATH.chapters[chapter.id] || {};
  }

  function getLevelLabel(level) {
    return I18N[STATE.lang].levelNames[level] || level || "";
  }

  function getStudyMode(kind) {
    return I18N[STATE.lang].studyModes[kind] || I18N[STATE.lang].studyModes.concept;
  }

  function getChapterIndex(chapterId) {
    return window.CURRICULUM.findIndex((chapter) => chapter.id === chapterId);
  }

  function getChapterPhaseLabel(chapter) {
    const path = getChapterPath(chapter);
    return path.phase ? `${t("courseStageLabel")} ${path.phase}` : chapter.num;
  }

  function getLessonSequenceLabel(chapter, lesson) {
    const lessonIndex = chapter.lessons.findIndex((entry) => entry.id === lesson.id) + 1;
    return `${lessonIndex} ${t("of")} ${chapter.lessons.length} ${t("chapterProgressLabel")}`;
  }

  function getPreviousRequirementCopy(chapter, lesson, globalIndex) {
    const chapterLessonIndex = chapter.lessons.findIndex((entry) => entry.id === lesson.id);
    if (chapterLessonIndex > 0) {
      const previousLesson = chapter.lessons[chapterLessonIndex - 1];
      const previousTitle = STATE.lang === "en" ? previousLesson.en : previousLesson.title;
      return STATE.lang === "en"
        ? `Ideally finish ${previousTitle} first, because this lesson builds directly on it.`
        : `يفضل أن تكون أنهيت ${previousTitle} أولاً، لأن هذا الدرس يبني عليه مباشرة.`;
    }

    if (globalIndex > 0) {
      const previousChapter = window.CURRICULUM[getChapterIndex(chapter.id) - 1];
      if (previousChapter) {
        const previousChapterTitle = STATE.lang === "en" ? previousChapter.en : previousChapter.title;
        return STATE.lang === "en"
          ? `You will get the most value if you already passed through the previous chapter: ${previousChapterTitle}.`
          : `ستستفيد أكثر لو مررت على الفصل السابق: ${previousChapterTitle}.`;
      }
    }

    return t("noPrereq");
  }

  function getNextMilestoneCopy(chapter, lesson) {
    const chapterLessonIndex = chapter.lessons.findIndex((entry) => entry.id === lesson.id);
    if (chapterLessonIndex < chapter.lessons.length - 1) {
      const nextLesson = chapter.lessons[chapterLessonIndex + 1];
      const nextTitle = STATE.lang === "en" ? nextLesson.en : nextLesson.title;
      return STATE.lang === "en"
        ? `Next inside this chapter: ${nextTitle}.`
        : `الخطوة التالية داخل هذا الفصل: ${nextTitle}.`;
    }

    const nextChapter = window.CURRICULUM[getChapterIndex(chapter.id) + 1];
    if (nextChapter) {
      const nextChapterTitle = STATE.lang === "en" ? nextChapter.en : nextChapter.title;
      return STATE.lang === "en"
        ? `After this chapter, you move into ${nextChapterTitle}.`
        : `بعد هذا الفصل ستنتقل إلى ${nextChapterTitle}.`;
    }

    return t("finalMilestone");
  }

  function renderLessonRoadmap(chapter, lesson, globalIndex) {
    const chapterPath = getChapterPath(chapter);
    const focusCopy = localizeCourseCopy(chapterPath.focus);
    const audienceCopy = localizeCourseCopy(chapterPath.audience);
    const milestoneCopy = localizeCourseCopy(chapterPath.milestone);
    const phaseLabel = getChapterPhaseLabel(chapter);
    const levelLabel = getLevelLabel(chapterPath.level);
    const lessonSequence = getLessonSequenceLabel(chapter, lesson);

    return `
      <section class="lesson-path">
        <div class="lesson-path-top">
          <span class="lesson-path-pill">${escapeHTML(phaseLabel)}</span>
          <span class="lesson-path-pill subtle">${escapeHTML(levelLabel)}</span>
          <span class="lesson-path-pill subtle">${escapeHTML(kindLabel(lesson.kind))}</span>
          <span class="lesson-path-pill subtle">${escapeHTML(lessonSequence)}</span>
        </div>
        <div class="lesson-path-grid">
          <div class="lesson-path-card">
            <div class="lesson-path-label">${t("bestForLabel")}</div>
            <p>${escapeHTML(audienceCopy)}</p>
          </div>
          <div class="lesson-path-card">
            <div class="lesson-path-label">${t("howToUseLabel")}</div>
            <p>${escapeHTML(getStudyMode(lesson.kind))}</p>
          </div>
          <div class="lesson-path-card">
            <div class="lesson-path-label">${t("beforeLessonLabel")}</div>
            <p>${escapeHTML(getPreviousRequirementCopy(chapter, lesson, globalIndex))}</p>
          </div>
          <div class="lesson-path-card">
            <div class="lesson-path-label">${t("nextMilestoneLabel")}</div>
            <p>${escapeHTML(getNextMilestoneCopy(chapter, lesson))}</p>
          </div>
        </div>
        <div class="lesson-path-note">
          <strong>${t("chapterMilestoneLabel")}:</strong> ${escapeHTML(focusCopy)} ${escapeHTML(milestoneCopy)}
        </div>
      </section>
    `;
  }

  function renderChapterGateway(chapter) {
    const chapterPath = getChapterPath(chapter);
    const outcomes = localizeCourseCopy(chapterPath.outcomes, []);
    const chapterTitle = STATE.lang === "en" ? (chapter.en || chapter.title) : chapter.title;
    const levelLabel = getLevelLabel(chapterPath.level);
    const totalMinutes = chapter.lessons.reduce((sum, entry) => sum + (entry.mins || 0), 0);
    const focusCopy = localizeCourseCopy(chapterPath.focus);

    return `
      <section class="chapter-gateway">
        <div class="chapter-gateway-top">
          <div>
            <div class="chapter-gateway-kicker">${escapeHTML(getChapterPhaseLabel(chapter))} · ${escapeHTML(levelLabel)}</div>
            <h2 class="chapter-gateway-title">${escapeHTML(chapterTitle)}</h2>
          </div>
          <div class="chapter-gateway-stat">
            <span>${t("chapterTimeLabel")}</span>
            <strong>${totalMinutes} ${t("minutes")}</strong>
          </div>
        </div>
        <p class="chapter-gateway-lede">${escapeHTML(focusCopy)}</p>
        <div class="chapter-gateway-label">${t("chapterOverviewLabel")}</div>
        <ul class="chapter-gateway-list">
          ${(Array.isArray(outcomes) ? outcomes : []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  function renderChapterCheckpoint(chapter) {
    const chapterPath = getChapterPath(chapter);
    const checkpoint = localizeCourseCopy(chapterPath.checkpoint, []);
    const milestone = localizeCourseCopy(chapterPath.milestone, "");

    return `
      <section class="chapter-checkpoint">
        <div class="chapter-gateway-label">${t("chapterChecklistLabel")}</div>
        <ul class="chapter-gateway-list">
          ${(Array.isArray(checkpoint) ? checkpoint : []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>
        <p class="chapter-checkpoint-note"><strong>${t("chapterMilestoneLabel")}:</strong> ${escapeHTML(milestone)}</p>
      </section>
    `;
  }

  function cleanTopicText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—•●▪§:]+|[\s\-–—•●▪§:]+$/g, "")
      .trim();
  }

  function extractLessonTopics(blocks) {
    const topics = [];
    const seen = new Set();

    const pushTopic = (value) => {
      const text = cleanTopicText(value);
      if (!text) return;
      const key = text.toLocaleLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      topics.push(text);
    };

    blocks.forEach((block) => {
      if (!block) return;

      if (block.kind === "h2") {
        pushTopic(block.text);
        return;
      }

      if (block.kind === "triple" && Array.isArray(block.items)) {
        block.items.forEach((item) => pushTopic(item.title));
        return;
      }

      if (block.kind === "compare") {
        pushTopic(block.left?.title);
        pushTopic(block.right?.title);
        return;
      }

      if (block.kind !== "html" || !block.html) return;

      const template = document.createElement("template");
      template.innerHTML = block.html;
      [...template.content.querySelectorAll("h2, h3, h4")].forEach((heading) => {
        pushTopic(heading.textContent);
      });
    });

    return topics.slice(0, 5);
  }

  function getLessonActionCopy(lesson, topics) {
    const topic = topics[0] || (STATE.lang === "en" ? lesson.en : lesson.title);

    if (STATE.lang === "en") {
      switch (lesson.kind) {
        case "practice":
          return `Repeat ${topic} once on your own sample file so the steps become muscle memory.`;
        case "code":
          return `Rewrite or adapt the example behind ${topic} using names or conditions that match a scenario close to yours.`;
        case "theory":
          return `Turn ${topic} into a decision rule: when do you use it, and when do you avoid it?`;
        case "reference":
          return `Come back to this lesson after hands-on work and mark the two points you expect to reuse the most.`;
        default:
          return `Explain ${topic} in your own words, then connect it to the lesson that follows.`;
      }
    }

    switch (lesson.kind) {
      case "practice":
        return `أعد تنفيذ ${topic} مرة واحدة على ملف صغير من عندك حتى تصبح الخطوات مألوفة.`;
      case "code":
        return `اكتب أو عدّل المثال المرتبط بـ ${topic} باستخدام أسماء أو شروط قريبة من شغلك الحقيقي.`;
      case "theory":
        return `حوّل ${topic} إلى قاعدة قرار: متى تستخدمها، ومتى تتجنبها؟`;
      case "reference":
        return `ارجع لهذا الدرس بعد التطبيق العملي وحدد أهم نقطتين ستحتاج إليهما باستمرار.`;
      default:
        return `اشرح ${topic} بكلماتك، ثم اربطه بالدرس الذي يأتي بعده مباشرة.`;
    }
  }

  function getReadyToMoveChecklist(lesson, hasQuiz) {
    let items;

    if (STATE.lang === "en") {
      switch (lesson.kind) {
        case "practice":
        case "code":
          items = [
            "You can repeat the steps or logic on your own file without copying every line blindly.",
            "You know what would change if the data shape or scenario changed."
          ];
          break;
        case "reference":
          items = [
            "You know when this lesson should be your quick fallback.",
            "You can find the function, rule, or example you need without getting lost."
          ];
          break;
        default:
          items = [
            "You can explain the main idea without looking back at the text.",
            "You understand how this lesson affects the next decision, lesson, or model choice."
          ];
          break;
      }

      if (hasQuiz) items.push("You finished the quiz or feel ready to take it with confidence.");
      return items;
    }

    switch (lesson.kind) {
      case "practice":
      case "code":
        items = [
          "تستطيع تكرار الخطوات أو المنطق على ملف من عندك بدون نسخ أعمى.",
          "تعرف ما الذي سيتغير لو تغير شكل البيانات أو السيناريو."
        ];
        break;
      case "reference":
        items = [
          "تعرف متى ترجع لهذا الدرس كمرجع سريع.",
          "تستطيع الوصول للنقطة أو الدالة التي تحتاجها بدون تشتت."
        ];
        break;
      default:
        items = [
          "تستطيع شرح الفكرة الأساسية بدون الرجوع للنص.",
          "تفهم كيف سيؤثر هذا الدرس على القرار أو الدرس الذي يليه."
        ];
        break;
    }

    if (hasQuiz) items.push("أنهيت الاختبار أو أصبحت جاهزًا له بثقة.");
    return items;
  }

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
    for (const chapter of window.CURRICULUM) {
      const lesson = chapter.lessons.find((entry) => entry.id === id);
      if (lesson) return { lesson, chapter };
    }
    return null;
  };

  const flatIndex = (id) => window.ALL_LESSONS.findIndex((lesson) => lesson.id === id);

  function renderSidebar() {
    const toc = $("#toc");
    toc.innerHTML = "";

    window.CURRICULUM.forEach((chapter) => {
      const chapterEl = document.createElement("div");
      chapterEl.className = "chapter" + (STATE.openChapters.has(chapter.id) ? " open" : "");
      chapterEl.dataset.chapter = chapter.id;

      const chapterPath = getChapterPath(chapter);
      const chapterTitle = STATE.lang === "en" ? (chapter.en || chapter.title) : chapter.title;
      const chapterSub = [getChapterPhaseLabel(chapter), getLevelLabel(chapterPath.level)].filter(Boolean).join(" · ");

      chapterEl.innerHTML = `
        <div class="chapter-head">
          <div class="chapter-num">${chapter.num}</div>
          <div style="flex:1;">
            <div class="chapter-title">${chapterTitle}</div>
            <div class="chapter-sub">${chapterSub}</div>
          </div>
          <span class="chapter-count">${chapter.lessons.length}</span>
          <span class="chapter-chev">▾</span>
        </div>
        <div class="chapter-body">
          ${chapter.lessons.map((lesson, index) => {
            const lessonIsStub = isStubLesson(lesson.id);
            const lessonMeta = lessonIsStub ? t("comingSoonMeta") : `${lesson.mins}′`;
            return `
              <div class="lesson-item ${STATE.currentId === lesson.id ? "active" : ""} ${STATE.done.has(lesson.id) ? "done" : ""} ${lessonIsStub ? "stub" : ""}" data-lesson="${lesson.id}">
                <span class="lesson-idx">${String(index + 1).padStart(2, "0")}</span>
                <span class="lesson-title">${STATE.lang === "en" ? lesson.en : lesson.title}</span>
                <span style="display:flex;align-items:center;gap:8px;">
                  <span class="lesson-kind" data-k="${lesson.kind}"></span>
                  <span class="lesson-meta">${lessonMeta}</span>
                </span>
              </div>
            `;
          }).join("")}
        </div>
      `;

      chapterEl.querySelector(".chapter-head").addEventListener("click", (event) => {
        if (event.target.closest(".lesson-item")) return;
        chapterEl.classList.toggle("open");
        if (chapterEl.classList.contains("open")) STATE.openChapters.add(chapter.id);
        else STATE.openChapters.delete(chapter.id);
        persist();
      });

      $$(".lesson-item", chapterEl).forEach((lessonEl) => {
        lessonEl.addEventListener("click", () => {
          const targetLessonId = lessonEl.dataset.lesson;
          const currentInfo = findLesson(STATE.currentId);
          const hasQuizForCurrent = currentInfo && hasQuizForLesson(currentInfo.lesson.id);
          const isCurrentLessonDone = STATE.done.has(STATE.currentId);

          // If current lesson has quiz and is not done, prevent navigation to any future lesson (if quiz required is enabled).
          if (TWEAKS.quizRequired && hasQuizForCurrent && !isCurrentLessonDone) {
            const currentIndex = flatIndex(STATE.currentId);
            const targetIndex = flatIndex(targetLessonId);
            if (targetIndex > currentIndex) {
              alert(STATE.lang === "ar" ? "الرجاء إكمال الاختبار أولاً" : "Please complete the quiz first");
              return;
            }
          }
          goTo(targetLessonId);
        });
      });

      toc.appendChild(chapterEl);
    });

    updateProgress();
  }

  function updateProgress() {
    const total = COMPLETABLE_LESSON_COUNT;
    const done = getCompletedCount();
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    $(".rail-fill").style.width = pct + "%";
    $(".rail-val").innerHTML = `${done}<span> / ${total}</span>`;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
  }

  function fitLessonHeadline() {
    const heading = $(".lesson-h1");
    if (!heading) return;

    heading.style.fontSize = "";
    heading.style.letterSpacing = "";

    if (window.innerWidth <= 880) return;

    let fontSize = parseFloat(getComputedStyle(heading).fontSize);
    const minFontSize = document.documentElement.lang === "en" ? 27 : 26;

    while (heading.scrollWidth > heading.clientWidth && fontSize > minFontSize) {
      fontSize -= 0.5;
      heading.style.fontSize = fontSize + "px";
    }

    if (heading.scrollWidth > heading.clientWidth) {
      heading.style.letterSpacing = "-.04em";
      while (heading.scrollWidth > heading.clientWidth && fontSize > minFontSize - 2) {
        fontSize -= 0.5;
        heading.style.fontSize = fontSize + "px";
      }
    }
  }

  function scheduleHeadlineFit() {
    requestAnimationFrame(fitLessonHeadline);
    setTimeout(fitLessonHeadline, 0);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(fitLessonHeadline));
    }
  }

  function renderBlock(block) {
    switch (block.kind) {
      case "html":
        return block.html;
      case "h2":
        return `<h2>${escapeHTML(block.text)}</h2>`;
      case "p":
        return `<p>${escapeHTML(block.text)}</p>`;
      case "list":
        return `<ul class="bullets">${block.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
      case "callout": {
        const tones = { warn: "tone-warn", note: "tone-note", tip: "" };
        const labels = I18N[STATE.lang].calloutLabels;
        return `<div class="callout ${tones[block.tone] || ""}">
          <div class="callout-label">${labels[block.tone] || (STATE.lang === "en" ? "Tip" : "نصيحة")}</div>
          <div class="callout-title">${escapeHTML(block.title)}</div>
          <p class="callout-body">${escapeHTML(block.body)}</p>
        </div>`;
      }
      case "triple":
        return `<div class="triple">${block.items.map((item) => `
          <div class="triple-cell">
            <div class="triple-tag">${escapeHTML(item.tag)}</div>
            <div class="triple-title">${escapeHTML(item.title)}</div>
            <p class="triple-body">${escapeHTML(item.body)}</p>
          </div>`).join("")}</div>`;
      case "compare":
        return `<div class="compare">
          <div class="compare-side left">
            <div class="compare-title">${escapeHTML(block.left.title)}</div>
            <ul>${block.left.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          </div>
          <div class="compare-side right">
            <div class="compare-title">${escapeHTML(block.right.title)}</div>
            <ul>${block.right.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          </div>
        </div>`;
      case "quote":
        return `<div class="pullquote">
          <div class="pullquote-text">${escapeHTML(block.text)}</div>
          <div class="pullquote-by">— ${escapeHTML(block.by)}</div>
        </div>`;
      case "code": {
        const codeBody = block.body.map((token) => `<span class="tk-${token.t}">${escapeHTML(token.v)}</span>`).join("");
        const copyText = STATE.lang === "en" ? "Copy" : "نسخ 📋";
        return `<div class="code">
          <div class="code-head">
            <span class="code-dots"><span></span><span></span><span></span></span>
            <span>${block.lang || "dax"}</span>
            <button class="copy-btn" data-copy>${copyText}</button>
          </div>
          <div class="code-body">${codeBody}</div>
        </div>`;
      }
      case "shortcuts": {
        const links = block.ids.map((id) => {
          const target = findLesson(id);
          if (!target) return "";
          const lessonTitle = STATE.lang === "en" ? target.lesson.en : target.lesson.title;
          const lessonIndex = target.chapter.lessons.findIndex((lesson) => lesson.id === id) + 1;
          return `<div class="shortcut" data-goto="${id}">
            <span class="shortcut-num">${target.chapter.num}·${String(lessonIndex).padStart(2, "0")}</span>
            <span class="shortcut-title">${lessonTitle}</span>
          </div>`;
        }).join("");
        return `<div class="shortcuts">${links}</div>`;
      }
      default:
        return "";
    }
  }

  function renderLesson() {
    ensureCurrentLesson();
    const info = findLesson(STATE.currentId);
    if (!info) return;

    const { lesson, chapter } = info;
    const content = window.LESSONS[lesson.id] || window.stubLesson(lesson, chapter);
    const isStub = !!content.isStub;
    const idx = flatIndex(lesson.id);
    const prev = idx > 0 ? window.ALL_LESSONS[idx - 1] : null;
    const next = idx < window.ALL_LESSONS.length - 1 ? window.ALL_LESSONS[idx + 1] : null;

    const chapterTitle = STATE.lang === "en" ? (chapter.en || chapter.title) : chapter.title;
    const lessonTitle = STATE.lang === "en" ? lesson.en : lesson.title;
    const prevTitle = prev ? (STATE.lang === "en" ? prev.en : prev.title) : null;
    const nextTitle = next ? (STATE.lang === "en" ? next.en : next.title) : null;

    $("#crumbChapter").textContent = `${chapter.num} — ${chapterTitle}`;
    $("#crumbLesson").textContent = lessonTitle;

    const displayTitle = STATE.lang === "en" ? (lesson.en || content.title) : content.title;
    const titleParts = displayTitle.trim().split(/\s+/);
    const titleHTML = titleParts.length > 1
      ? `${escapeHTML(titleParts.slice(0, -1).join(" "))} <span class="title-accent">${escapeHTML(titleParts[titleParts.length - 1])}</span>`
      : escapeHTML(displayTitle);

    const blocksToRender = STATE.lang === "en" && content.en_blocks ? content.en_blocks : content.blocks;
    const blocks = blocksToRender.map(renderBlock).join("");
    const isDone = STATE.done.has(lesson.id);
    const hasQuiz = hasQuizForLesson(lesson.id);
    const lessonIndexInChapter = chapter.lessons.findIndex((entry) => entry.id === lesson.id);
    const chapterGateway = lessonIndexInChapter === 0 ? renderChapterGateway(chapter) : "";
    const chapterCheckpoint = lessonIndexInChapter === chapter.lessons.length - 1 ? renderChapterCheckpoint(chapter) : "";
    const englishNote = STATE.lang === "en" && !content.en_blocks && I18N.en.englishContentNote
      ? `<div class="callout tone-note" style="margin-bottom:2rem;">
          <div class="callout-label">${I18N[STATE.lang].calloutLabels.note}</div>
          <p class="callout-body">${I18N.en.englishContentNote}</p>
        </div>`
      : "";
    const lessonDir = STATE.lang === "ar" ? "rtl" : "ltr";
    const displayEyebrow = STATE.lang === "en" ? (content.en_eyebrow || chapter.en || content.eyebrow) : content.eyebrow;
    const displayLede = STATE.lang === "en" ? (content.en_lede || "") : content.lede;

    const buttonLabel = isStub ? t("stubLesson") : (isDone ? t("alreadyDone") : (hasQuiz && TWEAKS.quizRequired ? (STATE.lang === "ar" ? "📝 اختبر نفسك (مطلوب)" : "📝 Quiz Required") : (hasQuiz ? (STATE.lang === "ar" ? "📝 اختبر نفسك" : "📝 Quiz") : t("markDone"))));

    const nextDisabled = !isDone && hasQuiz && TWEAKS.quizRequired ? "disabled" : "";
    const nextStyle = !isDone && hasQuiz && TWEAKS.quizRequired ? "opacity:0.5;cursor:not-allowed;pointer-events:none;" : "";

    $("#reader-body").innerHTML = `
      <article class="lesson" dir="${lessonDir}">
        <div class="eyebrow">${escapeHTML(displayEyebrow)}</div>
        <h1 class="lesson-h1">${titleHTML}</h1>
        ${displayLede ? `<p class="lede">${escapeHTML(displayLede)}</p>` : ""}
        ${chapterGateway}
        <div class="meta-strip">
          <span class="meta-item"><span class="lesson-kind" data-k="${lesson.kind}" style="width:6px;height:6px;border-radius:50%;"></span><b>${kindLabel(lesson.kind)}</b></span>
          <span class="meta-dot"></span>
          <span class="meta-item">${t("readingTime")} <b>${lesson.mins} ${t("minutes")}</b></span>
          <span class="meta-dot"></span>
          <span class="meta-item">${t("lessonOf")} <b>${idx + 1} ${t("of")} ${window.ALL_LESSONS.length}</b></span>
        </div>
        ${englishNote}
        ${blocks}
        ${chapterCheckpoint}
      </article>
      <div class="lesson-footer">
        ${prev ? `<div class="foot-nav prev" data-goto="${prev.id}">
            <div class="foot-arrow">${t("prevArrow")}</div>
            <div class="foot-title">${escapeHTML(prevTitle)}</div>
          </div>` : '<div class="foot-nav empty"></div>'}
        <button class="foot-cta" id="markDoneBtn" ${isStub || isDone ? "disabled" : ""}>
          ${buttonLabel}
          ${!isStub && !isDone && next ? (STATE.lang === "en" ? " →" : " ←") : ""}
        </button>
        ${next ? `<div class="foot-nav" data-goto="${next.id}" style="${nextStyle}" ${nextDisabled ? "onclick='return false;'" : ""}>
            <div class="foot-arrow" style="text-align:${STATE.lang === "en" ? "left" : "right"};">${t("nextArrow")}</div>
            <div class="foot-title" style="text-align:${STATE.lang === "en" ? "left" : "right"};">${escapeHTML(nextTitle)}</div>
          </div>` : '<div class="foot-nav empty"></div>'}
      </div>
    `;

    $$("[data-copy]").forEach((button) => {
      button.addEventListener("click", () => {
        const pre = button.closest(".code").querySelector(".code-body");
        navigator.clipboard.writeText(pre.innerText);
        button.textContent = "✓";
        button.classList.add("copied");
        const originalText = STATE.lang === "en" ? "Copy" : "نسخ 📋";
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove("copied");
        }, 1400);
      });
    });

    $$("[data-goto]").forEach((element) => {
      element.addEventListener("click", (e) => {
        if (element.hasAttribute("disabled")) {
          e.preventDefault();
          return;
        }
        goTo(element.dataset.goto);
      });
    });

    if (!isStub) {
      $("#markDoneBtn").addEventListener("click", () => {
        if (hasQuiz) {
          // Open quiz with callback to mark lesson as done after passing
          window.startQuiz(lesson.id, () => {
            STATE.done.add(lesson.id);
            persist();
            renderSidebar();
            renderLesson();
            if (getCompletedCount() === COMPLETABLE_LESSON_COUNT && typeof window.showCertificate === "function") {
              setTimeout(() => window.showCertificate(), 300);
            } else if (next) {
              setTimeout(() => goTo(next.id), 300);
            } else {
              $("#markDoneBtn").textContent = t("alreadyDone");
            }
          });
        } else {
          // No quiz - mark as done directly
          STATE.done.add(lesson.id);
          persist();
          renderSidebar();
          if (getCompletedCount() === COMPLETABLE_LESSON_COUNT && typeof window.showCertificate === "function") {
            setTimeout(() => window.showCertificate(), 300);
          } else if (next) {
            setTimeout(() => goTo(next.id), 300);
          } else {
            $("#markDoneBtn").textContent = t("alreadyDone");
          }
        }
      });
    }

    syncTopbarQuizButton(lesson.id, hasQuiz);

    $(".reader").scrollTop = 0;
    scheduleHeadlineFit();
    if (typeof window.initLightbox === "function") window.initLightbox();
    if (typeof window.initCopyButtons === "function") window.initCopyButtons();
    if (typeof window.updateQuizButtons === "function") window.updateQuizButtons();
  }

  function syncTopbarQuizButton(lessonId, hasQuiz = hasQuizForLesson(lessonId)) {
    const quizTopBtn = $("#topbarQuizBtn");
    if (!quizTopBtn) return;

    if (!hasQuiz) {
      quizTopBtn.style.display = "none";
      quizTopBtn.disabled = true;
      quizTopBtn.onclick = null;
      return;
    }

    quizTopBtn.style.display = "";
    quizTopBtn.disabled = false;
    quizTopBtn.textContent = t("quizBtn");
    quizTopBtn.onclick = () => {
      if (typeof window.startQuiz === "function") window.startQuiz(lessonId);
    };
  }

  function kindLabel(kind) {
    return I18N[STATE.lang].kindLabels[kind] || kind;
  }

  function goTo(id) {
    STATE.currentId = lessonExists(id) ? id : getDefaultLessonId();
    const info = findLesson(STATE.currentId);
    if (info) STATE.openChapters.add(info.chapter.id);
    persist();
    renderSidebar();
    renderLesson();
    if (window.innerWidth < 880) $(".sidebar").classList.remove("open");
  }

  window.shellGoTo = goTo;
  window.getCourseStats = function() {
    return {
      totalLessons: window.ALL_LESSONS.length,
      completableLessons: COMPLETABLE_LESSON_COUNT,
      completedLessons: getCompletedCount(),
      stubLessons: window.ALL_LESSONS.length - COMPLETABLE_LESSON_COUNT,
      chapterCount: window.CURRICULUM.length,
    };
  };
  window.refreshShellQuizAvailability = function() {
    syncTopbarQuizButton(STATE.currentId);
  };

  function wireReadingProgress() {
    const reader = $(".reader");
    const fill = $(".reading-progress-fill");
    reader.addEventListener("scroll", () => {
      const scrollableHeight = reader.scrollHeight - reader.clientHeight;
      const pct = scrollableHeight > 0 ? (reader.scrollTop / scrollableHeight) * 100 : 0;
      fill.style.width = pct + "%";
    });
  }

  function wireSearch() {
    const input = $("#searchInput");
    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      $$(".lesson-item").forEach((lessonEl) => {
        const title = lessonEl.querySelector(".lesson-title").textContent.toLowerCase();
        lessonEl.style.display = !query || title.includes(query) ? "" : "none";
      });
      $$(".chapter").forEach((chapterEl) => {
        const visibleLessons = $$(".lesson-item", chapterEl).filter((lessonEl) => lessonEl.style.display !== "none").length;
        if (query && visibleLessons > 0) chapterEl.classList.add("open");
      });
    });
  }

  const TWEAK_DEFAULTS = {
    accent: "gold",
    density: "cozy",
    backdrop: true,
    grain: true,
    theme: "dark",
    quizRequired: true
  };

  const TWEAKS = { ...TWEAK_DEFAULTS, ...JSON.parse(localStorage.getItem("t3m_tweaks") || "{}") };

  function applyTweaks() {
    document.documentElement.dataset.accent = TWEAKS.accent;
    document.documentElement.dataset.density = TWEAKS.density;
    document.documentElement.dataset.theme = TWEAKS.theme;
    document.body.classList.toggle("no-backdrop", !TWEAKS.backdrop);
    document.body.classList.toggle("no-grain", !TWEAKS.grain);
    $$("[data-tweak-accent] button").forEach((button) => button.classList.toggle("on", button.dataset.val === TWEAKS.accent));
    $$("[data-tweak-density] button").forEach((button) => button.classList.toggle("on", button.dataset.val === TWEAKS.density));
    $("#sw-backdrop").classList.toggle("on", TWEAKS.backdrop);
    $("#sw-grain").classList.toggle("on", TWEAKS.grain);
    $("#sw-theme").classList.toggle("on", TWEAKS.theme === "light");
    $("#sw-quiz-required").classList.toggle("on", TWEAKS.quizRequired);
  }

  function setTweak(key, value) {
    TWEAKS[key] = value;
    localStorage.setItem("t3m_tweaks", JSON.stringify(TWEAKS));
    applyTweaks();
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
    } catch (error) {}
  }

  function wireTweaks() {
    window.addEventListener("message", (event) => {
      if (!event.data) return;
      if (event.data.type === "__activate_edit_mode") $("#tweaksPanel").classList.add("open");
      if (event.data.type === "__deactivate_edit_mode") $("#tweaksPanel").classList.remove("open");
    });

    try {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    } catch (error) {}

    $$("[data-tweak-accent] button").forEach((button) => button.addEventListener("click", () => setTweak("accent", button.dataset.val)));
    $$("[data-tweak-density] button").forEach((button) => button.addEventListener("click", () => setTweak("density", button.dataset.val)));
    $("#sw-backdrop").addEventListener("click", () => setTweak("backdrop", !TWEAKS.backdrop));
    $("#sw-grain").addEventListener("click", () => setTweak("grain", !TWEAKS.grain));
    $("#sw-theme").addEventListener("click", () => setTweak("theme", TWEAKS.theme === "dark" ? "light" : "dark"));
    $("#sw-quiz-required").addEventListener("click", () => setTweak("quizRequired", !TWEAKS.quizRequired));

    // Close tweaks panel with X button
    $("#tweaksClose").addEventListener("click", () => $("#tweaksPanel").classList.remove("open"));

    applyTweaks();
  }

  function wireMobile() {
    const toggle = $("#sidebarToggle");
    if (toggle) toggle.addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  }

  window.resetShellProgress = function() {
    if (confirm(t("resetConfirm"))) {
      STATE.done.clear();
      STATE.currentId = getDefaultLessonId();
      STATE.openChapters = new Set(DEFAULT_OPEN_CHAPTERS);
      persist();
      renderSidebar();
      goTo(STATE.currentId);
    }
  };

  function updateTopbarLangBtn() {
    const langBtn = $("#topbarLangBtn");
    if (!langBtn) return;
    langBtn.textContent = STATE.lang === "ar" ? "EN" : "AR";
    langBtn.classList.toggle("active-en", STATE.lang === "en");
    langBtn.classList.toggle("active-ar", STATE.lang === "ar");
  }

  function updateStaticStrings() {
    const railLabel = $(".rail-label");
    if (railLabel) railLabel.textContent = t("progressLabel");

    const search = $("#searchInput");
    if (search) {
      search.placeholder = t("searchPlaceholder");
      search.dir = STATE.lang === "ar" ? "rtl" : "ltr";
    }

    const resetBtn = $("#resetProgressBtn");
    if (resetBtn) resetBtn.textContent = t("resetBtn");

    const tweaksToggleLabel = $("#tweaksToggleLabel");
    if (tweaksToggleLabel) tweaksToggleLabel.textContent = t("tweaksBtn");

    const tweaksTitle = $("#tweaksTitle");
    if (tweaksTitle) tweaksTitle.textContent = t("tweaksTitle");

    const tweakAccentLabel = $("#tweakAccentLabel");
    if (tweakAccentLabel) tweakAccentLabel.textContent = t("tweakAccentLabel");

    const tweakDensityLabel = $("#tweakDensityLabel");
    if (tweakDensityLabel) tweakDensityLabel.textContent = t("tweakDensityLabel");

    const tweakBackdropLabel = $("#tweakBackdropLabel");
    if (tweakBackdropLabel) tweakBackdropLabel.textContent = t("tweakBackdropLabel");

    const tweakGrainLabel = $("#tweakGrainLabel");
    if (tweakGrainLabel) tweakGrainLabel.textContent = t("tweakGrainLabel");

    const tweakThemeLabel = $("#tweakThemeLabel");
    if (tweakThemeLabel) tweakThemeLabel.textContent = t("tweakThemeLabel");

    const tweakQuizRequiredLabel = $("#tweakQuizRequiredLabel");
    if (tweakQuizRequiredLabel) tweakQuizRequiredLabel.textContent = t("tweakQuizRequiredLabel");

    const accentLabels = I18N[STATE.lang].tweakAccentOptions;
    const densityLabels = I18N[STATE.lang].tweakDensityOptions;
    const accentGoldBtn = $("#accentGoldBtn");
    const accentTealBtn = $("#accentTealBtn");
    const accentDualBtn = $("#accentDualBtn");
    const densityCompactBtn = $("#densityCompactBtn");
    const densityCozyBtn = $("#densityCozyBtn");
    const densitySpaciousBtn = $("#densitySpaciousBtn");

    if (accentGoldBtn) accentGoldBtn.textContent = accentLabels.gold;
    if (accentTealBtn) accentTealBtn.textContent = accentLabels.teal;
    if (accentDualBtn) accentDualBtn.textContent = accentLabels.dual;
    if (densityCompactBtn) densityCompactBtn.textContent = densityLabels.compact;
    if (densityCozyBtn) densityCozyBtn.textContent = densityLabels.cozy;
    if (densitySpaciousBtn) densitySpaciousBtn.textContent = densityLabels.spacious;

    const quizBtn = $("#topbarQuizBtn");
    if (quizBtn && quizBtn.style.display !== "none") quizBtn.textContent = t("quizBtn");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = STATE.lang;
    document.documentElement.dir = STATE.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("lang-en", STATE.lang === "en");
    document.documentElement.classList.toggle("lang-ar", STATE.lang === "ar");

    persist();
    renderSidebar();
    renderLesson();
    wireReadingProgress();
    wireSearch();
    wireTweaks();
    wireMobile();
    updateTopbarLangBtn();
    updateStaticStrings();

    const langBtn = $("#topbarLangBtn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setLang(STATE.lang === "ar" ? "en" : "ar");
      });
    }

    window.addEventListener("resize", scheduleHeadlineFit);
  });
})();
