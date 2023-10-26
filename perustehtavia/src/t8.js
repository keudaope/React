import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 8: Luo React-luokka, joka PIIRTÄÄ sinisen ympyrän (svg) HTML-sivulle.

function Ympyra() {
  return (
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Ympyra />);


