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
      projects: [
        {
          title: "AI English Speaking Coach",
          description: "Real-time AI tutoring coach with Groq STT, LangGraph, ElevenLabs TTS, Azure speech assessment, FastAPI, PostgreSQL, Redis, MinIO, Elasticsearch, Docker, and GKE.",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI"
        },
        {
          title: "RAG Coding Assistant Chatbot",
          description: "Production-ready coding assistant using LangChain, OpenAI API, Neo4j, Qdrant, Ollama, hybrid retrieval, and multilingual debugging support.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "Binance Merchant Trading Flow",
          description: "Cloud-native Binance C2C merchant data platform with Spark ETL, PostgreSQL CDC, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana, and ELK.",
          imgUrl: projImg3,
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
      projects: [
        {
          title: "Huấn luyện viên nói tiếng Anh AI",
          description: "AI tutor thời gian thực với Groq STT, LangGraph, ElevenLabs TTS, Azure speech assessment, FastAPI, PostgreSQL, Redis, MinIO, Elasticsearch, Docker và GKE.",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI"
        },
        {
          title: "RAG Coding Assistant Chatbot",
          description: "Trợ lý lập trình dùng LangChain, OpenAI API, Neo4j, Qdrant, Ollama, hybrid retrieval và hỗ trợ debug đa ngôn ngữ.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "Binance Merchant Trading Flow",
          description: "Nền tảng dữ liệu cloud-native cho Binance C2C merchant với Spark ETL, PostgreSQL CDC, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana và ELK.",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        }
      ],
      experience: "AI Engineer tại NTQ Solution, Hà Nội, Việt Nam (01/2025 - 12/2025): xây dựng pipeline tiền xử lý OCR bằng OpenCV, tích hợp GPT-4o-mini để hậu xử lý có cấu trúc, phát triển chatbot Q&A dùng RAG cho giáo viên, fine-tune YOLOv8 để phát hiện nhiều bảng trong đề thi với độ tin cậy >98%, và tăng độ bền mô hình trên định dạng đề thi tiếng Việt và tiếng Nhật bằng Albumentations.",
      education: "Đại học Bách khoa Hà Nội - Cử nhân Toán Tin (2021 - 2025). Đã hoàn thành toàn bộ yêu cầu chương trình; đồ án tốt nghiệp được Hội đồng bảo vệ đánh giá mức cao nhất."
    }
  };

  const t = content[language];
  const projects = t.projects;

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
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                repoLabel={t.repoLabel}
                                liveLabel={t.liveLabel}
                                />
                            )
                          })
                        }
                      </Row>
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
      <img className="background-image-right" src={colorSharp2} alt="Decorative background shape" />
    </section>
  )
}
