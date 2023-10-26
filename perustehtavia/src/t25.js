import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 25: Luo React-komponentti, joka tulostaa listan värikoodauksia käyttäen map-funktiota
function KaupunkiLista() {
  const kaupungit = [
    { nimi: "Helsinki", vakimaara: 655281 },
    { nimi: "Tukholma", vakimaara: 975904 },
    { nimi: "Oslo", vakimaara: 634293 },
    { nimi: "Kööpenhamina", vakimaara: 625978 },
    { nimi: "Reykjavik", vakimaara: 131136 },
  ];

  const yksiloKaupungit = kaupungit.map((kaupunki, index) => (
    <div key={index}>
      <p>{kaupunki.nimi}, asukasluku: {kaupunki.vakimaara}</p>
      <p></p>
    </div>
  ));

  return (
    <div>
      {yksiloKaupungit}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<KaupunkiLista />}</div>); 