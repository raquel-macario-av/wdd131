
function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "Você clicou no botão!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
}

var meuNome;
var minhaIdade;

meuNome;
minhaidade;

scoobyDoo;
var meuNomeArray = ["Chris", "Bob", "Jim"];
var meuNumeroArray = [10, 15, 40];
meuNomeArray[0]; // deve retornar 'Chris'
meuNumeroArray[2]; // deve retornar 40

var cachorro = { nome: "Totó", raca: "Dálmata" };

var meuNumero = "500"; // opa, isso continua sendo uma string
typeof meuNumero;
meuNumero = 500; // bem melhor — agora isso é um número
typeof meuNumero;