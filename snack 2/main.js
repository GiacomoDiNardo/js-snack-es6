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

