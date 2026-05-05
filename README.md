<div align="center">

# تعلَّم · Power BI

### The most comprehensive Arabic Power BI course — free, open-source, and built to take you from zero to enterprise-level analyst.

[![Lessons](https://img.shields.io/badge/Lessons-79-F5A623?style=flat-square&logo=bookstack&logoColor=white)](https://ta3lam.github.io/Power-BI/)
[![Quiz Questions](https://img.shields.io/badge/Quiz%20Questions-327-00B4D8?style=flat-square&logo=checkmarx&logoColor=white)](https://ta3lam.github.io/Power-BI/)
[![Languages](https://img.shields.io/badge/Languages-AR%20%2B%20EN-6C63FF?style=flat-square&logo=googletranslate&logoColor=white)](https://ta3lam.github.io/Power-BI/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Live-F5A623?style=flat-square&logo=github-pages&logoColor=white)](https://ta3lam.github.io/Power-BI/)

**[🚀 ابدأ التعلم الآن](https://ta3lam.github.io/Power-BI/)**

</div>

---

## What is this?

**Ta3laM Power BI** is a self-paced, browser-based course that teaches Microsoft Power BI from first principles to advanced enterprise usage — entirely in Arabic, with a full English translation toggle built in.

No account required. No subscription. No ads. Just open the link and start learning.

---

## Who this is for

This course is built for Arabic-speaking learners who want to move beyond clicking around Power BI and start thinking like BI analysts:

- Beginners who want a structured path from data basics to report publishing
- Excel or SQL users moving into Power BI and dashboard work
- Junior data analysts who need stronger DAX, modeling, and Power Query foundations
- Business users who want to understand metrics, KPIs, and decision-focused reporting
- Instructors or teams looking for a complete Arabic Power BI learning path

---

## What you will build and learn

By the end, the learner is not only expected to know where buttons are. The goal is to build a practical BI mindset:

- Design clean data models using facts, dimensions, relationships, date tables, and bridge tables
- Transform messy data with Power Query and understand when Query Folding matters
- Write DAX measures for real business questions, not only isolated formulas
- Build dashboards that explain performance through KPIs, filters, bookmarks, drillthrough, and mobile layouts
- Publish reports, think about security, RLS, gateway refresh, governance, and deployment workflows
- Complete guided portfolio projects that can be discussed in interviews or client conversations

---

## Visual preview

<p align="center">
  <img src="images/Power%20BI%20-%20Home%20Page.png" alt="Power BI course homepage preview" width="48%">
  <img src="images/Power%20BI%20-%20Views.png" alt="Power BI interface lesson preview" width="48%">
</p>

<p align="center">
  <img src="images/OLAP%20Vs%20OLTP.png" alt="OLAP versus OLTP diagram" width="48%">
  <img src="images/Schemas.png" alt="Data schema lesson diagram" width="48%">
</p>

---

## Why I built this

Power BI is often taught as a collection of visuals and formulas. This project takes a different path: it teaches the thinking behind reliable BI work, from understanding operational data to modeling, DAX, governance, and business outcomes.

It is part of the Ta3laM Tech mission to make serious data education accessible in Arabic while still matching the structure and depth expected from professional analytics work.

---

## ✨ Features

- **79 structured lessons** across 10 progressive chapters — from "what is a data model" to Composite Models, Deployment Pipelines, and Microsoft Fabric
- **Bilingual** — every lesson is fully translated to English; switch languages with one click in the top bar
- **Quiz-gated progression** — each lesson has a built-in quiz (327 questions total); you must pass at 80% before unlocking the next lesson
- **AI-powered visuals chapter** — dedicated lessons on Key Influencers, Q&A, Smart Narrative, and Anomaly Detection
- **KPI domain library** — 5 industry-specific lessons covering Finance, Sales, Inventory, HR, and Marketing KPIs
- **Real-world capstone projects** — 3 guided projects (Starter → Intermediate → Advanced) plus a Portfolio & Interview Playbook
- **Static core that runs locally** — lessons and quizzes run from a local static server; Google Fonts and certificate PDF generation use CDN unless vendored locally
- **Customizable UI** — accent color, density, dark/light mode, and backdrop all persist in localStorage
- **Certificate of completion** — generated as a PDF via jsPDF when all lessons are finished

---

## 📚 Curriculum

| # | Chapter | Lessons | Highlights |
|---|---------|---------|------------|
| 01 | The Real Start: Understand Data First | 7 | OLTP vs OLAP, Star Schema, SCDs, Bridge Tables |
| 02 | Data Engineering & Transformation | 6 | Power Query, M Language, Group By, Pivot/Unpivot, Query Folding |
| 03 | Building the Data Model | 5 | Relationships, Date Tables, Hierarchies, DirectQuery vs Import, Tabular Editor |
| 04 | DAX — Data Analysis Expressions | 15 | CALCULATE, Row/Filter Context, Iterators, Time Intelligence, M2M, Budget vs Actual |
| 05 | Visual Design & Visualization | 11 | Conditional Formatting, Bookmarks, Drillthrough, Mobile Design, AI Visuals |
| 06 | Publishing & Governance | 5 | Workspaces, RLS, Gateway, Incremental Refresh |
| 07 | Advanced & Optimization | 18 | Performance Tuning, Composite Models, Calculation Groups, Deployment Pipelines, Data Governance |
| 08 | Automation & Integration | 3 | Power Automate, Automated Refresh, Report Generation |
| 09 | KPI Domains | 5 | Finance · Sales · Inventory · HR · Marketing — practical measure libraries |
| 10 | Capstones & Case Studies | 4 | Pizza Place → Chess Games → Airbnb Intelligence + Portfolio Playbook |

---

## 🛠 Tech Stack

This is a **zero-build static site** — no framework, no bundler, no node_modules.

| Layer | Technology |
|-------|-----------|
| Structure | Vanilla HTML5 |
| Styling | CSS3 with custom properties (full design token system) |
| Logic | Vanilla JavaScript (ES6+) — single IIFE architecture |
| Content | Lesson content in `js/lessons.js` as tagged template literals |
| Quiz data | `data/quizzes.json` — loaded via `fetch()` |
| PDF certificate | [jsPDF](https://github.com/parallax/jsPDF) (CDN; vendor locally for full offline use) |
| Hosting | GitHub Pages via GitHub Actions |
| Fonts | Newsreader (headings) · Cairo (Arabic body) · JetBrains Mono (code) |

---

## 🚀 Running Locally

A local server is required because `fetch()` is used to load quiz data.

```bash
# Clone the repo
git clone https://github.com/ta3lam/Power-BI.git
cd Power-BI

# Start a local server (Python 3)
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

No `npm install`. No build step. That's it.

### Pre-commit validation

```bash
node --check js/shell.js && \
node --check js/quiz.js && \
node --check js/lessons.js && \
node --check js/curriculum.js && \
node -e "JSON.parse(require('fs').readFileSync('data/quizzes.json','utf8'))" && \
echo "✅ All checks passed"
```

---

## 📁 Project Structure

```
Power-BI/
├── index.html              # Shell skeleton — no lesson content
├── css/
│   ├── shell.css           # Layout, sidebar, typography, design tokens
│   └── style.css           # Lesson content component styles
├── js/
│   ├── curriculum.js       # Chapter & lesson metadata (id, title, mins, kind)
│   ├── lessons.js          # All lesson content — Arabic + English HTML blocks
│   ├── shell.js            # Navigation, rendering, i18n, state management
│   └── quiz.js             # Quiz modal, certificate, bilingual UI
├── data/
│   └── quizzes.json        # 327 quiz questions across all 79 lessons
├── images/                 # Lesson screenshots and diagrams
├── fonts/                  # MirandaSans (Latin subset)
└── .github/
    └── workflows/
        └── static.yml      # GitHub Actions → GitHub Pages deployment
```

---

## 🌐 Internationalization

The course is fully bilingual. Every lesson has:

| Field | Language | Description |
|-------|----------|-------------|
| `title` / `lede` / `blocks` | Arabic | Primary content |
| `en_title` / `en_lede` / `en_blocks` | English | Full translation |

The language toggle in the top bar switches all content instantly — no page reload. Language preference persists in `localStorage`.

---

## 🧩 Adding a Lesson

1. **`js/curriculum.js`** — add metadata to the target chapter:
   ```js
   { id: "my-lesson", title: "عنوان عربي", en: "English Title", mins: 20, kind: "concept" }
   ```

2. **`js/lessons.js`** — add bilingual content keyed by the same `id`:
   ```js
   "my-lesson": {
     eyebrow: "04 · 16 — عنوان",
     title: "عنوان",
     lede: "مقدمة قصيرة.",
     en_eyebrow: "04 · 16 — Title",
     en_lede: "Short intro.",
     blocks: [{ kind: "html", html: `<div>...Arabic HTML...</div>` }],
     en_blocks: [{ kind: "html", html: `<div>...English HTML...</div>` }],
   }
   ```

3. **`data/quizzes.json`** — add quiz questions with `"section": "my-lesson"`.

4. Run the validation one-liner above before committing.

---

## 📊 Stats

| Metric | Value |
|--------|-------|
| Total lessons | 79 |
| Total chapters | 10 |
| Quiz questions | 327 |
| Quiz coverage | 100% (79 / 79 lessons) |
| Languages | Arabic + English |
| Avg. questions per lesson | 4.1 |
| Passing score | 80% |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, share, and build upon with attribution.

---

<div align="center">

Built with ❤️ for the Arabic data community

**[ta3lam.tech2024@gmail.com](mailto:ta3lam.tech2024@gmail.com)**

</div>
