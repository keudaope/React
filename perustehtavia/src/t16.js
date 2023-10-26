import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 16: Luo listaelementtejä oheisesta taulukosta const items = ["Yksi", "Kaksi", "Kolme"]; käyttämällä map-toimintoa
function TaulukkoListaksi() {
  const items = ["Yksi", "Kaksi", "Kolme"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<TaulukkoListaksi />}</div>);



