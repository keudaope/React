import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 10: Luo React-luokka, joka renderöi sähköpostilomakkeen (form) HTML-sivulle.

function Sahkoposti() {
  return (
    <form action="">
      <label htmlFor="email">Sähköposti: <input type="email" /></label>
      <button type="submit">Lähetä</button>
    </form>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Sahkoposti />);


