export default function Kortti(props) {
  return (
    <div className="kortti">
      <div className="kortti--kuvalaatikko">
        <img className="kortti--kuva" src={props.imageUrl} alt={props.title} />
      </div>

      <div className="kortti--infot">
        <h2 className="kortti--sijainti">{props.location}</h2>
        <a className="kortti--sijainti-url" href={props.googleMapsUrl}>
          View on Google Maps
        </a>

        <h3 className="kortti--otsikko">{props.title}</h3>
        <p className="kortti--paivays">
          {props.startDate} - {props.endDate}
        </p>
        <p className="kortti--kuvaus">{props.description}</p>
      </div>
    </div>
  );
}
