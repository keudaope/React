import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 18: Luo React-komponentti, joka tulostaa listan lukuja 1-5 käyttäen map-funktiota.
function MapNumerot() {
  const numbers = [1, 2, 3, 4, 5];
  const numberItems = numbers.map((number) => <li key={number}>{number}</li>);

  return (
    <ul>
      {numberItems}
    </ul>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<MapNumerot />}</div>);

