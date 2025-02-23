import padsData from "./pads";
import React from "react";
import Pad from "./Pad";
export default function App(props) {
  const [pads, setPads] = React.useState(padsData);

  const styles = {
    backgroundColor: props.darkMode ? "#222" : "#ccc",
  };
  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
