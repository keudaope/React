import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Kayttaja
        nimi="Jyri Lindroos"
        osoite="Metsurinkatu 38, 11130 Riihimäki"
        puhelin="0445272653"
      ></Kayttaja>
    </div>
  );
}

function Kayttaja({ nimi, osoite, puhelin }) {
  return (
    <div className="user-profile">
      <h1>{nimi}</h1>
      <p>{osoite}</p>
      <p>{puhelin}</p>
    </div>
  );
}
export default App;
