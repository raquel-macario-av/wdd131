// Coloca o ano atual no copyright
const spanAno = document.getElementById('anoatual');

if (spanAno) {
    spanAno.textContent = new Date().getFullYear();
}


// Mostra a data da última modificação
const pRodape = document.getElementById('ultimaModificacao');

if (pRodape) {
    const dataModificacao = new Date(document.lastModified);

    const dataFormatada = dataModificacao.toLocaleDateString('pt-BR');
    const horaFormatada = dataModificacao.toLocaleTimeString('pt-BR');

    pRodape.textContent = `Última Modificação: ${dataFormatada} ${horaFormatada}`;
}
ggg