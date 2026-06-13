# Projects Grid + CV Update Design

**Date:** 2026-06-13
**Scope:** Replace single-featured-project showcase with a 3-per-page paginated card grid; update all CV content to match latest resume.

---

## Goal

1. Show projects as a paginated grid (3 cards per row, arrows when > 3 projects).
2. Update portfolio content to reflect the latest CV: add VinSmartFuture role, update experience timeline, fix education dates.

---

## Projects Tab — Paginated Grid

### Layout

- Default view: 3 cards per row in a CSS grid.
- Navigation: left arrow (disabled on page 0) + right arrow (disabled on last page) flanking the grid.
- Page indicator: dot row below grid (filled dot = current page, hollow = other pages).
- Last page shows only as many cards as exist — no empty placeholders.
- On mobile (≤768px): 1 column, arrows above and below the grid.

### Pagination State

- Replace `activeProjectIndex` with `pageIndex` (integer, default 0).
- `goToPrevPage`: `Math.max(0, pageIndex - 1)`.
- `goToNextPage`: `Math.min(totalPages - 1, pageIndex + 1)`.
- `totalPages`: `Math.ceil(projects.length / PAGE_SIZE)` where `PAGE_SIZE = 3`.
- Visible slice: `projects.slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE)`.
- Reset `pageIndex` to 0 via `useEffect` when `language` changes.

### Card Design (Rich Card — Option B)

Each `ProjectCard` renders:
- Project image (`<img>`) with aspect ratio 16/10, object-fit cover, rounded corners.
- Role line: small muted text (`role` field).
- Title: bold (`title` field).
- Highlights: bulleted list of 3 items (`highlights` array, max 3 shown).
- Stack line: `Stack: <value>` with accent label (`stack` field).
- Action row: `View Repository` + `Open Link` buttons side by side.

Props: `title`, `role`, `highlights`, `stack`, `imgUrl`, `projectUrl`, `liveUrl`, `repoLabel`, `liveLabel`, `stackLabel`, `highlightsLabel`.

No hover overlay. No `featured-project-*` classes. New classes: `proj-card-grid`, `proj-card-grid__img`, `proj-card-grid__body`.

### Projects Data — 5 entries (EN + VI)

Order: newest → oldest.

| # | Title (EN) | Role / Context | Dates |
|---|---|---|---|
| 1 | LLM-as-Judge Eval Platform | AI Engineer Intern · VinSmartFuture | May 2026 – Present |
| 2 | LinguAI | Tech Lead, Backend · VinUni AI Talent | Apr – May 2026 |
| 3 | LLM-as-Judge Evaluation Platform | Full-Stack Developer · Personal Project | Mar 2026 |
| 4 | RAG Coding Assistant | AI Engineer · TryFifty | Sep 2024 – Aug 2025 |
| 5 | Binance Merchant Trading Flow | Data Engineer · Graduation Project | 2026 |

**Project 1 — VinSmartFuture (new):**
- highlights: LLM-as-Judge platform with 6 scoring metrics and per-criterion LLM isolation; YAML-based SKILL.md metric system (invoices, contracts, medical); Agentic Metric Builder with Groq Llama-4 + LangGraph, Langfuse connector for batch eval; React + TypeScript dashboard with Recharts analytics and cloud-agnostic storage.
- stack: LangGraph, Groq Llama-4, Langfuse, FastAPI, React, TypeScript, Recharts, MinIO/S3

Projects 2–5 keep existing `highlights` and `stack` values from current `Projects.js`, with role/dates corrected to match CV.

Vietnamese content mirrors English with translated `role`, `summary`, `highlights` labels. Project titles that are proper nouns (LinguAI, Binance Merchant Trading Flow, RAG Coding Assistant) stay in English.

---

## Experience Tab — Horizontal Timeline

### Layout

- Horizontal flex row, 4 nodes evenly spaced.
- Gradient line connecting nodes left (newest, `#38bdf8`) to right (oldest, faded).
- Each node: dot marker → date (top) → company name (accent color) → role title → project/location subtitle → bullet list in a card.
- Newest node (VinSmartFuture) has full-brightness dot; oldest (TryFifty) has faded dot.
- **Mobile (≤768px):** flex-direction column, left-border line replacing horizontal line (vertical fallback).

### 4 Roles (EN + VI)

1. **VinSmartFuture** · AI Engineer Intern · Multimodal Input Evaluator · May 2026 – Present
   - 4 bullets from CV (judge platform, YAML system, Metric Builder, React dashboard)
2. **VinUni** · AI Talent Program Participant · LinguAI, Tech Lead Backend · Apr – May 2026
   - 3 bullets (speech pipeline, prompt system + 30% cost reduction, FastAPI/GKE stack)
3. **NTQ Solution** · AI Engineer Intern (Full-time) · Hanoi, Vietnam · Sep – Dec 2025
   - 2 bullets (OCR + GPT-4o-mini, YOLOv8 table detection)
4. **TryFifty** · AI Engineer (Part-time, Remote) · South Korea · Sep 2024 – Aug 2025
   - 2 bullets (RAG coding assistant + GraphRAG comparison, Ragas evaluation)

---

## Education Tab

Update text:
- Dates: 2021 – 2026 (was 2021 – 2025).
- Add: "Completed all degree requirements; awaiting official graduation certificate."

---

## Tests

Update `src/App.test.js`:
- Remove single-project navigation tests (prev/next project).
- Add: renders first page with 3 projects visible.
- Add: next-page arrow advances by 3.
- Add: prev-page arrow disabled on first page; next-page arrow disabled on last page.
- Add: page index resets to 0 on language change.
- Add: Vietnamese labels on pagination buttons.

---

## Files Changed

| File | Change |
|---|---|
| `src/components/Projects.js` | New content model (5 projects, 4-role timeline, updated education); `pageIndex` state replacing `activeProjectIndex`; pagination handlers; horizontal timeline JSX in experience tab |
| `src/components/ProjectCard.js` | Replace featured-panel layout with compact rich card grid layout |
| `src/App.css` | Remove `featured-project-*` styles; add `proj-card-grid` card styles; add `.experience-timeline` horizontal/vertical responsive styles; add `.page-dots` indicator styles |
| `src/App.test.js` | Replace single-project navigation tests with page-based navigation tests |

---

## Out of Scope

- Clicking a project card to open a detail modal.
- Animated transitions between pages.
- Lazy-loading project images.
