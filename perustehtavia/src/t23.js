import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 23: Luo React-komponentti, joka näyttää listan elokuvien nimiä ja niiden arvosteluja käyttäen map-funktiota.
function ElokuvaLista() {
  const elokuvat = [
    { nimi: "THE FIRST SLAM DUNK", arvio: 4.5 },
    { nimi: "ARE YOU THERE GOD? IT'S ME, MARGARET.", arvio: 3.9 },
    { nimi: "PAST LIVES", arvio: 4.2 },
    { nimi: "BLACKBERRY", arvio: 4.8 },
    { nimi: "RYE LANE", arvio: 3.7 },
  ];

  const yksiloElokuvat = elokuvat.map((elokuva, index) => (
    <div key={index}>
      <p>{elokuva.nimi.toLowerCase()}: {elokuva.arvio} / 5</p>
    </div>
  ));

  return (
    <div>
      {yksiloElokuvat}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<ElokuvaLista />}</div>); 