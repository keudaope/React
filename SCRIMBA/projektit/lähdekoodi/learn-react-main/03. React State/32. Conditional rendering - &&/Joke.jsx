import React from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggle() {
    setIsShown((prev) => !prev);
  }
  console.log(isShown);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <p>{isShown && props.punchline}</p>
      <button onClick={toggle}>Show punchline</button>
      <hr />
    </div>
  );
}
