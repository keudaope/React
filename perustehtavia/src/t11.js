import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 11: Luo React-luokka, joka renderöi Suomen kartan (iframe) HTML-sivulle.

function Kartta() {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4687170.455081754!2d19.937562117902992!3d65.10554583680602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sSuomi!5e0!3m2!1sfi!2suk!4v1697640876428!5m2!1sfi!2suk"
      style={{ width: "600", height: "450", frameborder: "0", border: 0, allowfullscreen: "", tabindex: "0" }}>
    </iframe>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Kartta />);



