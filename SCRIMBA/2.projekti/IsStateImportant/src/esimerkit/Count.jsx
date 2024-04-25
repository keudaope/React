import React from "react";

const Count = () => {
  let count = 0;
  const add = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <button onClick={add}>Click {count}</button>
    </div>
  );
};

export default Count;
let count = 0;
console.log(count);
const add = () => count++;

<button onClick={add}>Click {count}</button>;
