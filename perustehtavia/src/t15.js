import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
// Tehtävä 15: Luo navigointipalkki (home, about, contact), johon käytät 4 funktiota, eli edellisiä ja navigointi-funktiota
function Home() {
  return (
    <div>Tervetuloa kotisivulleni</div>
  )
}
function About() {
  return (
    <div>Tietoa meistä</div>
  )
}
function Contact() {
  return (
    <div>Ota yhteyttä</div>
  )
}
function Navigointi() {
  return (
    <nav>
      <ul>
        <li><a href="/"><Home /></a></li>
        <li><a href="/about"><About /></a></li>
        <li><a href="/contact"><Contact /></a></li>
      </ul>



    </nav>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<Navigointi />}</div>);


