import ReactDOM from "react-dom/client";
import Kuva from "./Kuva";

function Menu() {
  return (
    <div>
      <ul className="nav">
        <li>Koti</li>
        <li>Meistä</li>
        <li>Ota yhteyttä</li>
      </ul>
    </div>
  );
}
function Otsikko() {
  return <h1>Tietoa Reactista</h1>;
}
function Lista() {
  return (
    <div>
      <ul className="tietoa">
        <li>Julkaistiin ensimmäisen kerran 2013</li>
        <li>Alunperin Jordan Walken luomus</li>
        <li>Reactilla on yli 100K tähteä Gitissä</li>
        <li>On Facebookin ylläpitämä</li>
        <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
      </ul>
    </div>
  );
}

function Alatunniste() {
  return (
    <div>
      <small className="footer">
        &copy; Jyri Lindroos 2024, kaikki oikeudet pidätetään
      </small>
    </div>
  );
}

function Kaikki() {
  return (
    <>
      <Kuva />
      <Menu />
      <Otsikko />
      <Lista />
      <Alatunniste />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Kaikki />
  </div>
);
