import React from "react";
import Button from "./Button";
import Otsikko from "./Otsikko";

const Section = () => {
  function kasittelePainallus() {
    console.log("Boo");
  }
  return (
    <div>
      <Otsikko teksti="Otsikkoteksti" />
      <Button teksti="Paina minua" kasittelePainallus={kasittelePainallus} />
    </div>
  );
};

export default Section;
