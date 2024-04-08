import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Section from "./ex3/Section.jsx";
import Profile from "./ex4/Profile.jsx";
import Kappale from "./ex5/Kappale.jsx";
function sanoBoo() {
  console.log("boo from main.jsx!");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<Profile
      profiiliTeksti={"Profiili"}
      korttiTeksti={"Kortti"}
      painikeTeksti={"Paina minua!"}
      kasittelePainallus={sanoBoo}
/>*/}
    <Kappale teksti="hello, hello, mitä kello?">
      <h1>Terveisiä main.jsx:stä</h1>
    </Kappale>
  </React.StrictMode>
);
