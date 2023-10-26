import ReactDOM from 'react-dom';
import React from 'react';
const navi = (
    <nav>
      <h1>Weppisivu</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
  ReactDOM.render(
    navi,
    document.getElementById("root")
  )