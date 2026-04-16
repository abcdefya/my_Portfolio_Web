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
      description: "Selected work from graduation and research-driven software projects.",
      tabs: ["Main Projects", "Experience", "Education"],
      repoLabel: "View Repository",
      liveLabel: "Live Demo",
      projects: [
        {
          title: "Binance Merchant Trading Flow",
          description: "Cloud-native data platform with Spark, Flink, Kafka, GKE, and Terraform.",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        },
        {
          title: "Chest Cancer Classification",
          description: "VGG16 transfer learning pipeline deployed with Flask, Docker, and AWS EC2.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya/Chest-Cancer-Classification",
          liveUrl: "https://github.com/abcdefya/Chest-Cancer-Classification"
        },
        {
          title: "RAG Coding Assistant Chatbot",
          description: "LangChain + OpenAI + Neo4j + Qdrant assistant for multi-language coding support.",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        }
      ],
      experience: "AI Engineer Intern at NTQ Solution (Sep 2025 - Dec 2025): focused on OCR and exam-sheet automation with OpenCV and YOLOv8, achieving >98% confidence on key table detection tasks.",
      education: "Hanoi University of Science and Technology - B.Sc. in Mathematics and Informatics (Expected 2025)."
    },
    vi: {
      title: "Dự Án Nổi Bật",
      description: "Một số dự án tiêu biểu từ đồ án tốt nghiệp và các bài toán phần mềm hướng nghiên cứu.",
      tabs: ["Dự Án Chính", "Kinh Nghiệm", "Học Vấn"],
      repoLabel: "Xem Repository",
      liveLabel: "Xem Sản Phẩm",
      projects: [
        {
          title: "Binance Merchant Trading Flow",
          description: "Nền tảng dữ liệu cloud-native sử dụng Spark, Flink, Kafka, GKE và Terraform.",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        },
        {
          title: "Chest Cancer Classification",
          description: "Mô hình VGG16 transfer learning triển khai với Flask, Docker và AWS EC2.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya/Chest-Cancer-Classification",
          liveUrl: "https://github.com/abcdefya/Chest-Cancer-Classification"
        },
        {
          title: "RAG Coding Assistant Chatbot",
          description: "Trợ lý mã nguồn đa ngôn ngữ sử dụng LangChain + OpenAI + Neo4j + Qdrant.",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        }
      ],
      experience: "Thực tập sinh AI Engineer tại NTQ Solution (09/2025 - 12/2025): tập trung vào OCR và tự động chấm bài bằng OpenCV và YOLOv8, đạt độ tin cậy >98% cho các bảng câu hỏi quan trọng.",
      education: "Đại học Bách Khoa Hà Nội - Cử nhân Toán Tin (dự kiến 2025)."
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
