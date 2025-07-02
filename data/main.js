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

    stats.forEach(function(stat) {
        var increaseButton = document.getElementById(stat).getElementsByClassName('increase')[0];
        var decreaseButton = document.getElementById(stat).getElementsByClassName('decrease')[0];
        var valueElement = document.getElementById(stat).getElementsByClassName('value')[0];
        let select = getStat(stat);
    
        // Setup hold functionality for a button
        function setupHold(button, action) {
            let holdTimer;
            let intervalId;
    
            function doAction() {
                select = action(select);
                character.updateOnScreen(select, valueElement);
            }
    
            function startHold() {
                doAction(); // Immediate action on first click/tap
                holdTimer = setTimeout(() => {
                    intervalId = setInterval(doAction, 60); // Repeat every 100ms
                }, 350); // Start repeating after 500ms hold
            }
    
            function stopHold() {
                clearTimeout(holdTimer);
                clearInterval(intervalId);
            }
    
            // Mouse events
            button.addEventListener('mousedown', startHold);
            button.addEventListener('mouseup', stopHold);
            button.addEventListener('mouseleave', stopHold);
    
            // Touch events
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startHold();
            });
            button.addEventListener('touchend', stopHold);
            button.addEventListener('touchcancel', stopHold);
        }
    
        // Apply to both buttons
        setupHold(increaseButton, character.increaseStat.bind(character));
        setupHold(decreaseButton, character.decreaseStat.bind(character));
    });

    character.updateRaceIncrement();
    character.updateActualStats();
    loadRaces();


    // Set the initial value of available points to defaultAvailablePoints
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
        case "VIT":
            return character.stats.vit;
        case "STR":
            return character.stats.str;
        case "AGI":
            return character.stats.agi;
        case "CHA":
            return character.stats.cha
        case "WIL":
            return character.stats.wil;
        case "INT":
            return character.stats.int;
        case "PER":
            return character.stats.per;
    }
}

function getRaceStat(stat){
    switch(stat){
        case "VIT":
            return character.race.modifiedStats.vit;
        case "STR":
            return character.race.modifiedStats.str;
        case "AGI":
            return character.race.modifiedStats.agi;
        case "CHA":
            return character.race.modifiedStats.cha
        case "WIL":
            return character.race.modifiedStats.wil;
        case "INT":
            return character.race.modifiedStats.int;
        case "PER":
            return character.race.modifiedStats.per;
    }
}