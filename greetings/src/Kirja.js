import React from 'react';

function Kirja(props) { // tai props kuvan, otsikon ja kirjailijan tilalla
    const { kuva, otsikko, kirjailija } = props;
    //console.log(props);

    // attribuutti, tapahtumanKasittelija
    // onClick, onMouseOver
    const napautuksenKasittelija = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hei maailma!')
    }
    const vaikeaEsimerkki = (author) => {
        console.log(kirjailija);
    }
    return (
        <article className='kirja' onMouseOver={() => {
            console.log(otsikko);
        }}>
            <img src={kuva} alt="" />
            <h1 onClick={() => console.log(otsikko)}>{otsikko}</h1>
            <h4>{kirjailija}</h4>
            <button type="button" onClick={napautuksenKasittelija}>Alerts Hei maailma</button>
            <button type="button" onClick={() => vaikeaEsimerkki()}>Vaikeampi esimerkki</button>
        </article>
    );
};

export default Kirja
