const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

let min = 1;
let max = 5;

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
        return nome;
    }
})

console.log(filtroNomi);