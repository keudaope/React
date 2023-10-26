import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 3: Luo React-luokka, joka renderöi kappaleen (p) = Tämä on kappaleen teksti HTML-sivulle.
function Kappale() {
  return (
    <p>Tämä on kappaleen teksti</p>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Kappale />);


