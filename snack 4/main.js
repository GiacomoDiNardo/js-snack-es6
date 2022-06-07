let students = [
    { name: "Marco", id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
  ];


//nuovo array di nomi in maiuscolo
const targa = students.map((item) => {
    return item.name.toUpperCase();
});

console.log(targa);


//nuovo array con studenti con voti superiori a 70
const voti = students.filter((item) => {
    return item.grades > 70;
});

console.log(voti);

//nuovo array con studenti con voti superiori a 70 e id superiore a 120
const newStudents = students.filter((item) => {
    return item.grades > 70 && item.id > 120;
});

console.log(newStudents);