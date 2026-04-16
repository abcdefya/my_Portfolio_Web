import colorSharp from "../assets/img/color-sharp.png"

export const Skills = ({ language }) => {
  const content = {
    en: {
      title: "Core Skills",
      description: "A recruiter-friendly overview of my core capabilities, the tools I use, and the kinds of problems I can contribute to from day one.",
      groups: [
        {
          title: "AI / ML Engineering",
          summary: "Model training, experimentation, evaluation, and applied LLM workflows for practical products.",
          tags: ["PyTorch", "TensorFlow/Keras", "Scikit-learn", "LangChain", "LangGraph", "Hugging Face"]
        },
        {
          title: "Computer Vision & OCR",
          summary: "Image preprocessing, object detection, OCR pipelines, and document understanding for automation tasks.",
          tags: ["OpenCV", "YOLOv8", "Pytesseract", "MediaPipe", "Albumentations", "OCR"]
        },
        {
          title: "Data Engineering",
          summary: "Batch and streaming data pipelines, ETL design, CDC workflows, and production-ready analytics platforms.",
          tags: ["Airflow", "Spark", "Flink", "Kafka", "Debezium", "SQL"]
        },
        {
          title: "Cloud, DevOps & MLOps",
          summary: "Containerized deployment, cloud infrastructure, CI/CD, monitoring, and scalable ML system operations.",
          tags: ["Docker", "Kubernetes", "Terraform", "GCP", "AWS", "Jenkins"]
        }
      ]
    },
    vi: {
      title: "Kỹ Năng Chính",
      description: "Tổng quan theo hướng nhà tuyển dụng dễ đọc: tôi làm tốt mảng nào, dùng công nghệ gì, và có thể đóng góp vào dạng bài toán nào.",
      groups: [
        {
          title: "AI / ML Engineering",
          summary: "Huấn luyện mô hình, thực nghiệm, đánh giá và xây dựng workflow LLM cho các bài toán thực tế.",
          tags: ["PyTorch", "TensorFlow/Keras", "Scikit-learn", "LangChain", "LangGraph", "Hugging Face"]
        },
        {
          title: "Computer Vision & OCR",
          summary: "Tiền xử lý ảnh, object detection, pipeline OCR và hiểu tài liệu phục vụ tự động hóa.",
          tags: ["OpenCV", "YOLOv8", "Pytesseract", "MediaPipe", "Albumentations", "OCR"]
        },
        {
          title: "Data Engineering",
          summary: "Xây dựng pipeline batch và streaming, ETL, CDC và nền tảng dữ liệu sẵn sàng cho production.",
          tags: ["Airflow", "Spark", "Flink", "Kafka", "Debezium", "SQL"]
        },
        {
          title: "Cloud, DevOps & MLOps",
          summary: "Triển khai container, hạ tầng cloud, CI/CD, monitoring và vận hành hệ thống ML có thể mở rộng.",
          tags: ["Docker", "Kubernetes", "Terraform", "GCP", "AWS", "Jenkins"]
        }
      ]
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
                      <div className="skill-grid">
                        {t.groups.map((group) => (
                          <article className="skill-card" key={group.title}>
                            <h5>{group.title}</h5>
                            <p>{group.summary}</p>
                            <div className="skill-tags">
                              {group.tags.map((tag) => (
                                <span className="skill-tag" key={tag}>{tag}</span>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Decorative gradient shape" />
    </section>
  )
}
