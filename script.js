let display = document.querySelector(".display");

function clicar(valor){
    display.value += valor;
};

function limpar(){
    display.value = "";
};

function somar() {
    display.value += "+";
};

function diminuir() {
    display.value += "-";
};

function vezes() {
    display.value += "*";
};

function dividir() {
    display.value += "/";
};

function ponto() {
    display.value += ".";
};

function porCento() {
    let display = document.querySelector('.display');
    let entrada = display.value;
    let valores = entrada.split(/[+\-]/);
    let primeiroValor = parseFloat(valores[0]);
    let segundoValor = parseFloat(valores[1]);
    let operacao = entrada.includes('+') ? '+' : (entrada.includes('-') ? '-' : null);
    let segundoValorAtualizado = segundoValor / 100 * primeiroValor;
    let resultado;

    if (operacao == '+') {
        resultado = primeiroValor + segundoValorAtualizado;
    } else if (operacao == '-') {
        resultado = primeiroValor - segundoValorAtualizado;
    } else {
        resultado = 0;
    }

    display.value = resultado;
}


function igual() {
    const resultado = eval(display.value);
    display.value = resultado;
};

