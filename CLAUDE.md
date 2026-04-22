# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

Static site — no build step, no package manager. A local server is required because `fetch()` loads JSON quiz data.

```bash
python -m http.server 8000
# open http://localhost:8000
```

**Before committing, verify:**
1. Syntax check all JS files:
   ```bash
   node --check js/shell.js && node --check js/quiz.js && node --check js/lessons.js && node --check js/curriculum.js
   ```
2. Validate JSON files:
   ```bash
   node -e "JSON.parse(require('fs').readFileSync('data/quizzes.json', 'utf8'))" && echo "✅ JSON valid"
   ```
3. Test in browser with both languages (Arabic & English via topbar toggle)
4. Check browser console (F12) for errors or warnings

**Git workflow:**
- Commit tracked files normally (html, css, js, json, markdown)
- Root utility scripts (`translate_add_en.js`, `rebuild_lessons.js`, `fix_lessons.js`) are untracked by design — these are one-shot bulk editors for `js/lessons.js`, never committed
- `.claude/` and other tool directories are ignored

## Architecture

The site is a data-driven shell (60 lessons across 9 chapters). **Lesson content lives in `js/lessons.js`** as raw HTML strings, not in `index.html`. Lessons are fetched dynamically and rendered on-demand.

### File roles

| File | Purpose |
|---|---|
| `index.html` | Shell skeleton only — no lesson content. Language toggle button in topbar. |
| `css/shell.css` | Layout, sidebar, reader, typography. Includes `html.lang-en` overrides for RTL↔LTR. |
| `css/style.css` | Lesson content component styles (`.lesson-card`, `.tip-box`, `.code-block`, etc.) |
| `js/curriculum.js` | `window.CURRICULUM` — chapter/lesson metadata. Each lesson: `id`, `title` (Arabic), `en` (English), `mins`, `kind`. |
| `js/lessons.js` | `window.LESSONS` — lesson content keyed by lesson id. Arabic fields: `eyebrow`, `title`, `lede`, `blocks`. English fields (optional): `en_eyebrow`, `en_lede`, `en_blocks`. |
| `js/shell.js` | Navigation, rendering, state, i18n. All inside an IIFE — `STATE` and `I18N` are **not** on `window`. |
| `js/quiz.js` | Quiz modal, certificate, lightbox. Uses `I18N_QUIZ` for bilingual UI. |
| `js/script.js` | **UNUSED** — old navigation code, kept for reference only. |
| `data/quizzes.json` | Quiz questions (`section`, `question`, `type`, `options`, `correctAnswer`, `explanation`, `points`). |

### Navigation / rendering model

`shell.js` owns all navigation. There is no static DOM for lessons.

- `goTo(id)` — updates `STATE.currentId`, calls `renderSidebar()` + `renderLesson()`
- `renderLesson()` — looks up `window.LESSONS[id]`, injects HTML into `#reader-body`, wires footer nav and mark-done button, then calls `initLightbox()` / `initCopyButtons()` / `updateQuizButtons()` (DOM is rebuilt on every navigation)
- `window.stubLesson()` — fallback for lessons not yet in `lessons.js`; currently **shows Arabic text even in EN mode** (known gap — needs an English branch)

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
| `t3m_tweaks` | `{ accent, density, backdrop, grain }` |
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
- `en_blocks` — **not yet authored for any lesson** (known gap); English mode currently falls back to `blocks` (Arabic HTML body content)

**English content banner (already implemented):**
When `STATE.lang === "en"` and a lesson has no `en_blocks`, `renderLesson()` injects a banner: *"Lesson content is in Arabic. English translations are coming in a future update."* This is driven by `I18N.en.englishContentNote` in `shell.js`. Set `I18N.en.englishContentNote = ""` to suppress it once all lessons are translated.

**Known English-view gaps (as of 2026-04-23):**
1. **Lesson body content** (`en_blocks`) — most lessons have Arabic HTML only in `blocks`. English mode currently shows Arabic body content with a banner notification.
2. **Stub lessons** — A few older stub lessons still hardcode Arabic text in `stubLesson()`. They now have proper `en_eyebrow` and `en_lede` but need `en_blocks` authored.
3. **Resolution path** — Author `en_blocks` HTML per lesson over time. Update `I18N.en.englishContentNote` to `""` once full bilingual coverage is achieved.

**Recent additions and improvements (as of 2026-04-23):**
- UI/Layout improvements: Increased lesson content width from 760px to 850px for better text flow with larger fonts
- Fixed text wrapping in definition lists by adding `flex-wrap` to list items in `.lesson-card ul li`
- Added favicon (SVG gold circle) to eliminate 404 errors in browser console
- 11 new professional-level lessons (Query Folding, Tabular Editor, Error Handling, Semantic Model Design, Common Mistakes, Cost Optimization, Mobile Design, DirectQuery, Power Automate, Automated Refresh, Automated Report Generation)
- Added new chapter 08 (Automation & Integration) with 3 lessons
- All 60 lessons have full `en_eyebrow` + `en_lede` translations
- Outstanding: author `en_blocks` for all 60 lessons to complete bilingual parity

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

### Best practices when editing lessons:

- **Keep HTML in template literals** — use backticks, escape any backticks or `${` in content
- **Validate HTML** — malformed HTML will break lesson rendering silently
- **Match eyebrow format** — always use `chapter · lesson — Title` (chapter and lesson padded to 2 digits, e.g., "03 · 05")
- **Order chapters numerically** — in `curriculum.js`, maintain order from 01–09
- **Don't modify IDs after publishing** — lesson IDs are stored in localStorage; changing them breaks user progress
- **Test both languages** — after adding content, toggle the language button in the topbar to verify both `en_lede` and `en_blocks` render correctly
- **List formatting** — for definition-style lists (label + description), use `<strong>Label:</strong> Description` in `<li>`. Flexbox layout handles wrapping automatically

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
4. Maintain chapter numbering (01–09)

### Quiz system

- `window.quizData` populated by `loadQuizData()` in `quiz.js` via `fetch('./data/quizzes.json')`
- `window.startQuiz(sectionId)` — builds and shows quiz modal
- The topbar quiz button calls `startQuiz(STATE.currentId)` — wired in `renderLesson()`
- Supported question types: `multiple_choice`, `true_false`, `code`

### Layout

- `lang` and `dir` on `<html>` set dynamically by `setLang()`: Arabic = `lang="ar" dir="rtl"`, English = `lang="en" dir="ltr"`
- `.shell` uses CSS Grid with `direction: ltr` override so column 1 = left (reader), column 2 = right (sidebar), regardless of RTL
- Language-specific CSS: `html.lang-en` overrides border/padding/alignment for LTR (e.g., `border-left` instead of `border-right`)

**Tweaks implementation:**
- Accent picker sets `html[data-accent]` to `gold`, `teal`, or `dual` via `setTweak()` in `shell.js`
- Density picker sets `html[data-density]` to `compact`, `cozy`, or `spacious`
- CSS rules update `--accent` and `--density` custom properties based on these attributes
- All dependent styles automatically update via `var()` — no DOM re-render needed for tweaks changes
- Tweaks state persists in localStorage (`t3m_tweaks`)

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

`showCertificate()` in `quiz.js` — triggered when all 60 lessons are marked done. `downloadCertificate()` uses jsPDF (CDN) to produce a landscape A4 PDF.

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
