import React from 'react';
import ReactDom from 'react-dom';

function KirjaLista() {
    return (
        <section>
            <Kirja />
            {/*<Kirja /> 
            <Kirja /> 
            <Kirja /> 
            <Kirja /> 
            <Kirja /> 
            <Kirja /> 
            <Kirja /> 
            <Kirja /> 
            <Kirja />*/}

        </section>

    )
}

function Kirja() {
    return (
        <article>
            <Kuva></Kuva>
            <KirjanNimi />
            <Kirjailija />
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
        <h4>John Grisham</h4>
    )
}

function Kuva() {
    return (
        <img src="https://images-na.ssl-images-amazon.com/images/I/91-Dqdv3a8L._AC_UL600_SR600,400_.jpg" alt="" />
    )
}
ReactDom.render(<KirjaLista />, document.getElementById('root'));