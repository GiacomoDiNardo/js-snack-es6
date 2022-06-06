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


const teams = [
    {
        nomeTeam: "Segromigno Soccer",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nomeTeam: "Marlia Soccer",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nomeTeam: "Lucca Soccer",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nomeTeam: "Camigliano Soccer",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nomeTeam: "S. Andrea Soccer",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nomeTeam: "S. Pietro Soccer",
        puntiFatti: 0,
        falliSubiti: 0,
    }
];

const newTeams = []

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
for (let i = 0; i < teams.length; i++) {
    const punti = Math.floor(Math.random() * 100);
    const falli = Math.floor(Math.random() * 100);


    teams[i].puntiFatti = punti;
    teams[i].falliSubiti = falli;
    
    const {nomeTeam, falliSubiti} = teams[i];
    let team = {
        nomeTeam,
        falliSubiti,
    };

    newTeams.push(team);
}

console.log(teams);
console.log(newTeams);

