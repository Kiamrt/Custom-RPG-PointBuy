const races = {
    Default: {
        name: "Default",
        modifiedStats: {
            cos: 0,
            str: 0,
            agi: 0,
            cha: 0,
            wis: 0,
            int: 0,
            per: 0
        },
        description: ""
    },
    Umano: {
        name: "Umano",
        modifiedStats: {
            cos: 0,
            str: 0,
            agi: 0,
            cha: 0,
            wis: 0,
            int: 0,
            per: 0
        },
        description: "Esseri umani, adattabili e versatili, capaci di eccellere in molte discipline e mestieri."
    },
    Elfo: {
        name: "Elfo",
        modifiedStats: {
            cos: 0,
            str: -1,
            agi: 1,
            cha: 0,
            wis: 0,
            int: 1,
            per: 0
        },
        image: "img/Elfo.jpg",
        description: "Razza che ti permette di avere le orecchie lunghe e fighe"
    },
    Drow: {
        name: "Drow",
        modifiedStats: {
            cos: 0,
            str: 0,
            agi: 0,
            cha: -1,
            wis: 0,
            int: 1,
            per: 1
        },
        description: "Elfi corrotti e malvagi, abili nell'arte dell'inganno e della magia oscura."
    },
    Nano: {
        name: "Nano",
        modifiedStats: {
            cos: 1,
            str: 0,
            agi: -1,
            cha: 0,
            wis: 1,
            int: 0,
            per: 0
        },
        description: "Esseri umani, adattabili e versatili, capaci di eccellere in molte discipline e mestieri."
    },
    Orco: {
        name: "Orco",
        modifiedStats: {
            cos: 1,
            str: 1,
            agi: 0,
            cha: 0,
            wis: 0,
            int: -1,
            per: 0
        },
        description: "Creature forti e brutali, con una natura guerriera e una società basata sulla forza e il dominio."
    },
    Marvjng: {
        name: "Marvjng",
        modifiedStats: {
            cos: -99,
            str: -99,
            agi: 100,
            cha: -99,
            wis: -99,
            int: -99,
            per: -99
        },
        image: "img/Marvjng.jpg",
        description: "Popolo di sventurati che vivono nella giungla della landa degli evocatori. Essi sono deboli e filippini e rachitici, ma possono rollare le palle di neve più grandi del mondo."
    },
    AlbyRotelle: {
        name: "AlbyRotelle",
        modifiedStats: {
            cos: -99,
            str: -99,
            agi: -300,
            cha: -50,
            wis: -200,
            int: -999,
            per: 50
        },
        image: "img/Marvjng.jpg",
        description: "Popolo di sventurati che vivono nella giungla della landa degli evocatori. Essi sono deboli e filippini e rachitici, ma possono rollare le palle di neve più grandi del mondo."
    }
};
