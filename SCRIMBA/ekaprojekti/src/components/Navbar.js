import React from "react"

// vaihtoehto sille, että kirjoitettaisiin
// loppuun export default Navbar
export default function Navbar()
{
    return(<nav>
        <img src= {require("../images/logo24.png")} />
        <h3>Tietoa Reactista</h3>
        <h4>React kurssi - projekti 1</h4>
    </nav>)
}
