import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, SignIntersectionSide } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react"
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner() {

    const toRotate = [ "Web Developer", "Data Scientist", "Cyber Security Engineer" ];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 50);
    const [index, setIndex] = useState(1);
    const period = 500;
    
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(200);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    


      return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm The Anh, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Data Scientist", "Cyber Security Engineer" ]'><span className="wrap">{text}</span></span></h1>
                      <p>Aspiring to become a Data Scientist and Cybersecurity Engineer, I aim to leverage data analysis, machine learning,
                         and cybersecurity skills to drive insights and secure digital assets. With a passion for uncovering data patterns and enhancing cybersecurity through machine learning,
                         I plan to obtain an IELTS certificate, learn Japanese and Korean, and pursue a master's degree abroad.</p>
                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}