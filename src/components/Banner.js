import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ language }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(140 - Math.random() * 40);
  const content = {
    en: {
      tagline: "Welcome to my portfolio",
      title: "Hi! I'm Do The Anh",
      rotate: ["AI/ML Engineer", "Computer Vision Engineer", "MLOps Enthusiast"],
      summary: "Entry-level AI/ML Engineer with internship experience at NTQ Solution. I build computer vision, OCR, and RAG systems with hands-on deployment using cloud and MLOps tools.",
      connect: "Let's Connect",
      projects: "View Projects",
      stats: ["Internship at NTQ Solution", "3+ featured projects", "Focused on AI/ML deployment"]
    },
    vi: {
      tagline: "Chào mừng đến portfolio của tôi",
      title: "Xin chào! Mình là Đỗ Thế Anh",
      rotate: ["Kỹ sư AI/ML", "Kỹ sư Computer Vision", "Người yêu thích MLOps"],
      summary: "Tôi là kỹ sư AI/ML mới vào nghề, đã thực tập tại NTQ Solution. Tôi phát triển các hệ thống computer vision, OCR và RAG, đồng thời triển khai với cloud và công cụ MLOps.",
      connect: "Liên hệ",
      projects: "Xem dự án",
      stats: ["Thực tập tại NTQ Solution", "3+ dự án nổi bật", "Tập trung AI/ML triển khai thực tế"]
    }
  };
  const t = content[language];
  const toRotate = t.rotate;
  const period = 1200;

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(320);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, isDeleting, loopNum, text, toRotate])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">{t.tagline}</span>
                <h1>{t.title} <span className="txt-rotate" dataPeriod="1000"><span className="wrap">{text}</span></span></h1>
                <p>{t.summary}</p>
                <div className="hero-actions">
                  <button type="button" className="hero-btn hero-btn-primary" onClick={() => scrollToSection("connect")}>{t.connect} <ArrowRightCircle size={25} /></button>
                  <button type="button" className="hero-btn hero-btn-secondary" onClick={() => scrollToSection("projects")}>{t.projects}</button>
                </div>
                <ul className="hero-stats">
                  {t.stats.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Portrait illustration"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
