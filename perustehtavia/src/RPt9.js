import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 9: Luo React-komponentti Elokuva, joka ottaa nimi, ohjaaja ja vuosi -propsit ja näyttää elokuvan tiedot.

const Elokuva = (props) => {
  return (
    <div>
      <p>{props.nimi}, {props.ohjaaja}, {props.vuosi}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>John Wick -elokuvat</h1>
      <Elokuva nimi="John Wick" ohjaaja="Chad Stahelski ja David Leitch" vuosi="2014" />
      <Elokuva nimi="John Wick: Chapter 2" ohjaaja="Chad Stahelski" vuosi="2017" />
      <Elokuva nimi="John Wick: Chapter 3" ohjaaja="Chad Stahelski" vuosi="2019" />
      <Elokuva nimi="John Wick: Chapter 4" ohjaaja="Chad Stahelski" vuosi="2023" />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 