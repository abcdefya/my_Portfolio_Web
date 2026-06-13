# Featured Project Showcase Design

## Goal

Update the portfolio projects section so it reflects the latest `MY_CV.tex` and presents selected experience work as featured portfolio projects. The first projects tab should become a full-width showcase that displays one project at a time and lets the user navigate with left and right arrow controls.

## Current Context

The site is a Create React App portfolio with localized copy defined directly inside React components. The current `Projects` section:

- uses hardcoded bilingual content inside `src/components/Projects.js`
- renders three small project cards in a grid
- keeps separate tabs for projects, experience, and education
- does not support browsing beyond the fixed card list

`MY_CV.tex` now contains stronger project-worthy material in the experience section, especially:

- LinguAI project at VinUni
- LLM-as-Judge evaluation platform at VinSmartFuture
- RAG coding assistant at TryFifty
- Binance Merchant Trading Flow graduation project

## Approach

Keep the existing section and tab structure, but redesign only the first tab into a featured-project viewer.

This is the lowest-risk path because it:

- preserves the current page information architecture
- limits behavior changes to one section
- avoids introducing a new dependency for carousel behavior
- keeps content ownership in the same localized component structure the repo already uses

## Content Model

The featured project list should no longer be constrained to the formal `Projects` block in the CV. It should promote selected experience items into portfolio entries.

### Featured Projects

The first implementation should include these entries:

1. `LinguAI`
   - Position it as a real-time AI English speaking coach.
   - Highlight the speech pipeline, LangGraph tutoring flow, multilingual assessment, and backend/platform stack.
2. `LLM-as-Judge Evaluation Platform`
   - Position it as an evaluation system for document-heavy AI agents.
   - Highlight isolated scoring metrics, YAML-driven metric definitions, LangGraph metric generation, and analytics tooling.
3. `RAG Coding Assistant`
   - Position it as an AI coding assistant for repository Q&A and debugging.
   - Highlight retrieval architecture, GraphRAG comparison work, and evaluation with Ragas.
4. `Binance Merchant Trading Flow`
   - Position it as a cloud-native data platform and streaming pipeline project.
   - Highlight Spark ETL, CDC and stream processing, and deployment stack.

### Per-Project Fields

Each localized project entry should support:

- `title`
- `tagline` or `role`
- `summary`
- `highlights` list with 2-4 concise bullets
- `stack` string or label list
- `projectUrl`
- `liveUrl` when applicable
- `imgUrl`

If a project does not have a distinct live demo, reuse the repository link instead of leaving the action empty.

## Interaction Design

The first tab should display one full-page featured project panel at a time.

### Navigation Behavior

- Show explicit previous and next arrow buttons.
- Clicking an arrow moves by exactly one project.
- The first project is the default visible item.
- Arrows should be non-looping.
- The previous arrow is disabled on the first item.
- The next arrow is disabled on the last item.

### Accessibility

- Arrow buttons must have clear accessible names.
- Disabled state must be exposed through button semantics.
- Navigation must remain usable by keyboard.
- The active project content should remain readable without hover interactions.

## Layout and Visual Structure

Replace the three-card grid in the first tab with a single featured layout:

- a large visual area for the project image
- a prominent title and supporting metadata
- a summary paragraph
- a short list of highlights
- tech stack text
- repository and live/demo action buttons
- left and right navigation controls framing or adjacent to the panel

The experience and education tabs remain text-based and keep their current role in the section.

The design should stay within the existing visual language of the site rather than introducing a separate theme, but the project showcase should feel more intentional and editorial than the current small-card grid.

## Component Boundaries

### `Projects.js`

Own:

- localized content dictionaries
- featured project array
- current featured project index state
- previous/next handlers
- tab layout

### `ProjectCard.js` or replacement featured component

Own:

- rendering a single featured project panel
- project metadata display
- action links

If the existing `ProjectCard` becomes too unlike a card, it is acceptable to replace it with a more specific featured-project component. Prefer clear responsibility over preserving the old name.

## Data Flow

No external data source is introduced.

The section continues to derive all visible content from local bilingual content objects chosen by the `language` prop. Navigation state is local React component state inside the projects section.

## Error Handling

No network error handling is required.

UI guardrails:

- navigation buttons should remain stable even if the project list length changes
- handlers should not allow the index to move outside array bounds

## Testing

Add or update component tests to cover:

- initial render shows the first featured project
- clicking next shows the next project
- clicking previous returns to the prior project
- previous button is disabled on the first project
- next button is disabled on the last project

If the existing app smoke test is too coarse to verify this behavior, add a focused test around `Projects` or `App` that exercises the project showcase directly.

## Out of Scope

- changing the contact flow or backend API
- centralizing all content into a CMS or JSON file
- adding autoplay, swipe gestures, or infinite looping
- redesigning unrelated sections of the portfolio
- editing `MY_CV.tex` as part of this implementation
