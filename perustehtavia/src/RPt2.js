import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 2: Luo React-komponentti Tuote, joka ottaa nimi ja hinta -propsit ja näyttää tuotteen nimen ja hinnan.

const Tuote = (props) => {
  return (
    <div>
      <p>{props.nimi} maksaa {props.hinta} € / kg</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Tuotteet:</h1>
      <Tuote nimi="Appelsiini" hinta="5" />
      <Tuote nimi="Banaani" hinta="3" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 