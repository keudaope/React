import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 3: Luo React-komponentti KokoNimi, joka ottaa etunimi ja sukunimi -propsit ja näyttää henkilön koko nimen.

const KokoNimi = (props) => {
  return (
    <div>
      <p>{props.etunimi} {props.sukunimi}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Opettajat:</h1>
      <KokoNimi etunimi="Jyri" sukunimi="Lindroos" />
      <KokoNimi etunimi="Eeva" sukunimi="Tervala" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 