import React from "react"

export default function Sisalto()
{
    return (<article className = "sisalto">
        <h1 className = "otsikko">Tietoa Reactista</h1>
        <ul className="lista">
            <li>Julkaistiin ensimmäisen kerran 2013</li>
            <li>Alunperin Jordan Walken luomus</li>
            <li>Reactillä on yli 100 000 tähteä Gitissä</li>
            <li>On Facebookin ylläpitämä</li>
            <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
        </ul>
    </article>)
}