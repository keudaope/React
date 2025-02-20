import React from "react";

export default function MyFavoriteThings() {
  const [myFavThings, setMyFavThings] = React.useState([]);

  const allFavThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🍊",
    "🚪🔔",
    "🛷🔔",
    "🥩🍽️",
  ];

  const thingsElements = myFavThings.map((thing) => <p key={thing}>{thing}</p>);

  function addFavThing() {
    setMyFavThings((preFavThings) => [
      ...preFavThings,
      allFavThings[preFavThings.length],
    ]);
  }

  return (
    <main>
      <button onClick={addFavThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
