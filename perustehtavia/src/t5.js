import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 5: Luo React-luokka, joka renderöi kuvan (img) HTML-sivulle.
function Kuva() {
  return (
    <img src="https://m.media-amazon.com/images/I/91H1uVS7QxL._SY466_.jpg" alt="kuva" />
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Kuva />);


