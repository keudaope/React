import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 7: Luo React-luokka, joka renderöi taulukon (table) HTML-sivulle ja taulukon soluille sisältö
function Taulukko() {
  return (
    <table border="1px">
      <tr>
        <th>Otsikko 1</th>
        <th>Otsikko 2</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </table>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Taulukko />);


