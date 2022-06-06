const lightBicycle = document.getElementById("light-bicycle")

const bicycle = [
    {
        nome: "Orbea Vibe H30",
        peso: 14
    },
    {
        nome: "Turbo Vado SL 4.0",
        peso: 16
    },
    {
        nome: "Ribble CGR AL",
        peso: 25
    },
    {
        nome: "Boardman HYB 8.9e",
        peso: 22
    },
    {
        nome: "Lapierre E-Sensium 2.2",
        peso: 12
    }
];

const {nome, peso} = bicycle[0];

let biciLeggera = {
    nome,
    peso,
    indice: 0,
};

//ciclo che confronta i pesi delle bici
for (let i = 0; i < bicycle.length; i++) {
    const {nome, peso} = bicycle[i];
    
    if (biciLeggera.peso > peso) {
        biciLeggera = {
            nome,
            peso,
            indice: i
        }
    };
}

console.log(biciLeggera);
lightBicycle.innerHTML = `La bicicletta più leggera è ${biciLeggera.nome},
                          pesa solamente ${biciLeggera.peso}kg`;