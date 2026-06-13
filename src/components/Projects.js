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
          project: "AI Speaking Coach — Tech Lead, Backend",
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
          project: "AI Speaking Coach — Tech Lead, Backend",
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
