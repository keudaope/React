console.log("Ohjelma aloitettu");

const lupaus = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ohjelma valmis");
  }, 3000);

  setTimeout(() => {
    reject("Ohjelma virhe");
  }, 2000);
});
console.log("Ohjelma prosessissa...");
lupaus
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
