import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 19: Luo React-komponentti, joka näyttää oheisen listan nimiä (["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"]) käyttäen map-funktiota.
function MapNimet() {
  const nimet = ["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"];
  const yksiloNimet = nimet.map((nimi, index) => <p key={index}>{nimi}</p>);

  return (
    <div>
      {yksiloNimet}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<MapNimet />}</div>);

