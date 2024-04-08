import React from "react";
import Kappale from "./Kappale";
import Otsikko from "./Otsikko";
const Section = () => {
  return (
    <div>
      <Otsikko teksti="Otsikkoteksti" />
      <Kappale teksti="Kappaleteksti" />
    </div>
  );
};

export default Section;
