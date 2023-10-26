import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 12: Luo React-luokka, joka renderöi videoelementin (video) HTML-sivulle.

function Video() {
  return (
    <video width="320" height="240" controls>
      <source src="https://file-examples.com/storage/fef431be58652d8e49c225d/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
    </video>
  )
}

const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<Video />);


