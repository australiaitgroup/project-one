const Timeline = ({
  items,
}) => (
  <div className="timelines">
    {items.map(({
      key,
      title,
      year,
      company,
      description,
    }) => (
      <div className="timeline" key={key}>
        <h4 className="experience__title">{title}</h4>
        <div className="experience__meta">
          <span className="experience__year">{year}</span>
          &nbsp;
          <i className="experience__divider"></i>
          &nbsp;
          <span className="experience__company">{company}</span>
        </div>
        <div className="experience__description">
          {description}
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;
