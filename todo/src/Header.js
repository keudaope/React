import React from 'react'
function Header() 
{
  return (
    <div>
      <header>
        <nav className="navi">
          <img src = './logo192.png' className="navin-logo"></img>
          <ul className="navi-asiat">
            <li><a href="">Hinnasto</a></li>
            <li><a href="">Tietoa</a></li>
            <li><a href="">Ota yhteys</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Header