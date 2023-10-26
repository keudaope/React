import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 10: Luo React-komponentti Saa, joka ottaa sijainti, lampotila ja olosuhteet -propsit ja näyttää sään tiedot.

const Saa = (props) => {
  return (
    <div>
      <p>{props.sijainti}, {props.lampotila} astetta, {props.olosuhteet}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Säätilat tänään</h1>
      <Saa sijainti="Kanta-Häme" lampotila="3" olosuhteet="Sateen mahdollisuus 90%" />
      <Saa sijainti="Turku" lampotila="3" olosuhteet="Sateen mahdollisuus 70%" />
      <Saa sijainti="Jyväskylä" lampotila="2" olosuhteet="Sateen mahdollisuus 10%" />
      <Saa sijainti="Rovaniemi" lampotila="-2" olosuhteet="Sateen mahdollisuus 0%" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 