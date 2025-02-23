import React from "react";
export default function Pad(props) {
  const [padStatus, setPadStatus] = React.useState(props.on);

  function toggleStatus() {
    setPadStatus((prev) => !prev);
  }
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={padStatus ? "on" : ""}
      onClick={toggleStatus}
    ></button>
  );
}
