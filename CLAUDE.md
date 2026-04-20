# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

Static site — no build step, no package manager. A local server is required because `fetch()` loads JSON quiz data.

```bash
cd "C:\Users\Ahmed Abdelsattar\Desktop\power_bi_v2_final"
python -m http.server 8000
# open http://localhost:8000
```

Syntax-check JS files without a browser:
```bash
node --check js/shell.js
node --check js/quiz.js
node --check js/lessons.js
```

## Architecture

The site was migrated from a static HTML approach (all 50 lessons as `<div class="section-page">` in `index.html`) to a data-driven shell architecture. Key consequence: **lesson content no longer lives in `index.html`** — it lives in `js/lessons.js` as raw HTML strings inside JS objects.

### File roles

| File | Purpose |
|---|---|
| `index.html` | Shell skeleton only — no lesson content. Language toggle button in topbar. |
| `css/shell.css` | Layout, sidebar, reader, typography (editorial design). Includes language-specific CSS (`.lang-en` overrides for RTL↔LTR). |
| `css/style.css` | Lesson content component styles (`.lesson-card`, `.tip-box`, `.code-block`, etc.) |
| `js/curriculum.js` | `window.CURRICULUM` — chapter/lesson metadata with bilingual support: `title` (Arabic), `en` (English), `mins`, `kind` |
| `js/lessons.js` | `window.LESSONS` — lesson content (Arabic + English). Each lesson: `eyebrow`, `title`, `lede`, `blocks` (Arabic); `en_eyebrow`, `en_lede`, `en_blocks` (English, optional) |
| `js/shell.js` | Navigation, rendering, state, i18n. Manages `STATE.lang` (ar/en), language toggle (`setLang()`), i18n helper (`t()`), language-aware rendering |
| `js/quiz.js` | Quiz modal, certificate, lightbox. Bilingual UI with `I18N_QUIZ` object; language-aware date formatting |
| `js/script.js` | **UNUSED** — old navigation code, kept for reference only |
| `data/quizzes.json` | Quiz questions (`section`, `question`, `type`, `options`, `correctAnswer`, `explanation`, `points`) |

### Navigation / rendering model

`shell.js` owns all navigation. There is no static DOM for lessons.

- `window.CURRICULUM` — array of chapter objects, each with a `lessons` array
- `window.ALL_LESSONS` — flat array of all lessons (auto-built at bottom of `curriculum.js`)
- `goTo(id)` in `shell.js` — updates `STATE.currentId`, calls `renderSidebar()` + `renderLesson()`
- `renderLesson()` — looks up `window.LESSONS[id]`, injects HTML into `#reader-body`, wires footer nav and mark-done button, then calls `initLightbox()` / `initCopyButtons()` / `updateQuizButtons()` (because DOM is rebuilt each navigation)
- `window.stubLesson()` — fallback for the 5 lessons not yet in `lessons.js`

### Adding or editing a lesson

**Edit existing lesson content:** find the lesson id in `js/lessons.js`. Each entry has:
- Arabic: `eyebrow`, `title`, `lede`, `blocks: [{ kind: "html", html: \`...\` }]`
- English (optional): `en_eyebrow`, `en_lede`, `en_blocks`

Edit the HTML string inside template literals. When adding translations, ensure proper escaping of quotes in template literals.

**Add a new lesson:** 
1. In `js/curriculum.js`: add to the appropriate chapter's `lessons` array with fields `id`, `title` (Arabic), `en` (English), `mins`, `kind`
2. In `js/lessons.js`: create a matching object with `eyebrow`, `title`, `lede`, `blocks`, and optionally `en_eyebrow`, `en_lede`, `en_blocks`
3. The `id` must match in both files

**Lesson content HTML classes** (styled by `css/style.css`):
- `.lesson-card` — card container with heading and body
- `.tip-box` / `.warn-box` — gold / coral callout boxes with `.icon` and `<p>`
- `.steps` / `.step` / `.step-num` / `.step-content` — numbered step lists
- `.code-block` — monospace code block (copy button auto-injected by `initCopyButtons()`)
- `.section-tag.tag-{basics|query|model|dax|visual|publish|kpi}` — colored category badge
- `.compare-table` — two-column comparison table

The `.nav-btns` divs from old lessons are hidden via `display: none !important` in `style.css` — shell provides its own prev/next footer.

### State / persistence

`shell.js` manages state in a single `STATE` object:

| localStorage key | Content |
|---|---|
| `t3m_current` | Current lesson id |
| `t3m_done` | JSON array of completed lesson ids |
| `t3m_open` | JSON array of open chapter ids |
| `t3m_tweaks` | `{ accent, density, backdrop, grain }` |
| `t3m_lang` | User's language preference: `"ar"` (Arabic, default) or `"en"` (English) |
| `powerbiQuizResults` | Quiz scores per section |

`window.resetShellProgress()` (exposed globally) clears all `t3m_*` keys.

### Internationalization (i18n) — English/Arabic Support

The platform supports bilingual Arabic (RTL) and English (LTR) with persistent language preference.

**Language system:**
- `STATE.lang` in `shell.js` — current language (`"ar"` or `"en"`), loaded from localStorage on init
- `setLang(lang)` — toggles language, updates document `lang` attribute, `dir` (rtl/ltr), CSS classes, localStorage
- `t(key)` helper — retrieves UI strings from `I18N` object in the current language
- Top-right "EN/AR" button wired to `setLang()` in topbar

**Lesson translations:**
Each lesson in `js/lessons.js` has:
- Arabic: `eyebrow`, `title`, `lede`, `blocks: [{ kind: "html", html: \`...\` }]`
- English: `en_eyebrow`, `en_lede`, `en_blocks` (optional; if missing, Arabic is shown)

**Chapter translations:**
Each chapter in `js/curriculum.js` has `title` (Arabic) and `en` (English).

**Lesson titles:**
Each lesson metadata in `js/curriculum.js` has `title` (Arabic) and `en` (English).

**Adding translations to new lessons:**
1. In `curriculum.js`: add both `title` (Arabic) and `en` (English) to the lesson entry
2. In `lessons.js`: add `en_eyebrow`, `en_lede` to the lesson object (and optionally `en_blocks` for HTML translation)
3. CSS direction is handled automatically by `html.lang-en` and `html.lang-ar` selectors

### Quiz system

- `window.quizData` is populated on load by `loadQuizData()` in `quiz.js` via `fetch('./data/quizzes.json')`
- `window.startQuiz(sectionId)` — builds and shows the quiz modal dynamically
- The topbar "اختبار الدرس" button calls `startQuiz(STATE.currentId)` — wired in `renderLesson()`
- Old `onclick="startQuiz('id')"` buttons inside lesson HTML also work (re-initialized by `updateQuizButtons()` after each render)
- Supported question types: `multiple_choice`, `true_false`, `code`

### Layout

- HTML: `lang` and `dir` attributes set dynamically by `setLang()` — `lang="ar" dir="rtl"` for Arabic, `lang="en" dir="ltr"` for English
- `.shell` uses CSS Grid with `direction: ltr` override so column 1 = left (reader) and column 2 = right (sidebar), regardless of RTL context
- Sidebar (column 2, right) width = `--sidebar-w: 320px`
- Reader (column 1, left) scrolls independently via `overflow-y: auto`
- Language-specific CSS: `html.lang-en` selector overrides border/padding/alignment for LTR mode (e.g., `border-left` instead of `border-right`)
- Tweaks panel: accent color (`gold`/`teal`/`dual`), content density (`compact`/`cozy`/`spacious`), backdrop + grain toggles

### Images / lightbox

- Place images in `images/`
- `<img class="lesson-img" src="images/..." alt="...">` — click opens fullscreen lightbox
- `<p class="lesson-img-caption">...</p>` immediately after for captions
- Annotated image pattern (SVG callouts over a photo): use `.annotated-img-wrapper` + `.ann-svg` + `.ann-label`; `initLightbox()` wires clicks on both types after every `renderLesson()` call

### Fonts

- `css/style.css` registers `MirandaSans` from `fonts/` with `unicode-range: U+0020-007F, U+00A0-00FF` — Latin characters only; Arabic falls back to Cairo (loaded from Google Fonts in `index.html`)
- Shell uses `"Newsreader"` (serif headings), `"Cairo"` (Arabic body), `"JetBrains Mono"` (code)

### Certificate

`showCertificate()` in `quiz.js` — triggered automatically when all 50 lessons are marked done. Student types name in `#certNameInput`. `downloadCertificate()` uses jsPDF (CDN) to produce a landscape A4 PDF.
