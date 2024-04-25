import React from "react";

const Laskuri1 = () => {
  const [luku, setLuku] = React.useState(0);
  function lisaa() {
    setLuku((AikaisempiLaskuri) => AikaisempiLaskuri + 1); // laskuri + 1
  }

  function vahenna() {
    setLuku((prevLaskuri) => prevLaskuri - 1);
  }
  return (
    <div>
      <button onClick={lisaa}>+</button>
      <p>{luku}</p>
      <button onClick={vahenna}>-</button>
    </div>
  );
};

export default Laskuri1;
