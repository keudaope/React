import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 1: Luo React-luokka, joka renderöi yksinkertaisen div-elementin ja kirjoittaa sinne "Tämä on yksinkertainen div-elementti".
function DivElementti(){
  return (
    <div>Tämä on yksinkertainen div-elementti</div>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<DivElementti />);
