export const ProjectCard = ({
  title,
  role,
  summary,
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
    <article className="featured-project-panel">
      <div className="featured-project-media">
        <img src={imgUrl} alt={title} />
      </div>

      <div className="featured-project-copy">
        <p className="featured-project-role">{role}</p>
        <h3>{title}</h3>
        <p className="featured-project-summary">{summary}</p>

        <div className="featured-project-meta">
          <h4>{highlightsLabel}</h4>
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <p className="featured-project-stack">
          <span>{stackLabel}:</span> {stack}
        </p>

        <div className="proj-actions">
          <a className="proj-btn" href={projectUrl} target="_blank" rel="noreferrer" aria-label={`${repoLabel} for ${title}`}>
            {repoLabel}
          </a>
          <a className="proj-btn proj-btn-secondary" href={actualLiveUrl} target="_blank" rel="noreferrer" aria-label={`${liveLabel} for ${title}`}>
            {liveLabel}
          </a>
        </div>
      </div>
    </article>
  );
};
