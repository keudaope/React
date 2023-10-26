import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 13: Luo React-luokka, joka renderöi vuodenajan nimen riippuen kuukaudesta (käytä Date-oliota).

function HaeVuodenAika() {
  const date = new Date();
  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return "Kevät";
  } else if (month >= 5 && month <= 7) {
    return "Kesä";
  } else if (month >= 8 && month <= 10) {
    return "Syksy";
  } else {
    return "Talvi";
  }
}
const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>Vuoden aika: {<HaeVuodenAika />}</div>);


