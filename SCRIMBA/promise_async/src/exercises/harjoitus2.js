console.log("Ohjelma aloitettu");

const lupaus = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Vaihe 1 valmis");
  }, 3000);
});
console.log(lupaus);
console.log("Ohjelma prosessissa...");
lupaus
  .then((value) => {
    console.log(value);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("vaihe 2 valmis");
      }, 3000);
    });
  })
  .then((value) => {
    console.log(value);
  });
