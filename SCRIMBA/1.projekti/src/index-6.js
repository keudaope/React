import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

function Otsikko() {
  return <h1>Tietoa Reactista</h1>;
}

const sivu = (
  <div>
    <img src="./logo192.png" width="40px" className="logo" alt="react-logo" />
    <h1>Tietoa Reactista</h1>
    <ul className="tietoa">
      <li>Julkaistiin ensimmäisen kerran 2013</li>
      <li>Alunperin Jordan Walken luomus</li>
      <li>Reactilla on yli 100K tähteä Gitissä</li>
      <li>On Facebookin ylläpitämä</li>
      <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
    </ul>
    <footer>Copyright © Jyri Lindroos 2024</footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(sivu);
