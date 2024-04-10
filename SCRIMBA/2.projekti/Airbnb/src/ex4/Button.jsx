import React from "react";

const Button = ({ kasittelePainallus}, {painikeTeksti }) => {
  return (
    <div>
      <button onClick={kasittelePainallus}>{painikeTeksti}</button>
    </div>
  );
};

export default Button;
