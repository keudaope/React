import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// Tehtävä 5: Luo React-komponentti Artikkeli, joka ottaa otsikko ja sisalto -propsit ja näyttää artikkelin otsikon ja sisällön.

const Artikkeli = (props) => {
  return (
    <div>
      <h2>{props.otsikko}</h2>
      <p>{props.sisalto}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Lorem Ipsum</h1>
      <Artikkeli otsikko="What is Lorem Ipsum?" sisalto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      <Artikkeli otsikko="Why do we use it?" sisalto="TIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
    </div>
  )
}


const sisalto = document.getElementById('root');
const root = createRoot(sisalto);
root.render(<div>{<App />}</div>); 