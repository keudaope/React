import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 20: Luo React-komponentti, joka tulostaa listan tuotteita ja niiden hinnat käyttäen map-funktiota.
function TuoteLista() {
  const tuotteet = [
    { nimi: "Tuote 1", hinta: 10 },
    { nimi: "Tuote 2", hinta: 20 },
    { nimi: "Tuote 3", hinta: 30 },
    { nimi: "Tuote 4", hinta: 40 },
    { nimi: "Tuote 5", hinta: 50 },
  ];

  const yksiloTuotteet = tuotteet.map((tuote, index) => (
    <div key={index}>
      <p>{tuote.nimi}: {tuote.hinta} €</p>
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