import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 24: Luo React-komponentti, joka tulostaa listan värikoodauksia käyttäen map-funktiota
function VariLista() {
  const varit = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];

  const yksiloVarit = varit.map((vari, index) => (
    <div key={index} style={{ backgroundColor: vari, width: '50px', height: '50px' }}></div>
  ));

  return (
    <div>
      {yksiloVarit}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<VariLista />}</div>); 