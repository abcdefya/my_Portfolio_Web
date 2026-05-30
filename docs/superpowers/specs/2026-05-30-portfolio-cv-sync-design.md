# Portfolio CV Sync Design

## Goal

Update the React portfolio UI so the visible profile information matches `MY_CV.tex`, which is the source of truth for the latest CV. The update covers both English and Vietnamese copy.

## Current Context

The app is a Create React App portfolio. Content is stored directly in component-level language dictionaries, mainly in `Banner`, `Skills`, `Projects`, `NavBar`, `Footer`, `Contact`, and `PortfolioAssistant`.

`MY_CV.tex` describes Do The Anh as an AIOps/MLOps Engineer with hands-on experience in conversational AI, chatbots, RAG pipelines, FastAPI, PostgreSQL, Docker, cloud/MLOps tooling, and the VinUni AI Talent program.

## Approach

Keep the current page structure and bilingual language switcher. Update existing copy in place instead of introducing a new content architecture.

This is the lowest-risk implementation because the portfolio is small, the requested change is content alignment, and the existing components already separate English and Vietnamese text.

## Content Changes

### Banner

Refresh the hero content to match the CV:

- Positioning: AIOps/MLOps Engineer, AI Engineer, RAG/Conversational AI Engineer.
- Summary: 1+ year of hands-on work building conversational AI products, chatbots, and RAG pipelines.
- Stats: NTQ Solution AI Engineer, VinUni AI Talent, production AI systems.

### Skills

Replace stale skill groups with CV-aligned groups:

- LLM and Agentic AI
- DL/ML, Computer Vision, and OCR
- Backend and Data Engineering
- Cloud, DevOps, and MLOps

The tags should include OpenAI API, LangChain, LangGraph, RAG, Qdrant, Neo4j, PyTorch, YOLO, OpenCV, FastAPI, PostgreSQL, Docker, Spark, Kafka, GCP, AWS, Kubernetes, Terraform, Jenkins, Rancher, Prometheus, Grafana, and ELK.

### Projects

Make the featured projects match the latest CV:

- AI English Speaking Coach
- RAG Coding Assistant Chatbot
- Binance Merchant Trading Flow

Each project card should summarize the CV bullets in recruiter-friendly language and point to the relevant GitHub repository where available.

### Experience and Education

Update project tabs:

- Experience: AI Engineer at NTQ Solution, January 2025 to December 2025, OCR, GPT-4o-mini post-processing, RAG chatbot, YOLOv8, and multilingual exam layouts.
- Education: Hanoi University of Science and Technology, B.Sc. Mathematics and Informatics, 2021 to 2025, graduation project awarded the highest rating by the Defense Committee.

### Supporting UI Copy

Fix stale or broken Vietnamese text in components touched during the update. Preserve existing navigation, contact links, assistant behavior, and current visual style.

## Data Flow

No new runtime data flow is introduced. React components continue to read localized copy from local `content` objects based on the `language` prop.

## Error Handling

No new network or error-handling behavior is required. Existing contact form and assistant behavior remain unchanged.

## Testing

Replace the default Create React App smoke test that looks for "learn react" with a portfolio-relevant test that renders the updated profile content.

Run:

```bash
npm test -- --watchAll=false
npm run build
```

## Out of Scope

- Redesigning the visual layout.
- Moving all content to a centralized data file.
- Adding new portfolio sections.
- Changing contact form or assistant backend behavior.
