import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = ({ language }) => {
  const content = {
    en: "Copyright 2026. All Rights Reserved",
    vi: "Bản quyền 2026. Đã đăng ký bản quyền"
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/do-the-anh-090737286" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/abcdefya" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              <a href="mailto:anh.dothe47@gmail.com"><img src={navIcon3} alt="Email" /></a>
            </div>
            <p>{content[language]}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
