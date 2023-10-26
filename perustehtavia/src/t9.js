import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 9: Luo React-luokka, joka renderöi kolme painiketta (button) HTML-sivulle.

function Painikkeet() {
  return (
    <div>
      <button>Painike 1</button>
      <button>Painike 2</button>
      <button>Painike 3</button>
    </div>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Painikkeet />);


