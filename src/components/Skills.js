import colorSharp from "../assets/img/color-sharp.png"

export const Skills = ({ language }) => {
  const content = {
    en: {
      title: "Core Skills",
      description: "A recruiter-friendly overview of the AI, backend, data, and MLOps capabilities I use to build production-ready intelligent systems.",
      groups: [
        {
          title: "LLM & Agentic AI",
          summary: "Conversational AI, RAG, prompt systems, embeddings, structured outputs, and agent workflows for real user-facing products.",
          tags: ["OpenAI API", "LangChain", "LangGraph", "Langfuse", "Langsmith", "RAG", "Prompt Engineering", "Embeddings", "Qdrant", "Neo4j", "Hugging Face", "Ollama"]
        },
        {
          title: "DL/ML, Vision & OCR",
          summary: "Model training, evaluation, document understanding, OCR preprocessing, and detection pipelines for multilingual exam layouts.",
          tags: ["PyTorch", "Scikit-learn", "OpenCV", "YOLO", "OCR"]
        },
        {
          title: "Backend & Data Engineering",
          summary: "API services, relational data models, batch and streaming pipelines, CDC workflows, and analytics-ready data platforms.",
          tags: ["Python", "C++", "JavaScript", "FastAPI", "Flask", "PostgreSQL", "Docker", "Apache Spark", "Apache Kafka", "Airflow", "Debezium CDC"]
        },
        {
          title: "Cloud & MLOps",
          summary: "Containerized deployments, Kubernetes operations, CI/CD, observability, and cloud infrastructure for AI systems.",
          tags: ["GCP", "AWS", "Kubernetes", "Terraform", "Jenkins", "Rancher", "Prometheus", "Grafana", "GitLab", "ELK", "MLflow"]
        }
      ]
    },
    vi: {
      title: "Kỹ Năng Chính",
      description: "Tổng quan dành cho nhà tuyển dụng về năng lực AI, backend, data và MLOps mà mình dùng để xây dựng hệ thống thông minh sẵn sàng cho production.",
      groups: [
        {
          title: "LLM & AI tác tử",
          summary: "AI hội thoại, RAG, hệ thống prompt, embedding, output có cấu trúc và workflow agent cho sản phẩm phục vụ người dùng thật.",
          tags: ["OpenAI API", "LangChain", "LangGraph", "Langfuse", "Langsmith", "RAG", "Prompt Engineering", "Embeddings", "Qdrant", "Neo4j", "Hugging Face", "Ollama"]
        },
        {
          title: "DL/ML, Vision & OCR",
          summary: "Huấn luyện và đánh giá mô hình, hiểu tài liệu, tiền xử lý OCR và pipeline detection cho layout đề thi đa ngôn ngữ.",
          tags: ["PyTorch", "Scikit-learn", "OpenCV", "YOLO", "OCR"]
        },
        {
          title: "Backend & Data Engineering",
          summary: "Dịch vụ API, mô hình dữ liệu quan hệ, pipeline batch và streaming, CDC workflow và nền tảng dữ liệu phục vụ analytics.",
          tags: ["Python", "C++", "JavaScript", "FastAPI", "Flask", "PostgreSQL", "Docker", "Apache Spark", "Apache Kafka", "Airflow", "Debezium CDC"]
        },
        {
          title: "Cloud & MLOps",
          summary: "Triển khai container, vận hành Kubernetes, CI/CD, observability và hạ tầng cloud cho hệ thống AI.",
          tags: ["GCP", "AWS", "Kubernetes", "Terraform", "Jenkins", "Rancher", "Prometheus", "Grafana", "GitLab", "ELK", "MLflow"]
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
