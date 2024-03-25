import ReactDOM from "react-dom/client";

const page = (
  <div>
    <h1>Mahtava websivuni on luotu Reactilla</h1>
    <h3>Syyt, miksi rakastan Reactia</h3>
    <ol>
      <li>Se koostuu komponenteista</li>
      <li>Se on kuvaileva</li>
      <li>Osaamalla Reactin, mahdollistan työnsaantiani</li>
      <li>Sitä ylläpitää taitavat koodarit</li>
    </ol>
  </div>
);

//document.getElementById("root").append(JSON.stringify(page));
// Korjattu
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
