export const ProjectCard = ({
  title,
  role,
  highlights = [],
  stack,
  imgUrl,
  projectUrl,
  liveUrl,
  repoLabel,
  liveLabel,
  stackLabel,
  highlightsLabel,
}) => {
  const actualLiveUrl = liveUrl || projectUrl;

  return (
    <article className="proj-card-grid">
      <div className="proj-card-grid__img">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="proj-card-grid__body">
        <p className="proj-card-grid__role">{role}</p>
        <h3 className="proj-card-grid__title">{title}</h3>
        <div className="proj-card-grid__highlights">
          <h4>{highlightsLabel}</h4>
          <ul>
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <p className="proj-card-grid__stack">
          <span>{stackLabel}:</span> {stack}
        </p>
        <div className="proj-actions">
          <a
            className="proj-btn"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${repoLabel} for ${title}`}
          >
            {repoLabel}
          </a>
          <a
            className="proj-btn proj-btn-secondary"
            href={actualLiveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${liveLabel} for ${title}`}
          >
            {liveLabel}
          </a>
        </div>
      </div>
    </article>
  );
};
