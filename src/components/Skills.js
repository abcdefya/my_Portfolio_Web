import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = ({ language }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const content = {
    en: {
      title: "Core Skills",
      description: "A quick snapshot of the technical stack I use for AI/ML engineering, data systems, and production deployment.",
      items: ["AI/ML", "Data Engineering", "Computer Vision", "Cloud & MLOps"]
    },
    vi: {
      title: "Kỹ Năng Chính",
      description: "Tổng quan nhanh về bộ công cụ kỹ thuật mình sử dụng cho AI/ML, hệ thống dữ liệu và triển khai production.",
      items: ["AI/ML", "Data Engineering", "Computer Vision", "Cloud & MLOps"]
    }
  };

  const t = content[language];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <h2>{t.title}</h2>
                      <p>{t.description}</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <img src={meter1} alt="AI ML skill meter" />
                          <h5>{t.items[0]}</h5>
                            </div>
                            <div className="item">
                              <img src={meter2} alt="Data engineering skill meter" />
                          <h5>{t.items[1]}</h5>
                            </div>
                            <div className="item">
                              <img src={meter3} alt="Computer vision skill meter" />
                          <h5>{t.items[2]}</h5>
                            </div>
                            <div className="item">
                              <img src={meter1} alt="Cloud and MLOps skill meter" />
                          <h5>{t.items[3]}</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Decorative gradient shape" />
    </section>
  )
}
