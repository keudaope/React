console.log("Ohjelma käynnistetty");

const lupaus = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ohjelma valmis");
  }, 3000);
});

console.log(lupaus);
console.log("Ohjelma on prosessissa...");

lupaus.then((value) => {
  console.log(value);
});
