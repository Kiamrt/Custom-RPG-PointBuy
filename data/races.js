const races = {
    Default: {
        name: "Default",
        modifiedStats: {
            vit: 0,
            str: 0,
            agi: 0,
            cha: 0,
            wil: 0,
            int: 0,
            per: 0
        },
        description: ""
    },
    Umano: {
        name: "Umano",
        modifiedStats: {
            vit: 2,
            str: 2,
            agi: 2,
            cha: 2,
            wil: 2,
            int: 2,
            per: 2
        },
        description: "Una razza che si è fatta forte della sua adattabilitá in svariati campi per espandersi e presidiare varie zone all’interno del mondo, tendono ad avere metodi discordi di gestire le comunita’ e le societa’ che si sono venute a creare, ciononostante vi sono vari accordi di non belligeranza e rotte commerciali tutt’ora in utilizzo. Eccetto che per le dimensioni ed il colore della pelle, le capacità individuali degli umani sono pressoché le stesse tra le loro etnie"
    },
    Elfo: {
        name: "Elfo",
        modifiedStats: {
            vit: -2,
            str: -2,
            agi: 6,
            cha: 0,
            wil: 4,
            int: 0,
            per: 3
        },
        //image: "img/Elfo.jpg",
        description: "si sono addentrati nelle foreste che hanno fatto loro. Sono particolarmente agili ed in contatto con la natura"
    },
    Drow: {
        name: "Drow",
        modifiedStats: {
            vit: -3,
            str: -2,
            agi: 0,
            cha: 4,
            wil: 0,
            int: 6,
            per: 3
        },
        description: "Abbastanza rari oggigiorno. Si insediarono in delle caverne abbastanza ostili dove riuscirono a sopravvivere affinando le loro capacità magiche ed il loro intelletto. Caratterizzati da un colorito più smorto / bluastro."
    },
    Nano: {
        name: "Nano",
        modifiedStats: {
            vit: 6,
            str: 0,
            agi: -3,
            cha: 3,
            wil: 1,
            int: 4,
            per: -2
        },
        description: "adattabili e versatili, capaci di eccellere in molte discipline e mestieri."
    },
    Orco: {
        name: "Orco",
        modifiedStats: {
            vit: 5,
            str: 5,
            agi: 3,
            cha: -4,
            wil: 0,
            int: -2,
            per: 0
        },
        description: "Dalla perlle verdastra, tendevano all'essere belligeranti per quanto recentemente stiano cambiando, con una natura guerriera e una società basata sulla forza e sulla meritocrazia."
    }
};
