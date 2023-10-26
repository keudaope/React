import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function KirjaLista() {
    return (
        <section className='kirjalista'>
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />
            <Kirja />

        </section>

    )
}

function Kirja() {
    return (
        <article className='kirja'>

        </article>
    )
}

function KirjanNimi() {
    return (
        <h1>The Exchange: After The Firm (The Firm Series)</h1>
    )
}

function Kirjailija() {
    return (
        <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>John Grisham</h4>
    )
}

function Kuva() {
    return (
        <img src="https://m.media-amazon.com/images/I/41CrXaVqnAL._SY445_SX342_.jpg" alt="" />
    )
}
ReactDom.render(<KirjaLista />, document.getElementById('root'));