import { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({ language }) => {

  const content = {
    en: {
      title: "Featured Projects",
      description: "Selected AI, RAG, and cloud-native data projects from my latest CV.",
      tabs: ["Main Projects", "Experience", "Education"],
      repoLabel: "View Repository",
      liveLabel: "Open Link",
      stackLabel: "Tech Stack",
      highlightsLabel: "Highlights",
      projects: [
        {
          title: "LinguAI",
          role: "Tech Lead, Backend · VinUni AI Talent Program · Apr - May 2026",
          summary: "Real-time AI English speaking coach for students across Vietnam with speech input, agentic tutoring, multilingual assessment, and a production-ready backend platform.",
          highlights: [
            "Built a speech pipeline from Groq STT through LangGraph tutoring logic to ElevenLabs TTS for live coaching sessions.",
            "Integrated Azure multilingual speech assessment for English and Vietnamese pronunciation and fluency feedback.",
            "Designed FastAPI services backed by PostgreSQL, Redis, MinIO, Elasticsearch, Docker, and GKE deployment."
          ],
          stack: "Groq STT, LangGraph, ElevenLabs, Azure Speech, FastAPI, PostgreSQL, Redis, MinIO, Elasticsearch, Docker, GKE",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI"
        },
        {
          title: "LLM-as-Judge Evaluation Platform",
          role: "Full-Stack Developer · Personal Project · Mar 2026",
          summary: "End-to-end platform for evaluating LLM outputs using judge models, supporting custom rubrics, batch evaluation, and result dashboards.",
          highlights: [
            "Designed a judge pipeline that routes responses through configurable LLM evaluators with structured scoring.",
            "Built a React dashboard for uploading evaluation sets, triggering runs, and comparing model quality metrics.",
            "Deployed on GKE with FastAPI backend, PostgreSQL result store, and Redis job queue."
          ],
          stack: "LangChain, OpenAI API, FastAPI, PostgreSQL, Redis, React, GKE",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "RAG Coding Assistant",
          role: "Full-Stack Developer · Personal Project · Jan 2026",
          summary: "Production-ready coding assistant using retrieval-augmented generation with hybrid search across code and documentation.",
          highlights: [
            "Implemented hybrid retrieval combining dense vector search (Qdrant) and sparse keyword search for code and docs.",
            "Integrated Neo4j for code graph traversal to surface related functions and dependency chains.",
            "Supported multilingual debugging with Ollama local models and OpenAI API fallback."
          ],
          stack: "LangChain, OpenAI API, Neo4j, Qdrant, Ollama, FastAPI, React",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "Binance Merchant Trading Flow",
          role: "Data Engineer · Personal Project · Nov 2025",
          summary: "Cloud-native Binance C2C merchant data platform with end-to-end streaming and batch pipeline on GKE.",
          highlights: [
            "Built Spark ETL jobs with PostgreSQL CDC via Debezium and Kafka for real-time merchant event streaming.",
            "Orchestrated Flink streaming jobs on GKE with Terraform, Helm, and Jenkins CI/CD.",
            "Delivered observability with Prometheus, Grafana, and ELK stack for pipeline monitoring."
          ],
          stack: "Spark, PostgreSQL, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana, ELK",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        }
      ],
      experience: "AI Engineer at NTQ Solution, Hanoi, Vietnam (Jan 2025 - Dec 2025): built OCR preprocessing pipelines with OpenCV, integrated GPT-4o-mini structured post-processing, developed a teacher-facing RAG Q&A chatbot, fine-tuned YOLOv8 for multi-table exam detection with >98% confidence, and improved robustness across Vietnamese and Japanese exam formats with Albumentations.",
      education: "Hanoi University of Science and Technology - B.Sc. in Mathematics and Informatics (2021 - 2025). Completed all degree requirements; graduation project awarded the highest rating by the Defense Committee."
    },
    vi: {
      title: "Dự Án Nổi Bật",
      description: "Một số dự án AI, RAG và nền tảng dữ liệu cloud-native tiêu biểu trong CV mới nhất.",
      tabs: ["Dự Án Chính", "Kinh Nghiệm", "Học Vấn"],
      repoLabel: "Xem Repository",
      liveLabel: "Mở Liên Kết",
      stackLabel: "Công nghệ",
      highlightsLabel: "Điểm nổi bật",
      projects: [
        {
          title: "LinguAI",
          role: "Tech Lead, Backend · Chương trình VinUni AI Talent · Tháng 4 - 5/2026",
          summary: "Huấn luyện viên nói tiếng Anh AI thời gian thực dành cho học sinh Việt Nam với đầu vào giọng nói, gia sư tác tử, đánh giá đa ngôn ngữ và nền tảng backend sẵn sàng cho sản phẩm.",
          highlights: [
            "Xây dựng pipeline giọng nói từ Groq STT qua logic gia sư LangGraph đến ElevenLabs TTS cho các buổi luyện tập trực tiếp.",
            "Tích hợp Azure đánh giá giọng nói đa ngôn ngữ cho phản hồi phát âm và độ trôi chảy tiếng Anh và tiếng Việt.",
            "Thiết kế dịch vụ FastAPI với PostgreSQL, Redis, MinIO, Elasticsearch, Docker và triển khai GKE."
          ],
          stack: "Groq STT, LangGraph, ElevenLabs, Azure Speech, FastAPI, PostgreSQL, Redis, MinIO, Elasticsearch, Docker, GKE",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI"
        },
        {
          title: "Nền tảng đánh giá LLM-as-Judge",
          role: "Lập trình viên Full-Stack · Dự án cá nhân · Tháng 3/2026",
          summary: "Nền tảng đầu cuối để đánh giá đầu ra LLM bằng các mô hình đánh giá, hỗ trợ rubric tùy chỉnh, đánh giá hàng loạt và bảng điều khiển kết quả.",
          highlights: [
            "Thiết kế pipeline đánh giá định tuyến phản hồi qua các LLM evaluator có thể cấu hình với chấm điểm có cấu trúc.",
            "Xây dựng dashboard React để tải lên bộ đánh giá, kích hoạt chạy và so sánh các chỉ số chất lượng mô hình.",
            "Triển khai trên GKE với FastAPI backend, PostgreSQL và Redis."
          ],
          stack: "LangChain, OpenAI API, FastAPI, PostgreSQL, Redis, React, GKE",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "RAG Coding Assistant",
          role: "Lập trình viên Full-Stack · Dự án cá nhân · Tháng 1/2026",
          summary: "Trợ lý lập trình sẵn sàng cho sản phẩm sử dụng retrieval-augmented generation với tìm kiếm lai trên mã nguồn và tài liệu.",
          highlights: [
            "Triển khai tìm kiếm lai kết hợp tìm kiếm vector dày (Qdrant) và tìm kiếm từ khóa thưa cho mã và tài liệu.",
            "Tích hợp Neo4j để duyệt đồ thị mã nguồn nhằm hiển thị các hàm liên quan và chuỗi phụ thuộc.",
            "Hỗ trợ debug đa ngôn ngữ với Ollama local models và OpenAI API fallback."
          ],
          stack: "LangChain, OpenAI API, Neo4j, Qdrant, Ollama, FastAPI, React",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "Binance Merchant Trading Flow",
          role: "Kỹ sư Dữ liệu · Dự án cá nhân · Tháng 11/2025",
          summary: "Nền tảng dữ liệu cloud-native cho Binance C2C merchant với pipeline streaming và batch đầu cuối trên GKE.",
          highlights: [
            "Xây dựng Spark ETL với PostgreSQL CDC qua Debezium và Kafka để stream sự kiện merchant thời gian thực.",
            "Điều phối Flink streaming trên GKE với Terraform, Helm và Jenkins CI/CD.",
            "Cung cấp khả năng quan sát với Prometheus, Grafana và ELK stack."
          ],
          stack: "Spark, PostgreSQL, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana, ELK",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        }
      ],
      experience: "AI Engineer tại NTQ Solution, Hà Nội, Việt Nam (01/2025 - 12/2025): xây dựng pipeline tiền xử lý OCR bằng OpenCV, tích hợp GPT-4o-mini để hậu xử lý có cấu trúc, phát triển chatbot Q&A dùng RAG cho giáo viên, fine-tune YOLOv8 để phát hiện nhiều bảng trong đề thi với độ tin cậy >98%, và tăng độ bền mô hình trên định dạng đề thi tiếng Việt và tiếng Nhật bằng Albumentations.",
      education: "Đại học Bách khoa Hà Nội - Cử nhân Toán Tin (2021 - 2025). Đã hoàn thành toàn bộ yêu cầu chương trình; đồ án tốt nghiệp được Hội đồng bảo vệ đánh giá mức cao nhất."
    }
  };

  const t = content[language] ?? content.en;
  const projects = t.projects;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    setActiveProjectIndex(0);
  }, [language]);

  const goToPreviousProject = () => {
    setActiveProjectIndex((currentIndex) => Math.max(0, currentIndex - 1));
  };

  const goToNextProject = () => {
    setActiveProjectIndex((currentIndex) => Math.min(projects.length - 1, currentIndex + 1));
  };

  const activeProject = projects[activeProjectIndex];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
                      <div className="featured-project-shell">
                        <button
                          type="button"
                          className="project-nav-button"
                          onClick={goToPreviousProject}
                          disabled={activeProjectIndex === 0}
                          aria-label={language === "vi" ? "Dự án trước" : "Previous project"}
                        >
                          <span aria-hidden="true">←</span>
                        </button>

                        <ProjectCard
                          {...activeProject}
                          repoLabel={t.repoLabel}
                          liveLabel={t.liveLabel}
                          stackLabel={t.stackLabel}
                          highlightsLabel={t.highlightsLabel}
                        />

                        <button
                          type="button"
                          className="project-nav-button"
                          onClick={goToNextProject}
                          disabled={activeProjectIndex === projects.length - 1}
                          aria-label={language === "vi" ? "Dự án tiếp theo" : "Next project"}
                        >
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>{t.experience}</p>
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
  )
}
