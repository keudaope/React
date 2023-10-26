import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 8: Luo React-komponentti Elain, joka ottaa nimi, laji ja ika -propsit ja näyttää eläimen tiedot.

const Elain = (props) => {
  return (
    <div>
      <p>{props.nimi}, {props.laji}, {props.ika} vuotta vanha</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Eläimiä</h1>
      <Elain nimi="Nuppu" laji="Labradorinnoutaja" ika="15" />
      <Elain nimi="Pörri" laji="Maatiaiskissa" ika="8" />
      <Elain nimi="NöfNöf" laji="Minipossu" ika="5" />
      <Elain nimi="Amelia" laji="Kana" ika="2" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 