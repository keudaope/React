import React from 'react';
import ReactDom from 'react-dom';

function Tervehdys() {
  return (
    <div>
      <Henkilo />
      <Viesti />
    </div>
  )
}

function Henkilo() {
  return (
    <h2>Jorma Tuntematon</h2>
  )
}

function Viesti() {
  return (
    <p>Tämä on viesti</p>
  )
}

ReactDom.render(<Tervehdys />, document.getElementById('root'));