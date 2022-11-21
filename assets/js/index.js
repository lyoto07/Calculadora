const numero = document.querySelectorAll(".num");
const tela = document.querySelector(".display");
const operacao = document.querySelectorAll(".operacao");

numero.forEach(element => {
    element.addEventListener("click", function() {
        console.log(element.textContent);
    });
});

// Repetir para as outras operações
operacao.forEach(element => {
    element.addEventListener("click", function () {
        console.log(element.textContent);
    })
});

// Operações

function divisao (num1, num2) {
    tela.innerHTML = (num1 / num2);
}

function multiplicacao(num1, num2) {  
    console.log ("Digite um Número");
} 
function subtracao (num1, num2) {
    console.log ("Digite um Número");
}

function soma (num1, num2) {
    console.log ("Digite um Número");
}
function percentual (num1, num2) {
    console.log ("Digite um Número");
}
function apagar (apagar) {
    console.log ("Apagar");
}
function deletar (deletar) {
    console.log ("Deletar");
}


