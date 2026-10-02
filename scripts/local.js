

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();




document.querySelector("#ultimaModificacao").textContent =
    `Última Modificação: ${document.lastModified}`;




function calculateWindChill(temperature, windSpeed) {

   h

    if (temperature <= 10 && windSpeed > 4.8) {

        const windChill =
            13.12 +
            (0.6215 * temperature) -
            (11.37 * Math.pow(windSpeed, 0.16)) +
            (0.3965 * temperature *
                Math.pow(windSpeed, 0.16));

        return windChill.toFixed(1) + "°C";

    } else {

        return "N/A";

    }
}




const temperature = 25;
const windSpeed = 10;




document.querySelector("#windchill").textContent =
    calculateWindChill(temperature, windSpeed);