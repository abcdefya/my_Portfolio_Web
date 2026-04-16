import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = ({ language, setLanguage }) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const content = {
    en: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      connect: "Let's Connect"
    },
    vi: {
      home: "Trang chủ",
      skills: "Kỹ năng",
      projects: "Dự án",
      connect: "Liên hệ"
    }
  };

  const t = content[language];

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t.home}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t.skills}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t.projects}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="lang-switch" aria-label="Language switcher">
                <button
                  type="button"
                  className={language === "vi" ? "lang-btn active" : "lang-btn"}
                  onClick={() => setLanguage("vi")}
                >
                  VI
                </button>
                <button
                  type="button"
                  className={language === "en" ? "lang-btn active" : "lang-btn"}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </button>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/do-the-anh-090737286" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/abcdefya" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" /></a>
                <a href="mailto:anh.dothe47@gmail.com"><img src={navIcon3} alt="Email" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{t.connect}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
