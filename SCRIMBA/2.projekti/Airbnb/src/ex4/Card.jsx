import React from "react";
import Button from "./Button";
const Card = ({ korttiTeksti, painikeTeksti, kasittelePainallus }) => {
  return (
    <div>
      <h2>{korttiTeksti}</h2>
      <Button
        kasittelePainallus={kasittelePainallus}
        painikeTeksti={painikeTeksti}
      />
    </div>
  );
};

export default Card;
