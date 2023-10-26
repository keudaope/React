import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function KirjaLista() {
    return (
        <section className='kirjalista'>
            <Kirja />
        </section>

    )
}
const kirjailija = 'John Grisham';
function Kirja() {
    const otsikko = 'The Exchange: After The Firm (The Firm Series)';
    return (
        <article className='kirja'>
            <img src="https://m.media-amazon.com/images/I/41CrXaVqnAL._SY445_SX342_.jpg" alt="" />
            <h1>{otsikko}</h1>
            <h4>{kirjailija.toUpperCase()}</h4>
            {/*<p>{let x = 6}</p>*/}
            <p>{6 * 6}</p>
        </article>
    )
}

ReactDom.render(<KirjaLista />, document.getElementById('root'));