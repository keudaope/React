import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 4: Luo React-luokka, joka renderöi  3 lista-elementtiä (ul ja li)  ja li-elementeille tekstit HTML-sivulle.
function Lista() {
  return (
    <div>
      <ul>
        <li>Ensimmäinen listaelementti</li>
        <li>Toinen listaelementti</li>
        <li>Kolmas listaelementti</li>
      </ul>
    </div>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Lista />);

