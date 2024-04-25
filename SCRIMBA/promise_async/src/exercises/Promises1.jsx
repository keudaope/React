import React from "react";
const lupaus = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
const Promises1 = () => {
  return (
    <div>
      <p>Program started</p>
      <p>{lupaus}</p>
      <p>Ohjelma on prosessissa...</p>
    </div>
  );
};

export default Promises1;
