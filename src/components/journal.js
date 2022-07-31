export default function journal(props) {
  return (
    <section className="journal">
      <img className="journal--image" src={props.imageUrl} alt={props.title} />
      <div className="journal-info">
        <span className="journal--info__top">
          <img
            className="journal--info__top__locationLogo"
            src="../../assets/logo2.png"
            alt="location"
          />
          <span className="journal--info__top__country">
            {`${props.location}`.toUpperCase()}
          </span>
          <a
            className="journal--info__top__mapLink"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            View on Google Maps
          </a>
        </span>
        <h2 className="journal--info__location">{props.title}</h2>
        <p className="journal--info__date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="journal--info__text">{props.description}</p>
      </div>
    </section>
  );
}
