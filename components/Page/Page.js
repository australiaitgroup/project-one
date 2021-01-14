const Page = ({
  active,
  title,
  header,
  children,
}) => {
  // TODO:
  let className = 'page';

  if (active) {
    className += ' page--active';
  }

  return (
    <div className={className}>
      <div className="page__header">
        {/* {header ? header : (<h2 className="page__title">{title}</h2>)} */}
        {header}
      </div>
      <div className="page__content">
        {children}
      </div>
    </div>
  );
}

export default Page;
