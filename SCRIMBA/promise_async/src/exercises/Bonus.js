const luku1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

const luku2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([luku1, luku2]).then((values) => {
  console.log(values);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  console.log(sum);
});
