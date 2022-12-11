function getGiftsToRefill(a1, a2, a3) {
  let containers = [a1, a2, a3];
  let repit = {};
  let result = [];

  containers.forEach((container) => {
    container
      .filter((item, index) => {
        return container.indexOf(item) === index;
      })
      .forEach((item) => {
        if (!repit.hasOwnProperty(item)) {
          repit[item] = 1;
        } else {
          repit[item] = repit[item] + 1;
        }
      });
  });

  let claves = Object.keys(repit);
  claves.forEach((clave) => {
    if (repit[clave] === 1) {
      result.push(clave);
    }
  });

  return result;
}

const a1 = ["bici", "coche", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

// let repit = { hola: 1 };

// if (repit.hasOwnProperty("base")) {
//   console.log("tiene base");
// } else {
//   console.log(repit.hasOwnProperty("base"));
// }
// a1.forEach((element) => {
//   repit[element] = 1;
// });

// console.log(repit);

console.log(getGiftsToRefill(a1, a2, a3));
