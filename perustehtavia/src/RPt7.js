import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 7: Luo React-komponentti Tehtava, joka ottaa kuvaus ja onValmis -propsit ja näyttää tehtävän kuvauksen ja sen tilan.

const Tehtava = (props) => {
  return (
    <div>
      <p>Kuvaus: {props.kuvaus} Tila: {props.onValmis ? 'Valmis' : 'Kesken'}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Kirjallisia tuotoksia:</h1>
      <Tehtava kuvaus="Käy kaupassa" onValmis={false} />
      <Tehtava kuvaus="Valmista lounas" onValmis={false} />
      <Tehtava kuvaus="Tee töitä" onValmis={false} />
      <Tehtava kuvaus="Vie koirat ulos" onValmis={true} />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 