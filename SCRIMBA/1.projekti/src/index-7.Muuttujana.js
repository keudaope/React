import ReactDOM from "react-dom/client";

function Otsikko() {
  return <h1>Tietoa Reactista</h1>;
}

const sivu = (
  <div>
    <img src="./logo192.png" width="40px" className="logo" alt="react-logo" />
    <ul className="nav">
      <li>Koti</li>
      <li>Meistä</li>
      <li>Ota yhteyttä</li>
    </ul>
    <h1>Tietoa Reactista</h1>
    <ul className="tietoa">
      <li>Julkaistiin ensimmäisen kerran 2013</li>
      <li>Alunperin Jordan Walken luomus</li>
      <li>Reactilla on yli 100K tähteä Gitissä</li>
      <li>On Facebookin ylläpitämä</li>
      <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
    </ul>
    <small className="footer">
      &copy; Jyri Lindroos 2024, kaikki oikeudet pidätetään
    </small>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(sivu);
