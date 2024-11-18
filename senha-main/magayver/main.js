const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=69;
numeroSenha.textContent=tamanhoSenha;
const botoes= document.querySelectorAll('.parametro-senha-botao');
botoes[0].onclick= diminuirTamanho;
botoes[1].onclick= aumentarTamanho;
function diminuirTamanho(){
    if(tamanhoSenha>8){
     tamanhoSenha=tamanhoSenha-1;
     numeroSenha.textContent=tamanhoSenha;
    }  
}

function aumentarTamanho(){
    if(tamanhoSenha>8){
     tamanhoSenha=tamanhoSenha+1;
     numeroSenha.textContent=tamanhoSenha;
    }  
}


