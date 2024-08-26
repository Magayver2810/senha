const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=69;
numeroSenha.textContent=tamanhoSenha;
const botoes= document.querySelector('.pareametro-senha-botoes');
botoes[0].oneclick= diminuirTamanho;