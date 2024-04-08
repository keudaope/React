import React from "react";
import "./App.css";
let laskuri = 0;
const Ihminen = (props) => {
  laskuri = laskuri + 0.5;
  return (
    <div className="kortti">
      <h2>
        {laskuri} {props.name}
      </h2>
      <h3>{props.email}</h3>
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <p className="bold">{props.website}</p>
    </div>
  );
};

export default Ihminen;
