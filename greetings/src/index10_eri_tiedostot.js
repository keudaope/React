import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import { greeting } from './testing/testing'
// CSS
import './index.css';

// Muuttujat
import { kirjat } from './kirjat';
import Kirja from './Kirja';

function KirjaLista() {
    console.log(greeting);
    return (
        <section className='kirjalista'>
            {kirjat.map((kirja) => {
                //const { kuva, otsikko, kirjailija } = kirja;
                return (
                    <Kirja key={kirja.id} {...kirja}></Kirja>
                )
            })}
        </section>

    );
}

//ReactDom.render(<KirjaLista />, document.getElementById('root'));
const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<KirjaLista />);