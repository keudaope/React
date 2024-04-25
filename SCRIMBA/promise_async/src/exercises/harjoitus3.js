console.log("Ohjelma aloitettu");

const lupaus = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hei ystävä!", error: null });
  }, 5000);
});

console.log(lupaus);
console.log("Ohjelma prosessissa...");

lupaus.then((value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ensimmäinen lupausketju valmis!");
    }, 2000);
  }).then((value) => {
    console.log(value);
  });
});

lupaus
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Toinen lupausketju valmis!");
      }, 10000);
    });
  })
  .then((value) => {
    console.log(value);
  });
