import React from 'react'

export default function Henkilo({img, nimi, osoite, postit}){
    return (<div className='main'>
        <img src = {img} />
        <h1>{nimi}</h1>
        <p>{osoite}</p>
        <p>{postit}</p>
    </div>)
}

