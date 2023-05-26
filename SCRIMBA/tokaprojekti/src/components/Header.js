import React from "react"

// vaihtoehto sille, että kirjoitettaisiin
// loppuun export default Navbar
export default function Header() {
    return (<div className='nav'>
        <img src={require("../images/airbnb.png")} className = 'logo'/>
        <span className='logo-text'>airbnb</span>
    </div>)
}