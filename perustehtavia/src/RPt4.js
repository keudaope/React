import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 4: Luo React-komponentti Kommentti, joka ottaa poliitikon ja teksti -propsit ja näyttää kommentin tekijän ja tekstin.

const Kommentti = (props) => {
  return (
    <div>
      <p>{props.poliitikko}: <i>{props.teksti}</i></p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Kommentit:</h1>
      <Kommentti poliitikko="Veikko Vennamo" teksti="Kyllä kansa tietää" />
      <Kommentti poliitikko="Mauno Koivisto" teksti="Tarttis tehdä jotakin" />
      <Kommentti poliitikko="Paavo Lipponen" teksti="Nahkurin orsilla tavataan" />
      <Kommentti poliitikko="Timo Soini" teksti="Jytky" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 