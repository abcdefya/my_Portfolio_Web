# Projects Grid + CV Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the single-featured-project showcase with a 3-per-page paginated card grid, add VinSmartFuture as project #1, and update all CV content (projects, experience timeline, education).

**Architecture:** Keep existing `Projects` section and tab structure. Replace `activeProjectIndex` with `pageIndex` (driving a sliced 3-card grid). Replace the full-width `ProjectCard` panel with a compact rich card. Render the experience tab as a horizontal timeline from a structured data array. Update tests first (TDD), then implement.

**Tech Stack:** React 18, Create React App, React Bootstrap, Jest, React Testing Library, CSS in `src/App.css`.

---

## File Structure

- Modify `src/App.test.js` — replace single-project navigation tests with page-based tests.
- Modify `src/components/Projects.js` — 5-project content model, 4-role experience array, updated education, `pageIndex` state, grid + timeline JSX.
- Modify `src/components/ProjectCard.js` — compact rich card replacing the full-width featured panel.
- Modify `src/App.css` — remove `featured-project-*` styles; add `.proj-card-grid`, `.projects-grid`, `.project-page-nav`, `.page-dots`, `.experience-timeline` styles.

---

## Task 1: Write Failing Page-Navigation Tests

**Files:**
- Modify: `src/App.test.js`

- [ ] **Step 1: Replace `src/App.test.js` with the following**

```javascript
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders first page with LinguAI visible and prev disabled in English', () => {
  render(<App />);
  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous page/i })).toBeDisabled();
  expect(screen.getByRole('button', { name: /next page/i })).toBeEnabled();
});

test('next page shows Binance and disables next arrow in English', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /next page/i }));
  expect(screen.getByText(/Binance Merchant Trading Flow/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous page/i })).toBeEnabled();
  expect(screen.getByRole('button', { name: /next page/i })).toBeDisabled();
});

test('resets to first page when language changes', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /next page/i }));
  fireEvent.click(screen.getByRole('button', { name: 'VI' }));
  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /trang trước/i })).toBeDisabled();
});

test('renders Vietnamese pagination labels', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'VI' }));
  expect(screen.getByRole('button', { name: /trang trước/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /trang tiếp theo/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run tests — verify they fail**

Run:
```bash
npm.cmd test -- --watchAll=false
```

Expected: FAIL — buttons with `aria-label="Previous page"` / `"Next page"` do not exist yet.

- [ ] **Step 3: Confirm only test file changed**

Run:
```bash
git status --short
```

Expected: `M src/App.test.js` only.

---

## Task 2: Update Projects.js — Content Model, Pagination State, JSX

**Files:**
- Modify: `src/components/Projects.js`

- [ ] **Step 1: Replace the full contents of `src/components/Projects.js`**

```javascript
import { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const PAGE_SIZE = 3;

export const Projects = ({ language }) => {

  const content = {
    en: {
      title: "Featured Projects",
      description: "Selected AI, RAG, and cloud-native data projects from my latest CV.",
      tabs: ["Main Projects", "Experience", "Education"],
      repoLabel: "View Repository",
      liveLabel: "Open Link",
      stackLabel: "Stack",
      highlightsLabel: "Highlights",
      prevLabel: "Previous page",
      nextLabel: "Next page",
      projects: [
        {
          title: "LLM-as-Judge Eval Platform",
          role: "AI Engineer Intern · VinSmartFuture · May 2026 – Present",
          highlights: [
            "Built judge pipeline with 6 scoring metrics (faithfulness, coverage, multimodal handling, answer relevancy, thinking quality) and per-criterion LLM isolation to eliminate anchoring bias.",
            "Engineered YAML-based SKILL.md metric system for domain-specific eval (invoices, contracts, medical) and agentic Metric Builder with Groq Llama-4 + LangGraph and live YAML preview.",
            "Built React + TypeScript dashboard with Recharts score trends, cost breakdown, and cloud-agnostic storage abstraction (Local / AWS S3 / MinIO).",
          ],
          stack: "LangGraph, Groq Llama-4, Langfuse, FastAPI, React, TypeScript, Recharts, MinIO",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya",
        },
        {
          title: "LinguAI",
          role: "Tech Lead, Backend · VinUni AI Talent Program · Apr – May 2026",
          highlights: [
            "Led backend: Groq STT → LangGraph conversational agent → ElevenLabs TTS with Azure multilingual speech assessment (English, Vietnamese).",
            "Engineered multi-tiered prompt system with behavioral guardrails and structured Pydantic output — cut cost & latency by 30%.",
            "FastAPI service with JWT auth, PostgreSQL, Redis, MinIO, Elasticsearch; Docker + GKE via Rancher; Prometheus + Grafana.",
          ],
          stack: "Groq STT, LangGraph, ElevenLabs, Azure Speech, FastAPI, PostgreSQL, Redis, Docker, GKE",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI",
        },
        {
          title: "LLM-as-Judge Evaluation Platform",
          role: "Full-Stack Developer · Personal Project · Mar 2026",
          highlights: [
            "Designed judge pipeline routing responses through configurable LLM evaluators with structured scoring.",
            "Built React dashboard for uploading evaluation sets, triggering runs, and comparing model quality metrics.",
            "Deployed on GKE with FastAPI backend, PostgreSQL result store, and Redis job queue.",
          ],
          stack: "LangChain, OpenAI API, FastAPI, PostgreSQL, Redis, React, GKE",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya",
        },
        {
          title: "RAG Coding Assistant",
          role: "AI Engineer · TryFifty · Sep 2024 – Aug 2025",
          highlights: [
            "Implemented hybrid retrieval combining dense vector search (Qdrant) and sparse keyword search for code and docs.",
            "Integrated Neo4j for code graph traversal to surface related functions and dependency chains.",
            "Evaluated retrieval quality with Ragas; ran chunking, metadata, and prompt experiments to improve grounding.",
          ],
          stack: "LangChain, OpenAI API, Neo4j, Qdrant, Ollama, FastAPI, React",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya",
        },
        {
          title: "Binance Merchant Trading Flow",
          role: "Data Engineer · Graduation Project · 2026",
          highlights: [
            "Built Spark ETL jobs with PostgreSQL CDC via Debezium and Kafka for real-time merchant event streaming.",
            "Orchestrated Flink streaming on GKE with Terraform, Helm, and Jenkins CI/CD.",
            "Delivered observability with Prometheus, Grafana, and ELK stack for pipeline monitoring.",
          ],
          stack: "Spark, PostgreSQL, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana, ELK",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
        },
      ],
      experience: [
        {
          company: "VinSmartFuture",
          project: "Multimodal Input Evaluator",
          role: "AI Engineer Intern",
          dates: "May 2026 – Present",
          highlights: [
            "LLM-as-Judge platform; 6 scoring metrics with per-criterion LLM isolation to eliminate anchoring bias.",
            "YAML-based SKILL.md metric system for domain-specific eval (invoices, contracts, medical).",
            "Agentic Metric Builder with Groq Llama-4 + LangGraph; Langfuse connector for batch eval on production traces.",
            "React + TypeScript dashboard with Recharts analytics and cloud-agnostic storage (Local / S3 / MinIO).",
          ],
        },
        {
          company: "VinUni",
          project: "LinguAI — Tech Lead, Backend",
          role: "AI Talent Program Participant",
          dates: "Apr – May 2026",
          highlights: [
            "Real-time AI tutoring coach: Groq STT → LangGraph agent → ElevenLabs TTS + Azure multilingual speech assessment.",
            "Multi-tiered prompt system with behavioral guardrails and structured Pydantic output — cut cost & latency by 30%.",
            "FastAPI + JWT + PostgreSQL + Redis + GKE via Rancher; Prometheus + Grafana + VEK log aggregation.",
          ],
        },
        {
          company: "NTQ Solution",
          project: "Hanoi, Vietnam",
          role: "AI Engineer Intern (Full-time)",
          dates: "Sep – Dec 2025",
          highlights: [
            "OCR preprocessing pipeline with OpenCV and GPT-4o-mini structured post-processing for exam sheets.",
            "Teacher-facing RAG Q&A chatbot; YOLOv8 multi-table exam detection with >98% confidence.",
          ],
        },
        {
          company: "TryFifty",
          project: "South Korea",
          role: "AI Engineer (Part-time, Remote)",
          dates: "Sep 2024 – Aug 2025",
          highlights: [
            "AI coding assistant with LangChain + Qdrant hybrid RAG; compared vector RAG vs GraphRAG for code understanding.",
            "Evaluated with Ragas; ran chunking, metadata, and prompt experiments to improve grounding and answer relevance.",
          ],
        },
      ],
      education: "Hanoi University of Science and Technology — B.Sc. in Mathematics and Informatics (2021 – 2026). Completed all degree requirements; awaiting official graduation certificate. Graduation project awarded the highest rating by the Defense Committee.",
    },
    vi: {
      title: "Dự Án Nổi Bật",
      description: "Một số dự án AI, RAG và nền tảng dữ liệu cloud-native tiêu biểu trong CV mới nhất.",
      tabs: ["Dự Án Chính", "Kinh Nghiệm", "Học Vấn"],
      repoLabel: "Xem Repository",
      liveLabel: "Mở Liên Kết",
      stackLabel: "Công nghệ",
      highlightsLabel: "Điểm nổi bật",
      prevLabel: "Trang trước",
      nextLabel: "Trang tiếp theo",
      projects: [
        {
          title: "LLM-as-Judge Eval Platform",
          role: "AI Engineer Intern · VinSmartFuture · Tháng 5/2026 – Hiện tại",
          highlights: [
            "Pipeline judge với 6 metric chấm điểm và LLM isolation theo từng tiêu chí để loại bỏ anchoring bias.",
            "Hệ thống metric YAML-based SKILL.md theo domain (hóa đơn, hợp đồng, y tế); Metric Builder tác tử với Groq Llama-4 + LangGraph.",
            "Dashboard React + TypeScript với Recharts analytics và storage cloud-agnostic (Local / S3 / MinIO).",
          ],
          stack: "LangGraph, Groq Llama-4, Langfuse, FastAPI, React, TypeScript, Recharts, MinIO",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya",
        },
        {
          title: "LinguAI",
          role: "Tech Lead, Backend · Chương trình VinUni AI Talent · Tháng 4 – 5/2026",
          highlights: [
            "Kiến trúc backend: Groq STT → LangGraph agent → ElevenLabs TTS + Azure speech assessment đa ngôn ngữ.",
            "Hệ thống prompt đa tầng với guardrails hành vi và Pydantic output — giảm 30% chi phí & độ trễ.",
            "FastAPI + JWT + PostgreSQL + Redis + GKE qua Rancher; Prometheus + Grafana monitoring.",
          ],
          stack: "Groq STT, LangGraph, ElevenLabs, Azure Speech, FastAPI, PostgreSQL, Redis, Docker, GKE",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI",
        },
        {
          title: "Nền tảng đánh giá LLM-as-Judge",
          role: "Lập trình viên Full-Stack · Dự án cá nhân · Tháng 3/2026",
          highlights: [
            "Pipeline judge định tuyến phản hồi qua các LLM evaluator có thể cấu hình với chấm điểm có cấu trúc.",
            "Dashboard React để tải lên bộ đánh giá, kích hoạt chạy và so sánh chỉ số chất lượng mô hình.",
            "Triển khai trên GKE với FastAPI backend, PostgreSQL và Redis.",
          ],
          stack: "LangChain, OpenAI API, FastAPI, PostgreSQL, Redis, React, GKE",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya",
        },
        {
          title: "RAG Coding Assistant",
          role: "AI Engineer · TryFifty · Tháng 9/2024 – Tháng 8/2025",
          highlights: [
            "Tìm kiếm lai: Qdrant vector dày + tìm kiếm từ khóa thưa cho mã và tài liệu.",
            "Tích hợp Neo4j duyệt đồ thị mã nguồn; so sánh vector RAG vs GraphRAG.",
            "Đánh giá với Ragas; thử nghiệm chunking, metadata và prompt để cải thiện grounding.",
          ],
          stack: "LangChain, OpenAI API, Neo4j, Qdrant, Ollama, FastAPI, React",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya",
        },
        {
          title: "Binance Merchant Trading Flow",
          role: "Kỹ sư Dữ liệu · Đồ án tốt nghiệp · 2026",
          highlights: [
            "Spark ETL với PostgreSQL CDC qua Debezium và Kafka để stream sự kiện merchant thời gian thực.",
            "Flink streaming trên GKE với Terraform, Helm và Jenkins CI/CD.",
            "Prometheus + Grafana + ELK cho quan sát và giám sát pipeline.",
          ],
          stack: "Spark, PostgreSQL, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana, ELK",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
        },
      ],
      experience: [
        {
          company: "VinSmartFuture",
          project: "Multimodal Input Evaluator",
          role: "AI Engineer Intern",
          dates: "Tháng 5/2026 – Hiện tại",
          highlights: [
            "Nền tảng LLM-as-Judge cho AI agent xử lý tài liệu; 6 metric chấm điểm với LLM isolation theo từng tiêu chí.",
            "Hệ thống metric YAML-based SKILL.md theo domain (hóa đơn, hợp đồng, y tế).",
            "Metric Builder tác tử với Groq Llama-4 + LangGraph; tích hợp Langfuse connector cho batch eval.",
            "Dashboard React + TypeScript với Recharts analytics và storage cloud-agnostic.",
          ],
        },
        {
          company: "VinUni",
          project: "LinguAI — Tech Lead, Backend",
          role: "AI Talent Program Participant",
          dates: "Tháng 4 – 5/2026",
          highlights: [
            "Backend: Groq STT → LangGraph → ElevenLabs TTS + Azure speech assessment đa ngôn ngữ.",
            "Hệ thống prompt đa tầng với guardrails — giảm 30% chi phí & độ trễ.",
            "FastAPI + GKE + Prometheus/Grafana; VEK log aggregation.",
          ],
        },
        {
          company: "NTQ Solution",
          project: "Hà Nội, Việt Nam",
          role: "AI Engineer Intern (Toàn thời gian)",
          dates: "Tháng 9 – 12/2025",
          highlights: [
            "Pipeline OCR + GPT-4o-mini hậu xử lý có cấu trúc cho đề thi.",
            "Chatbot Q&A RAG cho giáo viên; YOLOv8 phát hiện bảng đề thi >98%.",
          ],
        },
        {
          company: "TryFifty",
          project: "Hàn Quốc",
          role: "AI Engineer (Bán thời gian, Remote)",
          dates: "Tháng 9/2024 – Tháng 8/2025",
          highlights: [
            "Trợ lý lập trình AI với LangChain + Qdrant hybrid RAG; so sánh vector RAG vs GraphRAG.",
            "Đánh giá với Ragas; thử nghiệm chunking, metadata, prompt.",
          ],
        },
      ],
      education: "Đại học Bách khoa Hà Nội — Cử nhân Toán Tin (2021 – 2026). Đã hoàn thành toàn bộ yêu cầu chương trình; đang chờ cấp bằng tốt nghiệp chính thức. Đồ án tốt nghiệp được Hội đồng bảo vệ đánh giá mức cao nhất.",
    },
  };

  const t = content[language] ?? content.en;
  const projects = t.projects;
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [language]);

  const goToPrevPage = () => {
    setPageIndex((i) => Math.max(0, i - 1));
  };

  const goToNextPage = () => {
    setPageIndex((i) => Math.min(totalPages - 1, i + 1));
  };

  const visibleProjects = projects.slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{t.title}</h2>
                <p>{t.description}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{t.tabs[0]}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{t.tabs[1]}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{t.tabs[2]}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="project-page-nav">
                        <button
                          type="button"
                          className="project-nav-button"
                          onClick={goToPrevPage}
                          disabled={pageIndex === 0}
                          aria-label={t.prevLabel}
                        >
                          <span aria-hidden="true">←</span>
                        </button>
                        <div className="projects-grid">
                          {visibleProjects.map((project, index) => (
                            <ProjectCard
                              key={pageIndex * PAGE_SIZE + index}
                              {...project}
                              repoLabel={t.repoLabel}
                              liveLabel={t.liveLabel}
                              stackLabel={t.stackLabel}
                              highlightsLabel={t.highlightsLabel}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          className="project-nav-button"
                          onClick={goToNextPage}
                          disabled={pageIndex === totalPages - 1}
                          aria-label={t.nextLabel}
                        >
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                      <div className="page-dots">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i}
                            type="button"
                            className={`page-dot${i === pageIndex ? " page-dot--active" : ""}`}
                            onClick={() => setPageIndex(i)}
                            aria-label={`Page ${i + 1}`}
                          />
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="experience-timeline">
                        {t.experience.map((entry, index) => (
                          <div className="experience-timeline__entry" key={index}>
                            <div className="experience-timeline__dot" />
                            <div className="experience-timeline__dates">{entry.dates}</div>
                            <div className="experience-timeline__company">{entry.company}</div>
                            <div className="experience-timeline__role">{entry.role}</div>
                            <div className="experience-timeline__project">{entry.project}</div>
                            <ul className="experience-timeline__highlights">
                              {entry.highlights.map((h, hi) => (
                                <li key={hi}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>{t.education}</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
```

- [ ] **Step 2: Run tests — all 4 should now pass**

Run:
```bash
npm.cmd test -- --watchAll=false
```

Expected: PASS — the pagination buttons with correct `aria-label` values now exist. The old `ProjectCard` (still unrewritten) renders the `title` field via `<h3>` so text assertions pass.

---

## Task 3: Rewrite ProjectCard.js as Compact Rich Card

**Files:**
- Modify: `src/components/ProjectCard.js`

- [ ] **Step 1: Replace the full contents of `src/components/ProjectCard.js`**

```javascript
export const ProjectCard = ({
  title,
  role,
  highlights = [],
  stack,
  imgUrl,
  projectUrl,
  liveUrl,
  repoLabel,
  liveLabel,
  stackLabel,
  highlightsLabel,
}) => {
  const actualLiveUrl = liveUrl || projectUrl;

  return (
    <article className="proj-card-grid">
      <div className="proj-card-grid__img">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="proj-card-grid__body">
        <p className="proj-card-grid__role">{role}</p>
        <h3 className="proj-card-grid__title">{title}</h3>
        <div className="proj-card-grid__highlights">
          <h4>{highlightsLabel}</h4>
          <ul>
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <p className="proj-card-grid__stack">
          <span>{stackLabel}:</span> {stack}
        </p>
        <div className="proj-actions">
          <a
            className="proj-btn"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${repoLabel} for ${title}`}
          >
            {repoLabel}
          </a>
          <a
            className="proj-btn proj-btn-secondary"
            href={actualLiveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${liveLabel} for ${title}`}
          >
            {liveLabel}
          </a>
        </div>
      </div>
    </article>
  );
};
```

- [ ] **Step 2: Run tests — verify still passing**

Run:
```bash
npm.cmd test -- --watchAll=false
```

Expected: PASS — 4/4.

---

## Task 4: Update App.css — Remove Featured Styles, Add Grid + Timeline Styles

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Remove old featured-project styles**

Find the `/* Featured project showcase */` comment block and delete these selectors entirely (including their rule bodies):
- `.featured-project-shell`
- `.project-nav-button` (and `:hover:not(:disabled)`, `:disabled` variants)
- `.featured-project-panel`
- `.featured-project-media img`
- `.featured-project-copy`
- `.featured-project-role`
- `.featured-project-panel h3`
- `.featured-project-summary`
- `.featured-project-meta h4`
- `.featured-project-meta ul`
- `.featured-project-meta li`
- `.featured-project-meta li::before`
- `.featured-project-stack`
- `.featured-project-stack span`
- `.featured-project-copy .proj-actions`
- The `@media (max-width: 768px)` block that references `.featured-project-shell` and `.featured-project-panel`

Also update the standalone `.proj-actions` rule to remove the old card-specific padding — keep only:
```css
.proj-actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
```

- [ ] **Step 2: Add new styles after the last `.proj-btn-secondary` rule**

```css
/* ---- Project grid & pagination ---- */
.project-page-nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: 16px;
}

.project-nav-button {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease;
  flex-shrink: 0;
  margin-top: 8px;
}

.project-nav-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.16);
}

.project-nav-button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.page-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.page-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease;
}

.page-dot--active {
  background: rgba(255, 255, 255, 0.8);
}

/* ---- Project card (compact rich) ---- */
.proj-card-grid {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.proj-card-grid__img img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.proj-card-grid__body {
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
}

.proj-card-grid__role {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  margin: 0;
  line-height: 1.4;
}

.proj-card-grid__title {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

.proj-card-grid__highlights h4 {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 4px;
}

.proj-card-grid__highlights ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.proj-card-grid__highlights li {
  color: #ccc;
  font-size: 0.8rem;
  line-height: 1.55;
  padding-left: 12px;
  position: relative;
}

.proj-card-grid__highlights li::before {
  content: "·";
  position: absolute;
  left: 2px;
  color: rgba(255, 255, 255, 0.4);
}

.proj-card-grid__stack {
  color: #bbb;
  font-size: 0.78rem;
  line-height: 1.5;
  margin: 0;
}

.proj-card-grid__stack span {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
}

/* ---- Experience horizontal timeline ---- */
.experience-timeline {
  display: flex;
  position: relative;
  padding-top: 32px;
}

.experience-timeline::before {
  content: "";
  position: absolute;
  top: 13px;
  left: calc(12.5% - 9px);
  right: calc(12.5% - 9px);
  height: 2px;
  background: linear-gradient(90deg, #38bdf8, rgba(56, 189, 248, 0.2));
  border-radius: 2px;
}

.experience-timeline__entry {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 8px;
  position: relative;
}

.experience-timeline__dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #38bdf8;
  border: 3px solid #0a0a1a;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
  position: absolute;
  top: -32px;
  flex-shrink: 0;
}

.experience-timeline__entry:last-child .experience-timeline__dot {
  background: rgba(56, 189, 248, 0.35);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
}

.experience-timeline__dates {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.7rem;
  margin-bottom: 3px;
}

.experience-timeline__company {
  color: #38bdf8;
  font-weight: 700;
  font-size: 0.85rem;
}

.experience-timeline__role {
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 2px;
}

.experience-timeline__project {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.72rem;
  margin-top: 2px;
  font-style: italic;
}

.experience-timeline__highlights {
  list-style: none;
  padding: 10px;
  margin: 8px 0 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  text-align: left;
  width: 100%;
}

.experience-timeline__highlights li {
  color: #ccc;
  font-size: 0.78rem;
  line-height: 1.6;
  padding-left: 10px;
  position: relative;
  margin-bottom: 4px;
}

.experience-timeline__highlights li:last-child {
  margin-bottom: 0;
}

.experience-timeline__highlights li::before {
  content: "·";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.35);
}

/* ---- Responsive ---- */
@media (max-width: 991px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .project-page-nav {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .project-page-nav > .projects-grid {
    grid-row: 1;
    grid-column: 1;
  }

  .project-page-nav > .project-nav-button:first-child {
    grid-row: 2;
    grid-column: 1;
    justify-self: start;
    margin-top: 12px;
  }

  .project-page-nav > .project-nav-button:last-child {
    grid-row: 2;
    grid-column: 1;
    justify-self: end;
    margin-top: -44px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .experience-timeline {
    flex-direction: column;
    padding-top: 0;
    padding-left: 28px;
    gap: 20px;
  }

  .experience-timeline::before {
    top: 9px;
    bottom: 9px;
    left: 8px;
    right: auto;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, #38bdf8, rgba(56, 189, 248, 0.2));
  }

  .experience-timeline__entry {
    align-items: flex-start;
    text-align: left;
    padding: 0;
  }

  .experience-timeline__dot {
    position: absolute;
    left: -28px;
    top: 2px;
  }
}
```

- [ ] **Step 3: Run tests — confirm still passing**

Run:
```bash
npm.cmd test -- --watchAll=false
```

Expected: PASS — 4/4. CSS changes do not affect test assertions.

- [ ] **Step 4: Commit**

Run:
```bash
git add src/App.test.js src/components/Projects.js src/components/ProjectCard.js src/App.css
git commit -m "feat: paginated project grid, cv update, experience timeline"
```

Expected: commit created on current branch.

---

## Task 5: Production Build Verification

**Files:**
- No code changes.

- [ ] **Step 1: Run production build**

Run:
```bash
npm.cmd run build
```

Expected: Build completes with no errors. Output written to `build/`.

- [ ] **Step 2: Check working tree**

Run:
```bash
git status --short
```

Expected: Pre-existing uncommitted files only (`.env.example`, `MY_CV.tex`, `src/assets/img/banner-bg.png`). The four changed source files should be committed and clean.

- [ ] **Step 3: Report verification**

```
Tests:  npm.cmd test -- --watchAll=false  →  4/4 passed.
Build:  npm.cmd run build                 →  success.
Pre-existing uncommitted: .env.example, MY_CV.tex, src/assets/img/banner-bg.png.
```
