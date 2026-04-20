# English View — Requirements & Implementation Plan

## Goal

Add a full English language mode to the Ta3laM Power BI platform. Users can toggle between Arabic (RTL) and English (LTR) at any time. The preference persists across sessions.

---

## Scope

### In scope
- All UI chrome: topbar buttons, sidebar labels, progress rail, tweaks panel, certificate modal, quiz modal
- Layout direction: RTL ↔ LTR switch
- Sidebar lesson/chapter titles (already have `en` field in `curriculum.js`)
- Quiz questions and answer labels
- Certificate PDF text
- Language toggle button in the topbar

### Out of scope (Phase 2)
- Full English translation of lesson body content (the 45 HTML lesson blocks in `lessons.js` — these are Arabic and require a separate content authoring effort)
- English audio/video assets

---

## Requirements

### R1 — Language Toggle
- A `AR | EN` toggle button appears in the topbar (between the Tweaks button and the quiz button)
- Clicking it switches the active language immediately, no page reload
- Active language is stored in `localStorage` under the key `t3m_lang` (`"ar"` or `"en"`)
- Default: `"ar"`

### R2 — HTML Document Direction
- Arabic mode: `<html lang="ar" dir="rtl">`
- English mode: `<html lang="en" dir="ltr">`
- The `.shell` grid keeps `direction: ltr` always (it already does — no change needed)
- The sidebar active-item indicator triangle must flip: in LTR mode it points right (toward reader on the left)

### R3 — UI Strings
All user-visible strings are driven by a single translation object in `shell.js`:

```js
const I18N = {
  ar: {
    searchPlaceholder: "ابحث في الدروس...",
    progressLabel: "وصلت لفين؟",
    resetBtn: "ابدأ من الأول",
    tweaksBtn: "Tweaks",
    quizBtn: "اختبر نفسك",
    markDone: "خلّصت الدرس",
    alreadyDone: "✓ خلّصت الدرس ده",
    prevArrow: "← اللي فات",
    nextArrow: "الجاي →",
    readingTime: "وقت القراءة",
    minutes: "دقيقة",
    lessonOf: "درس",
    of: "من",
    resetConfirm: "متأكد إنك عايز تبدأ من الأول؟ هيتمسح كل تقدمك!",
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
    kindLabels: { concept: "Concept", practice: "Practice", theory: "Theory", code: "Code", reference: "Reference" },
    calloutLabels: { warn: "Important", note: "Good to know", tip: "Tip" },
  }
};
```

### R4 — Sidebar Chapter & Lesson Titles
- **Lesson titles:** use `l.en` (already present in all 50 lessons in `curriculum.js`)
- **Chapter titles:** add an `en` field to each chapter object in `curriculum.js`
  - e.g. `{ id: "foundations", num: "01", title: "أساسيات Power BI", en: "Power BI Foundations", ... }`
- In English mode: show `ch.en` as primary, `ch.title` as subtitle. Show `l.en` for lesson title.
- In Arabic mode: keep current rendering (subtitle = `ch.subtitle` English label, sub = `ch.title` Arabic)

### R5 — Lesson Body Content
- In English mode, lesson body HTML is still displayed (Arabic content)
- A banner is shown at the top of the lesson article:

  > **Lesson content is in Arabic.** English translations are coming in a future update.

- The banner is styled like a `.callout` with `tone: "note"` and is only injected when `lang === "en"` and no English blocks exist for that lesson.
- Future: when an English block is added to a lesson in `lessons.js` (e.g. `{ kind: "html", html: "...", lang: "en" }`), the banner is replaced by that content.

### R6 — Quiz Modal
- All quiz UI strings (title, buttons, progress, result messages) are translated via the same `I18N` object, extended with quiz keys
- Quiz *questions and options* from `data/quizzes.json` remain in Arabic for now (same as lesson content)
- A note is shown in the quiz modal header in English mode: *"Questions are currently in Arabic."*

### R7 — Certificate
- English mode certificate reads: *"This certifies that [Name] has completed the Power BI — From Zero to Pro course."*
- Arabic mode: unchanged current text

### R8 — Tweaks Panel
- All tweaks labels translated (accent color names, density names, toggle labels)
- Panel title stays "Tweaks" (already English)

---

## Files to Change

| File | Change |
|---|---|
| `js/shell.js` | Add `I18N` object; add `setLang(lang)` function; update all string references to use `I18N[STATE.lang]`; add `lang` to `STATE` + `persist()`; update `renderSidebar()` and `renderLesson()` to be lang-aware; add English content banner injection |
| `js/quiz.js` | Extend `I18N` (or import from shell's `window.I18N`) with quiz strings; use in modal render functions |
| `js/curriculum.js` | Add `en` field to each of the 8 chapter objects |
| `index.html` | Add `AR \| EN` toggle button in topbar |
| `css/shell.css` | Add `.lang-en .sidebar-active-indicator { right: auto; left: -16px; border-radius: 0 3px 3px 0; }` for LTR flip; add toggle button styles |

---

## Implementation Order

1. **`curriculum.js`** — add `en` field to 8 chapters (no logic, just data)
2. **`shell.js`** — add `I18N`, `STATE.lang`, `setLang()`, update all string usages, add banner
3. **`index.html`** — add toggle button
4. **`css/shell.css`** — add LTR active-indicator flip rule + toggle button styles
5. **`quiz.js`** — translate quiz modal UI strings
6. Test: toggle AR→EN→AR, verify direction, sidebar titles, quiz modal, certificate

---

## Non-goals / Decisions

- No separate URL for each language (single page, state-driven)
- No server-side rendering or language detection from browser headers
- Lesson body content translation is deferred — content team effort, not engineering
- No right-to-left quiz question text reflow in English mode
