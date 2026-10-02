
// =========================
// ANO ATUAL
// =========================

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();


// =========================
// ÚLTIMA MODIFICAÇÃO
// =========================

document.querySelector("#ultimaModificacao").textContent =
    `Última Modificação: ${document.lastModified}`;


// =========================
// SENSÃO TÉRMICA
// =========================

function calculateWindChill(temperature, windSpeed) {

    // A sensação térmica só é calculada
    // quando temperatura <= 10°C
    // e vento > 4.8 km/h

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


// =========================
// DADOS DO CLIMA
// =========================

const temperature = 25;
const windSpeed = 10;


// =========================
// MOSTRA SENSAÇÃO TÉRMICA
// =========================

document.querySelector("#windchill").textContent =
    calculateWindChill(temperature, windSpeed);