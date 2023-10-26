import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 17: Luo dynaaminen elementti ja tulosta se HTML-sivulle
function DynaaminenElementti() {
  const dynamicText = "Tämä on dynaaminen teksti";
  return <div>{dynamicText}</div>;
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<DynaaminenElementti />}</div>);

