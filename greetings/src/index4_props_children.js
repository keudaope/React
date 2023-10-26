import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Muuttujat

const ekaKirja = {
    kuva: "https://m.media-amazon.com/images/I/41CrXaVqnAL._SY445_SX342_.jpg",
    otsikko: 'The Exchange: After The Firm (The Firm Series)',
    kirjailija: 'John Grisham'
}

const tokaKirja = {
    kuva: "https://m.media-amazon.com/images/I/91n3r1cxBZL._SY466_.jpg",
    otsikko: 'Worthy',
    kirjailija: 'Jada Pinkett Smith'
}

function KirjaLista() {
    return (
        <section className='kirjalista'>
            <Kirja
                kuva={ekaKirja.kuva}
                otsikko={ekaKirja.otsikko}
                kirjailija={ekaKirja.kirjailija}
            >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi minima, excepturi maiores incidunt mollitia debitis inventore reiciendis fugiat adipisci iste.</p>
            </Kirja>
            <Kirja
                kuva={tokaKirja.kuva}
                otsikko={tokaKirja.otsikko}
                kirjailija={tokaKirja.kirjailija}
            />
        </section>

    )
}

function Kirja({ kuva, otsikko, kirjailija, children }) { // tai props kuvan, otsikon ja kirjailijan tilalla
    //const { kuva, otsikko, kirjailija } = props;
    //console.log(props);
    return (
        <article className='kirja'>
            <img src={kuva} alt="" />
            <h1>{otsikko}</h1>
            <h4>{kirjailija}</h4>
            {children}
        </article>
    )
}

ReactDom.render(<KirjaLista />, document.getElementById('root'));