import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 21: Luo React-komponentti, joka näyttää listan tehtäviä ja niiden tilaa (valmis/kesken) käyttäen map-funktiota.
function TehtavaLista() {
  const tehtavat = [
    { nimi: "Tehtävä 1", valmis: true },
    { nimi: "Tehtävä 2", valmis: false },
    { nimi: "Tehtävä 3", valmis: true },
    { nimi: "Tehtävä 4", valmis: false },
    { nimi: "Tehtävä 5", valmis: true },
  ];

  const yksiloTehtavat = tehtavat.map((tehtava, index) => (
    <div key={index}>
      <p>{tehtava.nimi}: {tehtava.valmis ? "Valmis" : "Kesken"}</p>
    </div>
  ));

  return (
    <div>
      {yksiloTehtavat}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<TehtavaLista />}</div>); 