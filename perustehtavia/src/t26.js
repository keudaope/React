import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 26:  Luo React-komponentti, joka tulostaa listan aineiden nimiä ja niiden määriä (resepti) käyttäen map-funktiota.

function TuoteLista() {
  const tuotteet = [
    { nimi: "Maito", maara: 2 },
    { nimi: "Jauhot", maara: 1 },
    { nimi: "Sokeri", maara: 1 },
    { nimi: "Kananmuna", maara: 3 },
    { nimi: "Suola", maara: 0.5 },
  ];

  const yksiloTuotteet = tuotteet.map((tuote, index) => (
    <div key={index}>
      <p><b>{tuote.nimi}</b>, Määrä: {tuote.maara} kpl</p>
    </div>
  ));

  return (
    <div>
      {yksiloTuotteet}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<TuoteLista />}</div>); 