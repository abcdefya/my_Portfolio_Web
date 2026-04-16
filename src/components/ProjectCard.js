import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  const cardContent = (
    <>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </>
  );

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {
          projectUrl ? (
            <a href={projectUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}>
              {cardContent}
            </a>
          ) : cardContent
        }
      </div>
    </Col>
  )
}
