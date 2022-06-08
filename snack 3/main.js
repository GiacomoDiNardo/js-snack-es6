const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

let min = 3;
let max = 6;

const namesArray = [];

//Ciclo forEach
myArray.forEach((nome, i) => {
    if (i > min && i < max) {
        namesArray.push(nome);
    };
});

console.log(namesArray);

//Con Filter
const filtroNomi = myArray.filter((nome, i) => {
    if (i > min && i < max) {
        return true;
    }
});

console.log(filtroNomi);