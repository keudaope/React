import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 14: Luo React-luokka, joka renderöi satunnaisen numeron 1-100 väliltä.

function HaeSatunnaisluku() {
  return Math.floor(Math.random() * 100) + 1;
}
const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>Satunnaisluku: {<HaeSatunnaisluku />}</div>);


