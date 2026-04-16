import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = ({ language }) => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(language === "vi" ? "Gửi" : "Send");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({});

  const content = {
    en: {
      title: "Get In Touch",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully",
      failed: "Something went wrong, please try again later."
    },
    vi: {
      title: "Liên Hệ",
      firstName: "Tên",
      lastName: "Họ",
      email: "Email",
      phone: "Số điện thoại",
      message: "Nội dung",
      send: "Gửi",
      sending: "Đang gửi...",
      success: "Gửi tin nhắn thành công",
      failed: "Có lỗi xảy ra, vui lòng thử lại sau."
    }
  };

  const t = content[language];

  useEffect(() => {
    setButtonText(t.send);
  }, [t.send]);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText(t.sending);
    const defaultApiBaseUrl = process.env.NODE_ENV === "development" ? "http://localhost:5000" : "/api";
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || defaultApiBaseUrl;
    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: t.success });
      } else {
        setStatus({ success: false, message: t.failed });
      }
    } catch (error) {
      setStatus({ success: false, message: t.failed });
    } finally {
      setIsSubmitting(false);
      setButtonText(t.send);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{t.title}</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder={t.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} aria-label={t.firstName} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder={t.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} aria-label={t.lastName} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder={t.email} onChange={(e) => onFormUpdate('email', e.target.value)} aria-label={t.email} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder={t.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} aria-label={t.phone} required />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder={t.message} onChange={(e) => onFormUpdate('message', e.target.value)} aria-label={t.message} required></textarea>
                      <button type="submit" disabled={isSubmitting}><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
