import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectUrl,
  liveUrl,
  repoLabel,
  liveLabel,
}) => {
  const actualLiveUrl = liveUrl || projectUrl;

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx proj-card">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="proj-actions">
          <a className="proj-btn" href={projectUrl} target="_blank" rel="noreferrer" aria-label={`Open repository for ${title}`}>
            {repoLabel}
          </a>
          <a className="proj-btn proj-btn-secondary" href={actualLiveUrl} target="_blank" rel="noreferrer" aria-label={`Open live demo for ${title}`}>
            {liveLabel}
          </a>
        </div>
      </div>
    </Col>
  )
}
