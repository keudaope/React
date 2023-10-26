import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 6: Luo React-komponentti Kirja, joka ottaa otsikko, kirjailija ja tyylilaji -propsit ja näyttää kirjan tiedot.

const Kirja = (props) => {
  return (
    <div>
      <h3>{props.kirjailija}: {props.otsikko}, {props.tyylilaji}</h3>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Kirjallisia tuotoksia:</h1>
      <Kirja kirjailija="J. R. R. Tolkien" otsikko="Taru sormusten herrasta" tyylilaji="Fantasiakirjallisuus" />
      <Kirja kirjailija="Reijo Mäki" otsikko="Nuoruustango" tyylilaji="Dekkari" />
      <Kirja kirjailija="Isaac Asimov" otsikko="Robotit" tyylilaji="Tieteiskirjallisuus" />
      <Kirja kirjailija="Väinö Linna" otsikko="Tuntematon sotilas" tyylilaji="Sotakirjallisuus" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 