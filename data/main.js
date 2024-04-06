function copyToClipboard(textToCopy) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(textToCopy);
}

function getAllStats() {
    let text = "";
    const output = document.getElementById('output');
    stats.forEach(function (stat) {
        var result =  parseInt(getStat(stat)) + parseInt(getRaceStat(stat));
        text += stat + "\t" + result + "\n";
    });
    output.innerText = text;
    copyToClipboard(text);
}

function loadRaces(){
    let output = "";
    var raceList = document.getElementById('raceList');
    Object.values(races).forEach(
        function(race) {
            output += '<option value="' + race.name + '">' + race.name + '</option>'
        });
    raceList.innerHTML = output;
}

window.onload = function() {
    var availablePoints = document.getElementById('availablePoints');
    var maxStatValueObject = document.getElementById('maxStatValue');

    stats.forEach(
    function(stat) {
        var increaseButton = document.getElementById(stat).getElementsByClassName('increase')[0];
        var decreaseButton = document.getElementById(stat).getElementsByClassName('decrease')[0];
        var raceIncrement = document.getElementById(stat).getElementsByClassName('raceIncrement')[0].innerText;
        var valueElement = document.getElementById(stat).getElementsByClassName('value')[0];

        let select = getStat(stat);

        //Gestire punti available se vanno in negativo
        increaseButton.onclick = function() {
            select = character.increaseStat(select);
            character.updateOnScreen(select,valueElement);
        };

        decreaseButton.onclick = function() {
            select = character.decreaseStat(select);
            character.updateOnScreen(select,valueElement);
        };
    });

    character.updateRaceIncrement();
    character.updateActualStats();
    loadRaces();


    // Set the initial value of available points to 34
    availablePoints.value = defaultAvailablePoints;
    maxStatValueObject.value = maxStatValue;
};

function getAllStats() {
    let text = "";
    const output = document.getElementById('output');
    
    stats.forEach(function (stat) {
        var valueElement = document.getElementById(stat).getElementsByClassName('value')[0];
        var result =  parseInt(valueElement.textContent) + parseInt(getRaceStat(stat));
        text += stat + "\t" + result + "\n";
    });
    output.innerText = text;
    copyToClipboard(text);
}

function getStat(stat){
    switch(stat){
        case "COS":
            return character.stats.cos;
        case "STR":
            return character.stats.str;
        case "AGI":
            return character.stats.agi;
        case "CHA":
            return character.stats.cha
        case "WIS":
            return character.stats.wis;
        case "INT":
            return character.stats.int;
        case "PER":
            return character.stats.per;
    }
}

function getRaceStat(stat){
    switch(stat){
        case "COS":
            return character.race.modifiedStats.cos;
        case "STR":
            return character.race.modifiedStats.str;
        case "AGI":
            return character.race.modifiedStats.agi;
        case "CHA":
            return character.race.modifiedStats.cha
        case "WIS":
            return character.race.modifiedStats.wis;
        case "INT":
            return character.race.modifiedStats.int;
        case "PER":
            return character.race.modifiedStats.per;
    }
}