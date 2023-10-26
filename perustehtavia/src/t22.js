import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 22: Luo React-komponentti, joka tulostaa listan kirjoja (5 kpl) ja niiden kirjoittajat käyttäen map-funktiota. Hyödynnä vaikka Amazonin myydyimmät kirjat -listaa.
function KirjaLista() {
  const kirjat = [
    { nimi: "The Woman in Me", kirjailija: "Britney Spears" },
    { nimi: "The Exchange: After The Firm (The Firm Series)", kirjailija: "John Grisham" },
    { nimi: "Prequel: An American Fight Against Fascism", kirjailija: "Rachel Maddow" },
    { nimi: "Iron Flame (The Empyrean, 2)", kirjailija: "Rebecca Yarros" },
    { nimi: "Fourth Wing (Special Edition) (The Empyrean, 1)", kirjailija: "Rebecca Yarros" },
  ];

  const yksiloKirjat = kirjat.map((kirja, index) => (
    <div key={index}>
      <p><b>{kirja.kirjailija}:</b> {kirja.nimi}</p>
    </div>
  ));

  return (
    <div>
      {yksiloKirjat}
    </div>
  );
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<KirjaLista />}</div>); 