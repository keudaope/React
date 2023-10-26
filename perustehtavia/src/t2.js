import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 2: Luo React-luokka, joka renderöi otsikon (h1) = Otsikko ja alaotsikon (h2) = Alaotsikko HTML-sivulle.
function Otsikot() {
  return (
    <div>
      <h1>Otsikko</h1>
      <h2>Alaotsikko</h2>
    </div>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Otsikot />);
