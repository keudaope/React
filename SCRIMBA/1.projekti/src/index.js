import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Kuva from "./Kuva";
import Otsikko from "./Otsikko"
import Lista from "./Lista"
import Menu from "./Menu"
import Alatunniste from "./Alatunniste"

function Kaikki()
{
  return(
    <>
    <header>
      <Kuva />
      <Menu /> 
      <hr />   
    </header>
    <section>
      <Otsikko />
      <Lista />  
    </section>
      <footer>
        <Alatunniste /> 
      </footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Kaikki/>);

