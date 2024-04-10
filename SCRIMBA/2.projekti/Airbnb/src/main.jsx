import App from "./App.jsx";
import "./index.css";
import Section1 from "./ex1/Section"
import Section2 from "./ex2/Section"
import Section3 from "./ex3/Section.jsx";
import Profile from "./ex4/Profile.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import Kappale from "./ex5/Kappale.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Section1 /> 
  </React.StrictMode>
);

{/* Ensimmäinen harjoitus (ex1) */}

{/* Toinen harjoitus (ex2) */}
{/* <Section2 /> */}

{/* Kolmas harjoitus (ex3) */}
{/* <Section3 /> */}


{/* Neljäs harjoitus (ex4) */}
{/* <Profile
profiiliTeksti={"Profiili"}
korttiTeksti={"Kortti"}
painikeTeksti={"Paina minua!"}
kasittelePainallus={sanoBoo}
/> */}
// function sanoBoo() {
  //   console.log("boo from main.jsx!");
  // }
  
  {/* Viides harjoitus (ex5) */}
    {/* <Kappale teksti="hello, hello, mitä kello?">
      <h1>Terveisiä main.jsx:stä</h1>
    </Kappale> */}
  