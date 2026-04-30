# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

Static site — no build step, no package manager. A local server is required because `fetch()` loads JSON quiz data.

```bash
python -m http.server 8000
# open http://localhost:8000
```

### Pre-Commit Checklist

Copy-paste this one-liner to verify everything before committing:

```bash
node --check js/shell.js && node --check js/quiz.js && node --check js/lessons.js && node --check js/curriculum.js && node -e "JSON.parse(require('fs').readFileSync('data/quizzes.json', 'utf8'))" && echo "✅ All checks passed"
```

**Before committing, also verify:**
1. Test in browser with both languages (Arabic & English via topbar toggle)
2. Check browser console (F12) for errors or warnings
3. If you modified navigation or quiz logic, test quiz progression:
   - Mark a lesson as done → quiz opens
   - Try to skip ahead to future lessons (sidebar) → should see alert
   - Try to navigate back to previous lessons → should work fine
   - Fail the quiz → retry should work
   - Pass the quiz → next lesson should be accessible

**Git workflow:**
- Commit tracked files normally (html, css, js, json, markdown)
- Root utility scripts (`translate_add_en.js`, `rebuild_lessons.js`, `fix_lessons.js`) are untracked by design — these are one-shot bulk editors for `js/lessons.js`, never committed
- `.claude/` and other tool directories are ignored

## Architecture

The site is a data-driven shell (69 lessons across 10 chapters). **Lesson content lives in `js/lessons.js`** as raw HTML strings, not in `index.html`. Lessons are fetched dynamically and rendered on-demand.

### File roles

| File | Purpose |
|---|---|
| `index.html` | Shell skeleton only — no lesson content. Language toggle button in topbar. |
| `css/shell.css` | Layout, sidebar, reader, typography. Includes `html.lang-en` overrides for RTL↔LTR. |
| `css/style.css` | Lesson content component styles (`.lesson-card`, `.tip-box`, `.code-block`, etc.) |
| `js/curriculum.js` | `window.CURRICULUM` — chapter/lesson metadata. Each lesson: `id`, `title` (Arabic), `en` (English), `mins`, `kind`. |
| `js/lessons.js` | `window.LESSONS` — lesson content keyed by lesson id. Arabic fields: `eyebrow`, `title`, `lede`, `blocks`. English fields: `en_eyebrow`, `en_lede`, `en_blocks`. |
| `js/shell.js` | Navigation, rendering, state, i18n. All inside an IIFE — `STATE` and `I18N` are **not** on `window`. |
| `js/quiz.js` | Quiz modal, certificate, lightbox. Uses `I18N_QUIZ` for bilingual UI. |
| `js/script.js` | **UNUSED** — old navigation code, kept for reference only. |
| `data/quizzes.json` | Quiz questions (`section`, `question`, `type`, `options`, `correctAnswer`, `explanation`, `points`). |

### Navigation / rendering model

`shell.js` owns all navigation. There is no static DOM for lessons.

- `goTo(id)` — updates `STATE.currentId`, calls `renderSidebar()` + `renderLesson()`
- `renderLesson()` — looks up `window.LESSONS[id]`, injects HTML into `#reader-body`, wires footer nav and mark-done button, then calls `initLightbox()` / `initCopyButtons()` / `updateQuizButtons()` (DOM is rebuilt on every navigation)
  - **Mark-done button behavior:** If lesson has quiz data (`hasQuizForLesson()`), clicking opens quiz with callback; otherwise marks lesson done directly
  - **Next button state:** If current lesson has quiz and is incomplete, next lesson nav is disabled (faded, non-clickable)
  - Button text shows "📝 اختبر نفسك (مطلوب)" / "📝 Quiz Required" when quiz is present
- `window.stubLesson()` — fallback for lessons not yet in `lessons.js`. There are currently no active stub lessons in the 69-lesson curriculum.

**Quiz progression & navigation locks:**
When a lesson has a quiz, the system prevents advancement via multiple overlapping mechanisms:
1. **Footer "Next" button** — disabled with `disabled` attribute and visual fade
2. **Sidebar "next lesson" click** — shows alert if user tries to navigate forward
3. **Sidebar "any future lesson" click** — blocks navigation to any lesson with a higher index (prevents skipping ahead)
4. **Backward/other navigation** — allowed; users can review previous lessons or jump to unrelated chapters
5. **Callback on quiz pass** — only invoked when percentage ≥ 80%; marks lesson done and auto-navigates to next

This layered approach ensures users cannot skip the quiz requirement from the learner-facing UI.

### Adding or editing a lesson

**Edit content:** find the lesson `id` in `js/lessons.js`. Edit the HTML string inside template literals. Escape backticks and `${` if they appear in content.

**Add a new lesson:**
1. `js/curriculum.js` — add to the chapter's `lessons` array: `id`, `title` (Arabic), `en` (English), `mins`, `kind`
2. `js/lessons.js` — add matching object with `eyebrow`, `title`, `lede`, `blocks`, and optionally `en_eyebrow`, `en_lede`, `en_blocks`
3. `id` must match in both files

**Lesson content HTML classes** (styled by `css/style.css`):
- `.lesson-card` — card container with heading and body
- `.tip-box` / `.warn-box` — gold / coral callout boxes
- `.steps` / `.step` / `.step-num` / `.step-content` — numbered step lists
- `.code-block` — monospace code block (copy button auto-injected)
- `.section-tag.tag-{basics|query|model|dax|visual|publish|kpi}` — colored badge
- `.compare-table` — two-column comparison table

### State / persistence

`shell.js` manages state in a single `STATE` object (IIFE-private, not on `window`):

| localStorage key | Content |
|---|---|
| `t3m_current` | Current lesson id |
| `t3m_done` | JSON array of completed lesson ids |
| `t3m_open` | JSON array of open chapter ids |
| `t3m_tweaks` | `{ accent, density, backdrop, grain, theme }` |
| `t3m_lang` | `"ar"` (default) or `"en"` |
| `powerbiQuizResults` | Quiz scores per section |

`window.resetShellProgress()` clears all `t3m_*` keys.

### Internationalization (i18n)

**Language state — critical implementation detail:**
`STATE` is inside shell.js's IIFE and is not exposed on `window`. Other files (`quiz.js`) cannot read `window.STATE.lang`. The shared language carrier across files is **`document.documentElement.lang`** — set by `setLang()` in shell.js and readable anywhere as `document.documentElement.lang === "en"`.

**Language toggle flow:**
- `setLang(lang)` in `shell.js` — sets `STATE.lang`, updates `document.lang`, `document.dir`, CSS classes on `<html>`, localStorage, then calls `renderSidebar()` + `renderLesson()` + `updateStaticStrings()`
- `updateStaticStrings()` — updates hardcoded topbar/sidebar strings (rail label, search placeholder, reset button, quiz button) that are not re-rendered by `renderSidebar()`/`renderLesson()`
- `t(key)` helper — reads from `I18N[STATE.lang]` in shell.js
- `qt(key)` in quiz.js — reads `document.documentElement.lang` (not `window.STATE`)

**What's translated per lesson:**
- `en_eyebrow`, `en_lede` — rendered in EN mode by `renderLesson()` for lesson header
- `en_blocks` — authored for all 69 current lessons. English mode renders English body content when this field exists.

**English content banner:**
`renderLesson()` still supports a fallback banner when `STATE.lang === "en"` and a future lesson lacks `en_blocks`, but the current 69 lessons all include English body content.

**Recent additions and improvements (as of 2026-04-23):**
- UI/Layout improvements: Increased lesson content width from 760px to 850px for better text flow with larger fonts
- Fixed text wrapping in definition lists by adding `flex-wrap` to list items in `.lesson-card ul li`
- Added favicon (SVG gold circle) to eliminate 404 errors in browser console
- 11 new professional-level lessons (Query Folding, Tabular Editor, Error Handling, Semantic Model Design, Common Mistakes, Cost Optimization, Mobile Design, DirectQuery, Power Automate, Automated Refresh, Automated Report Generation)
- Added new chapter 08 (Automation & Integration) with 3 lessons
- All 69 lessons have full `en_eyebrow`, `en_lede`, and `en_blocks` translations

**Recent improvements (as of 2026-04-25):**
- **Bidirectional text fixes in quiz** — improved rendering of mixed English/Arabic text in question headings and options using CSS `unicode-bidi` (plaintext/isolate) + HTML `<bdi>` tags. Fixes character reordering and overlap issues in technical terms embedded in Arabic text.
- **Quiz data cleanup** — formatted all 461 options in `data/quizzes.json` to properly space English technical terms from Arabic text (e.g., "Star Schema جدول وسطي محاط بـ Dimensions").
- **Conceptual connectors in Chapter 1** — added opening/closing narrative sections to each lesson showing position in the learning journey and how lessons connect (Intro → Interface → Data Systems → Star Schema → SCD → Bridge Tables).
- **Tweaks panel improvements** — added close button (X header) event listener for better UX when closing tweaks panel.

### Translation utility scripts (root level, untracked)

These are one-shot Node.js scripts for bulk-editing `js/lessons.js`. **Always dry-run first.**

**`translate_add_en.js`** — injects `en_eyebrow` + `en_lede` into lesson objects:
```bash
node translate_add_en.js          # dry-run: shows what would change
node translate_add_en.js --apply  # writes (creates .bak, syntax-checks first)
```
- Safe: uses `indexOf` exact matching (not multi-line regex), `JSON.stringify` for quoting
- Idempotent: skips lessons that already have `en_eyebrow`
- Aborts if `node --check` fails on the temp file

**`rebuild_lessons.js`** — removes `en_eyebrow`/`en_lede` from specific lesson IDs only:
```bash
node rebuild_lessons.js                    # dry-run
node rebuild_lessons.js --apply            # applies to DEFAULT_TARGET_IDS in the script
node rebuild_lessons.js --apply intro dax1 # applies to named IDs only
```
- Scoped: never touches lessons outside the target IDs
- Same backup + syntax-check flow as above

**`fix_lessons.js`** — one-shot fixer that corrects literal `\n` sequences that were accidentally written as escaped strings instead of real newlines. Run directly:
```bash
node fix_lessons.js
```
No flags. Reads and rewrites `js/lessons.js` in place (no backup). Use only if `en_eyebrow`/`en_lede` fields show `\n` as visible characters in the browser.

### Lesson narrative flow & conceptual connectors

**Chapter 1 (Foundations) learning progression:**
Chapter 1 is structured to guide learners through a conceptual journey: BI intro → Understanding the interface → Recognizing data systems (OLTP vs OLAP) → Designing efficient data models (Star Schema) → Handling dimension changes (SCD) → Managing complex relationships (Bridge Tables).

Each lesson includes:
- **Opening section** (at the start) — "*📍 أنت هنا في الرحلة*" (You are here in the journey) — shows current position in the learning arc
- **Closing section** (at the end) — "*الخطوة التالية*" (Next step) — explicitly references and explains how this lesson connects to the next one

**Example:** The "interface" lesson opens with "From Intro to Interface Overview" and closes with "Next: Understanding the Power BI data system — OLTP vs OLAP". The "model" lesson shows how Star Schema connects to downstream concepts (SCD, Bridge Tables).

This design helps learners understand not just *what* they're learning, but *why* and *how it fits into the bigger picture*. Edit the opening/closing text when chapter structure changes.

### Best practices when editing lessons:

- **Keep HTML in template literals** — use backticks, escape any backticks or `${` in content
- **Validate HTML** — malformed HTML will break lesson rendering silently
- **Match eyebrow format** — always use `chapter · lesson — Title` (chapter and lesson padded to 2 digits, e.g., "03 · 05")
- **Order chapters numerically** — in `curriculum.js`, maintain order from 01–10
- **Don't modify IDs after publishing** — lesson IDs are stored in localStorage; changing them breaks user progress
- **Test both languages** — after adding content, toggle the language button in the topbar to verify both `en_lede` and `en_blocks` render correctly
- **List formatting** — for definition-style lists (label + description), use `<strong>Label:</strong> Description` in `<li>`. Flexbox layout handles wrapping automatically
- **Lesson connections** — when editing Chapter 1, keep opening/closing sections synchronized with the learning arc. If you reorder lessons, update all connection statements

### Common content edits

**Updating an existing lesson body:**
1. Find lesson ID in `js/lessons.js`
2. Edit the `blocks` array (Arabic) and/or `en_blocks` array (English)
3. Syntax-check: `node --check js/lessons.js`
4. Test in browser with both languages

**Changing lesson metadata (title, duration, kind):**
1. Update `js/curriculum.js` — find chapter and lesson in the array
2. Update corresponding fields in `js/lessons.js` (if changing `title`, update `en_eyebrow` too)
3. Syntax-check both files

**Adding a new chapter:**
1. Add chapter object to the end of `CURRICULUM` in `js/curriculum.js` with `id`, `title`, `en`, `lessons` array
2. Add lessons to the `lessons` array (each with `id`, `title`, `en`, `mins`, `kind`)
3. Add corresponding lesson objects to `js/lessons.js`
4. Maintain chapter numbering (01–10)

### Quiz system

- `window.quizData` populated by `loadQuizData()` in `quiz.js` via `fetch('./data/quizzes.json')`
- `window.startQuiz(sectionId, callback)` — builds and shows quiz modal with optional completion callback
- Supported question types: `multiple_choice`, `true_false`, `code`
- **Required passing score:** 80% (`REQUIRED_PASS_PERCENTAGE` constant in `quiz.js`)

**Quiz requirements & progression:**
- When a lesson has associated quiz data, the "Mark as Done" button opens the quiz instead of immediately completing the lesson
- Users **must answer all questions** before proceeding — attempting to navigate without answering shows an alert
- Quiz must be passed (≥80%) to complete the lesson:
  - **Pass (≥80%):** Green button "متابعة الدرس التالي ✓" / "Continue to Next Lesson ✓" closes quiz and marks lesson done, moving to next lesson
  - **Fail (<80%):** Orange button "إعادة المحاولة" / "Retry" resets answers and returns to first question
- The "Next Lesson" button in footer is **disabled** until quiz is passed (faded appearance, non-clickable)
- Attempting to navigate to **any future lesson** via sidebar (not just immediate next) shows alert: "الرجاء إكمال الاختبار أولاً" / "Please complete the quiz first" — prevents skipping ahead
- Users may navigate to **previous lessons** or **unrelated lessons** in other chapters while quiz is incomplete
- Lessons without quiz data can be marked done directly (button behavior unchanged)

**Quiz data structure** in `data/quizzes.json`:
```json
{
  "section": "lesson-id",
  "question": "Question text",
  "type": "multiple_choice|true_false|code",
  "options": ["Option 1", "Option 2", ...],
  "correctAnswer": 0,
  "explanation": "Why this answer is correct",
  "points": 1
}
```
- `section` must match lesson `id` from `js/curriculum.js`
- `correctAnswer` is a numeric zero-based index for choice questions, literal value for code questions
- All questions must be answered for quiz completion

**Bidirectional text handling in quiz display:**
Quiz questions and options often mix English (technical terms: "Star Schema", "Dimensions", "Facts") with Arabic text. To ensure correct rendering:
- **Question heading** — uses `direction: ltr/rtl` (language-aware) + `unicode-bidi: plaintext` to prevent RTL context from affecting embedded LTR text
- **Option text** — wrapped in `<bdi>` tag (bidirectional isolate) with `unicode-bidi: isolate` to isolate the option text from the surrounding radio-button layout direction
- **Implementation in `displayQuestion()`** in `js/quiz.js`:
  ```javascript
  <h3 style="direction:${isEnglish() ? 'ltr' : 'rtl'};unicode-bidi:plaintext;">
    <bdi>${question.question}</bdi>
  </h3>
  <bdi style="unicode-bidi:isolate;">${option}</bdi>
  ```
- **Result:** Mixed English/Arabic text displays correctly without character reordering or overlap
- **Browser support:** All modern browsers — CSS and HTML bidi spec compliant

**Configuration & customization:**
- **Passing percentage:** Edit `REQUIRED_PASS_PERCENTAGE = 80` in `js/quiz.js` (line ~98)
- **Quiz completion behavior:** When quiz passes, `quizCompletionCallback()` is invoked — currently marks lesson done and navigates to next
- **Alert messages for unanswered questions:** Hardcoded in nextBtn click handler (~line 185) — customize by editing Arabic/English strings
- **Retry behavior:** Currently resets all answers and returns to question 1 — modify `finishQuiz()` retry logic to change

### Layout

- `lang` and `dir` on `<html>` set dynamically by `setLang()`: Arabic = `lang="ar" dir="rtl"`, English = `lang="en" dir="ltr"`
- `.shell` uses CSS Grid with `direction: ltr` override so column 1 = left (reader), column 2 = right (sidebar), regardless of RTL
- Language-specific CSS: `html.lang-en` overrides border/padding/alignment for LTR (e.g., `border-left` instead of `border-right`)

**Tweaks implementation:**
- Accent picker sets `html[data-accent]` to `gold`, `teal`, or `dual` via `setTweak()` in `shell.js`
- Density picker sets `html[data-density]` to `compact`, `cozy`, or `spacious`
- Backdrop toggle enables/disables animated background SVG (.backdrop element)
- Grain toggle enables/disables texture overlay (.grain element)
- Theme toggle enables light/dark mode (CSS class toggle on `<html>`)
- CSS rules update `--accent` and `--density` custom properties based on these attributes
- All dependent styles automatically update via `var()` — no DOM re-render needed for tweaks changes
- Tweaks state persists in localStorage (`t3m_tweaks`)
- Tweaks panel closes with X button in header (click handler in `wireTweaks()` in `shell.js`)

### CSS Variables & Design Tokens

All colors, spacing, and layout values are CSS custom properties defined in `:root` in `css/shell.css`.

**Color tokens:**
- Backgrounds: `--bg`, `--bg-1`, `--bg-2`, `--bg-3` (dark theme, dark → darker)
- Text: `--ink`, `--ink-2`, `--ink-3`, `--ink-4` (light theme, light → lighter grays)
- Semantic: `--gold`, `--teal`, `--coral`, `--violet`, `--grass` (fixed colors for alerts, badges, etc.)
- Dynamic accent: `--accent`, `--accent-soft`, `--accent-ink` (respond to user tweaks)

**Responsive variables:**
- `--density`: scaling factor (0.82 = compact, 1 = cozy, 1.18 = spacious) — multiply spacing values by this
- `--accent`: current primary color (`#F5A623` gold or `#00B4D8` teal, set by `[data-accent]` attribute)
- `--sidebar-w`: 352px (sidebar width)
- `--reader-max`: 850px (max lesson content width; increased from 760px for better text flow with larger fonts)
- `--reader-pad-*`: padding around lesson content

**Using CSS variables:**
When adding styles that should respond to user tweaks, use `var()`:
```css
.element {
  background: var(--accent);                    /* changes with accent choice */
  padding: calc(1rem * var(--density));         /* scales with spacing preference */
  color: var(--ink);                            /* uses foreground color token */
  border-color: var(--gold-line);               /* can also use fixed semantic colors */
}
```

The tweaks panel controls variables via `[data-accent]` and `[data-density]` attributes on `<html>`. CSS rules like `[data-accent="gold"] { --accent: #F5A623; }` update the variables reactively — no JavaScript needed beyond the initial attribute change.

### Images / lightbox

- Place images in `images/`
- `<img class="lesson-img" src="images/..." alt="...">` — click opens fullscreen lightbox
- `<p class="lesson-img-caption">...</p>` immediately after for captions
- `initLightbox()` is called after every `renderLesson()` because the DOM is rebuilt

### Scrollbar Styling

Webkit scrollbars (Chrome, Edge, Safari) can be styled per-element using `::-webkit-scrollbar` pseudo-elements. **Styling must be applied to scrollable containers (`.reader`, `.toc`), not globally on `body` or `:root`.**

**Pattern for dynamic scrollbar color:**
```css
.scrollable-container::-webkit-scrollbar {
  width: 8px;
}

.scrollable-container::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background: var(--accent);          /* inherits current accent color from tweaks */
  border-radius: 4px;
}
```

This allows scrollbar color to automatically change when user switches accent (gold ↔ teal) in tweaks panel. **Firefox does not support custom scrollbar styling** — it will show default system scrollbars (fine, as this is ~10% of users).

### Sidebar branding

The sidebar brand section displays a logo and site name. To customize:
- **Logo image:** Place PNG in `images/` folder, update `src` in `index.html` line ~82 (`.brand-mark img`)
- **Logo size:** Adjust `.brand-mark` width/height in `css/shell.css` (currently 120px × 120px)
- **Site name:** Edit the `.name` text in `index.html` lines 84–86 (currently "تعلَّم . Power BI")

### Fonts

- `css/style.css` registers `MirandaSans` from `fonts/` — Latin only (`unicode-range: U+0020-007F, U+00A0-00FF`); Arabic falls back to Cairo (Google Fonts)
- Shell uses `"Newsreader"` (serif headings), `"Cairo"` (Arabic body), `"JetBrains Mono"` (code)

### Certificate

`showCertificate()` in `quiz.js` — triggered when all 69 lessons are marked done. `downloadCertificate()` uses jsPDF (CDN) to produce a landscape A4 PDF.

## Adding Lessons (Practical Guide)

### Quick checklist for a new lesson:

1. **Pick a chapter** in `js/curriculum.js` — or create a new chapter object if needed
2. **Add metadata** to the `lessons` array:
   ```javascript
   { id: "my-lesson", title: "عنوان عربي", en: "English Title", mins: 20, kind: "code" }
   ```
   - `id`: kebab-case, must match in `lessons.js`
   - `title`: Arabic title
   - `en`: English title
   - `mins`: duration estimate
   - `kind`: "concept", "theory", "practice", "code", or "reference"

3. **Add content** to `js/lessons.js`:
   ```javascript
   "my-lesson": {
     eyebrow: "01 · 05 — عنوان",
     title: "عنوان",
     lede: "مقدمة قصيرة",
     en_eyebrow: "01 · 05 — Title",
     en_lede: "Brief intro in English",
     blocks: [{ kind: "html", html: `<div>...Arabic HTML...</div>` }],
     en_blocks: [{ kind: "html", html: `<div>...English HTML...</div>` }],
   }
   ```
   - `eyebrow`: chapter number, lesson number, Arabic title (e.g., "01 · 05 — Title")
   - `lede`: 1–2 sentence summary
   - `blocks`: array of HTML blocks (Arabic content)
   - `en_blocks`: English version of blocks (optional but preferred)

4. **HTML component classes** available in `css/style.css`:
   - `.lesson-card` — titled section with body
   - `.tip-box` / `.warn-box` — gold/coral callout
   - `.steps` / `.step` / `.step-num` — numbered lists
   - `.code-block` — code (copy button auto-injected)
   - `.compare-table` — two-column comparison

5. **Syntax-check** before commit:
   ```bash
   node --check js/curriculum.js && node --check js/lessons.js
   ```

### Translation workflow (for future `en_blocks`):

When authoring `en_blocks`, follow the same HTML structure as the Arabic `blocks` but in English. Use the utility scripts sparingly — they're one-shot tools and can be risky on large edits.

## Performance & Browser Support

**Browser compatibility:**
- Modern browsers (Chrome, Edge, Safari, Firefox) — fully supported
- Custom scrollbars: Webkit browsers (Chrome, Edge, Safari) only; Firefox shows default system scrollbars
- Flexbox layout: All modern browsers
- CSS Grid: All modern browsers

**Performance notes:**
- No build step or bundling — assets load as-is from filesystem
- Lazy rendering: Lessons only parse/render when navigated to
- State persisted in localStorage (not synced to server)
- jsPDF library loaded from CDN for certificate generation

## Troubleshooting

**CSS changes not appearing in browser:**
- Restart the Python server: `python -m http.server 8000`
- Hard refresh the browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Check DevTools (F12) → Network tab → verify CSS file has HTTP 200 status
- Clear browser cache if the issue persists

**Scrollbar changes not visible:**
- Only webkit browsers (Chrome, Edge, Safari) support custom scrollbars — Firefox users see default system scrollbars
- Scrollbar styling must be applied to scrollable container elements (`.reader`, `.toc`), not `body` or `html`
- Verify `width` property is present: `::-webkit-scrollbar { width: 8px; }`

**Language toggle not applying to newly added content:**
- Ensure lesson object has both `lede` and `en_lede` (and `blocks` and `en_blocks`)
- `renderLesson()` is called automatically after `setLang()` — content should update immediately
- Check browser console (F12) for errors; malformed HTML or missing fields will log silently

**Tweaks (accent/density) not updating styles:**
- Verify `[data-accent]` or `[data-density]` attributes are set on `<html>` (inspect in DevTools)
- Check that CSS rules exist for the attribute value: `[data-accent="gold"] { --accent: #F5A623; }` etc.
- Ensure dependent styles use `var()`: `background: var(--accent);` not hardcoded color
- If using element-specific scrollbars, use `var(--accent)` in `::-webkit-scrollbar-thumb`

**Lessons not rendering / showing stub content:**
- Check `js/lessons.js` has an object with the matching lesson `id` from `js/curriculum.js`
- Verify `blocks` field exists and contains valid HTML (unclosed tags break rendering)
- Check browser console for JS errors in `renderLesson()`

**Quiz data not loading:**
- Verify `data/quizzes.json` exists and is valid JSON (use a JSON validator)
- Check Network tab in DevTools — `quizzes.json` should have 200 status
- If file exists but shows 404, restart the Python server

**Quiz button not appearing:**
- Verify lesson `id` in `js/curriculum.js` matches a `section` in `data/quizzes.json`
- Check that quiz questions exist for that lesson: `window.quizData.filter(q => q.section === "lesson-id").length > 0`
- If quiz button should appear but doesn't, check browser console for quiz loading errors

**Quiz can be skipped / next lesson clickable without passing:**
- Verify `hasQuizForLesson()` correctly identifies lessons with quizzes
- Check that `renderLesson()` is disabling the next-nav button (should have `disabled` attribute and faded opacity)
- Ensure quiz passing logic in `finishQuiz()` calls `quizCompletionCallback()` only when percentage >= 80
- Check browser console for errors when clicking next/quiz buttons

**Retry button not working after failing quiz:**
- Verify `finishQuiz()` properly resets `currentQuiz.currentQuestionIndex` and `userAnswers` before calling `displayQuestion(0)`
- Check that prev/next buttons are re-enabled when retry is clicked
- Ensure `updateNextButton()` is called after reset

**Users can skip ahead to future lessons via sidebar:**
- **Root cause:** Sidebar click handler only checked if target was the immediate next lesson, not any future lesson
- **Fix:** Compare lesson indices with `flatIndex()` — if `targetIndex > currentIndex` AND current lesson has incomplete quiz, block navigation
- **Validation:** In `shell.js` line ~175-176, verify the check uses `flatIndex(targetLessonId)` and compares `targetIndex > currentIndex`
- **Testing:** Try clicking on lesson 3+ while on lesson 1 with incomplete quiz — should show alert
- **Note:** This prevents the most common skip path where users jump multiple lessons at once

**Mixed English/Arabic text in quiz options looks jumbled:**
- Verify `data/quizzes.json` contains properly spaced options (e.g., "Star Schema جدول وسطي محاط بـ Dimensions" with spaces around English terms)
- Check that `displayQuestion()` in `quiz.js` includes `unicode-bidi: plaintext` on question heading and `unicode-bidi: isolate` on `<bdi>` wrapped options
- Ensure `<bdi>` (bidirectional isolate) tags wrap all option text — this prevents RTL context from affecting LTR text
- Test in multiple browsers (Chrome, Firefox, Safari) — bidi behavior varies slightly
- If issue persists, check browser console for JS errors in `displayQuestion()`
