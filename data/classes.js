let initStat = -25;

const stats = ['VIT', 'STR', 'AGI', 'CHA', 'WIL', 'INT', 'PER'];
var maxStatValue = 35;
var minStatValue = -25;
const priceIncrease1 = 14;
const priceIncrease2 = 24;
var defaultAvailablePoints = 200;

class Race {
    constructor({name, modifiedStats = {vit: 0, str: 0, agi: 0, cha: 0, wil: 0, int: 0, per: 0}, description}) {
        this.name = name;
        this.modifiedStats = modifiedStats;
        this.description = description;
    }
}

class Character {
    constructor({race, subRace, name, availablePoints, stats = {
        vit: initStat, 
        str: initStat, 
        agi: initStat, 
        cha: initStat, 
        wil: initStat, 
        int: initStat, 
        per: initStat
        }, cClass}) {
        this.race = race;
        this.subRace = subRace;
        this.name = name;
        this.stats = stats;
        this.cClass = cClass;
        this.availablePoints = availablePoints;
    }

    increaseStat(stat){
        let statCost = 
            (stat >= maxStatValue) ? 0 : 
            (stat >= priceIncrease1 && stat < priceIncrease2) ? 2 : 
            (stat >= priceIncrease2 && stat < maxStatValue) ? 3 : 1;

        if(this.availablePoints - statCost >= 0){
            this.availablePoints -= statCost;
            stat += stat == maxStatValue ? 0 : 1;
        }
        return stat;
    }

    decreaseStat(stat){
        let statCost = 
            (stat > priceIncrease1 && stat <= priceIncrease2) ? 2 : 
            (stat > priceIncrease2 && stat <= maxStatValue) ? 3 : 1;

        this.availablePoints+= stat == minStatValue ? 0 : statCost;
        stat -= stat == minStatValue ? 0 : 1;

        return stat;
    }

    updateOnScreen(stat, valueElement){
        valueElement.textContent = parseInt(stat);
        document.getElementById('availablePoints').value = character.availablePoints;
        this.updateRaceIncrement();
        this.updateActualStats();
    }

    selectRace(raceFromMenu){
        this.race = races[raceFromMenu];
        this.updateRaceIncrement();
        this.updateActualStats();
        this.updateRaceInfo();
    }

    updateRaceInfo(){
        const name = document.getElementById('raceName');
        const description = document.getElementById('raceDescription');
        const image = document.getElementById('actualPicture');

        name.innerHTML = this.race.name;
        description.innerHTML = this.race.description;
        const logger = document.getElementById('output');
        logger.innerText = this.race.image;
        image.src = this.race.image;
    }

    updateRaceIncrement(){
        stats.forEach(function (stat) {
            var raceIncrement = document.getElementById(stat).getElementsByClassName('raceIncrement')[0];
            var innerDiv = document.getElementById(stat).querySelector('.raceIncrement > div');
            innerDiv.innerHTML = getRaceStat(stat);
            if(getRaceStat(stat) > 0){
                innerDiv.style.backgroundColor = '#66CC66';
                raceIncrement.style.backgroundColor = '#00B000';
                innerDiv.style.color = '#FFFFFF';
                innerDiv.innerHTML = "+" + getRaceStat(stat);
            }else if(getRaceStat(stat)< 0){
                innerDiv.style.backgroundColor = '#BF0000';
                raceIncrement.style.backgroundColor = '#800000';
                innerDiv.style.color = '#FFFFFF';
            }else{
                innerDiv.style.backgroundColor = '#A3A3A3';
                raceIncrement.style.backgroundColor = '#808080';
                innerDiv.style.color = '#FFFFFF';
            }
        });
    }

    updateActualStats(){
        const output = document.getElementById('output');
        output.innerHTML = "";
        stats.forEach(function (stat) {
            var result = document.getElementById(stat).getElementsByClassName('result')[0];
            var valueElement = document.getElementById(stat).getElementsByClassName('value')[0];
            let temp =  parseInt(valueElement.textContent) + parseInt(getRaceStat(stat));
            output.innerHTML += temp;
            result.innerHTML = temp;
        });
    }
}

let character = new Character({race: races["Default"], name: "Player 1", availablePoints: defaultAvailablePoints});
