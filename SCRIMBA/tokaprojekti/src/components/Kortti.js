import React from 'react'

export default function Kortti() {
    return (<div className='kortti'>
        <img src={require("../images/zaferes.png")} className='hlo' />
        <div className="kortintiedot"><img src={require("../images/star.png")} className='tahti' />
            <span>5.0 </span>
            <span className="harmaa">(6) * </span>
            <span className="harmaa">USA</span>
            <p className="kortinTeksti">Elämän ohjeita Katie Zaferesilta</p>
            <p className="kortinTeksti"><span className="bold">Alkaen 140 € </span> / henkilö</p>
        </div>
    </div>)
}