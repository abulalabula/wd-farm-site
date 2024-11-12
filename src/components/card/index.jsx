import './style.css';

function Card({
    className,
    title,
    pic,
    alt,
    text,
    linkText,
    setPage,
    pageName,
  }) {
    return (
      <div className={`${className}`}>
        <h3 className={`${className}__title`}>{title}</h3>
        <img className={`${className}__pic`} alt={alt} src={pic} />
        <p className={`${className}__text`}>{text}</p>
        <button
          className={`${className}__link`}
          onClick={() => setPage(`${pageName}`)}
          aria-label={`More info${title}`}
        >
          {linkText}
        </button>
      </div>
    );
  }

  export default Card;