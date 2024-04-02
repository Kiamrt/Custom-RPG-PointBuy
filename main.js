window.onload = function() {
    var stats = ['COS', 'STR', 'AGI', 'CHA', 'WIS', 'INT', 'PER'];
    var availablePoints = document.getElementById('availablePoints');
    var maxStatValue = document.getElementById('maxStatValue');

    stats.forEach(function(stat) {
        var increaseButton = document.getElementById(stat).getElementsByClassName('increase')[0];
        var decreaseButton = document.getElementById(stat).getElementsByClassName('decrease')[0];
        var valueElement = document.getElementById(stat).getElementsByClassName('value')[0];

        increaseButton.onclick = function() {
            var currentValue = parseInt(valueElement.textContent);
            var cost = (currentValue >= 12 && currentValue < 15) ? 2 : (currentValue >= 15 && currentValue < 18) ? 3 : 1;
            if (availablePoints.value >= cost && currentValue < maxStatValue.value) {
                valueElement.textContent = currentValue + 1;
                availablePoints.value = parseInt(availablePoints.value) - cost;
            }
        };

        decreaseButton.onclick = function() {
            var currentValue = parseInt(valueElement.textContent);
            var gain = (currentValue > 12 && currentValue <= 15) ? 2 : (currentValue > 15 && currentValue <= 18) ? 3 : 1;
            if (currentValue > 7) {
                valueElement.textContent = currentValue - 1;
                availablePoints.value = parseInt(availablePoints.value) + gain;
            }
        };
    });

    availablePoints.onchange = function() {
        if (this.value < 0) {
            this.value = 0;
        }
    };

    // Set the initial value of available points to 34
    availablePoints.value = 34;
};
