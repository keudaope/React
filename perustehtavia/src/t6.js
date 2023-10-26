import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

//Tehtävä 6: Luo React - luokka, joka renderöi linkin(a)(Keudan sivuille) HTML - sivulle.
function Linkki() {
  return (
    <a href="https://www.keuda.fi">Keuda</a>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Linkki />);


