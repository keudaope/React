import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.kasittelePainallus}>{props.teksti}</button>
    </div>
  );
};

export default Button;
