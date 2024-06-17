alert('Boas-vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
        chute = prompt(`Escolha um número de 1 a ${numeroMaximo}.`);
        if (chute == numeroSecreto) {
                break;
        } else {
                if (chute > numeroSecreto){
                        alert(`O número secreto é menor que ${chute}.`);
                }else{
                        alert(`O número secreto é maior que ${chute}.`);
                }
                tentativas ++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
/*
if (tentativas > 1){
        alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}else{
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
/*alert('Boas-vindas ao jogo do número secreto');
let nome1 = 'Lua';
let idade1 = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
let nome = prompt('Digite o seu nome');

let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!');
    console.log(nome1, idade1, numeroDeVendas, saldoDisponivel, mensagemDeErro, nome, idade );
}

let diaDaSemana = prompt('Digite o dia da Semana:')

if (diaDaSemana == 'Segunda'){
        alert('Boa Semana!');
        console.log("Boa Semana!");
}else if (diaDaSemana == 'Terça'){
        alert('Boa Semana!');
        console.log("Boa Semana!");
}else if (diaDaSemana == 'Quarta'){
        alert('Boa Semana!');
        console.log("Boa Semana!");
}else if (diaDaSemana == 'Quinta'){
        alert('Boa Semana!');
        console.log("Boa Semana!");
}else if (diaDaSemana == 'Sexta'){
        alert('Boa Semana!');
        console.log("Boa Semana!");
}else {
        alert('Bom final de semana!');
        console.log("Bom final de semana!");
}
let numeroSecreto = parseInt(Math.random() * 1000 + 1)
console.log(numeroSecreto);*/