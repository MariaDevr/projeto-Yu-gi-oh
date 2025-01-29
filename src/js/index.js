console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})



btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;
    
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
