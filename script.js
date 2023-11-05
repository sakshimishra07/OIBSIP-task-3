document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertButton = document.getElementById('convert');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (unit === 'celsius') {
            convertedTemperature = (temperature - 32) * (5 / 9);
            result.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
        } else if (unit === 'fahrenheit') {
            convertedTemperature = (temperature * 9 / 5) + 32;
            result.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
        }
    });
});
