import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Muuttujat
const kirjat = [
    {
        kuva: "https://m.media-amazon.com/images/I/41CrXaVqnAL._SY445_SX342_.jpg",
        otsikko: 'The Exchange: After The Firm (The Firm Series)',
        kirjailija: 'John Grisham'
    },
    {
        kuva: "https://m.media-amazon.com/images/I/91n3r1cxBZL._SY466_.jpg",
        otsikko: 'Worthy',
        kirjailija: 'Jada Pinkett Smith'
    },
    {
        kuva: "https://m.media-amazon.com/images/I/41MCvp3e0FL._SY445_SX342_.jpg",
        otsikko: 'Be Useful: Seven Tools for Life',
        kirjailija: 'Arnold Schwarzenegger'
    }];



function KirjaLista() {
    return (
        <section className='kirjalista'>
            {kirjat.map((kirja) => {
                //const { kuva, otsikko, kirjailija } = kirja;
                return (
                    <Kirja kirja={kirja}></Kirja>
                )
            })}
        </section>

    );
}


function Kirja(props) { // tai props kuvan, otsikon ja kirjailijan tilalla
    const { kuva, otsikko, kirjailija } = props.kirja;
    //console.log(props);
    return (
        <article className='kirja'>
            <img src={kuva} alt="" />
            <h1>{otsikko}</h1>
            <h4>{kirjailija}</h4>
        </article>
    )
}

ReactDom.render(<KirjaLista />, document.getElementById('root'));