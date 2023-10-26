import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 1:   Luo React-komponentti Tervehdys, joka ottaa name-propsin ja näyttää tervehdys käyttäjälle.

const Tervehdys = (props) => {
  return (
    <div>
      <p>Hei {props.name}!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Tervehdykset</h1>
      <Tervehdys name="Arto" />
      <Tervehdys name="Pekka" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 