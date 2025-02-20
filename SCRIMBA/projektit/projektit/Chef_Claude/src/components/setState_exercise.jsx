import React from "react";

export default function setState_exercise() {
  const [count, setCount] = React.useState(0);

  // Ternary operator

  //   const isGoingOut = true;

  //   console.log(isGoingOut ? "yes" : "no");

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={minus} className="minus" aria-label="Decrease count">
          -
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
