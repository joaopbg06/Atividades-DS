let jogadorEscolha = 0;
let jogadorPontos = 0;
let computadorEscolha = 0;
let computadorPontos = 0;

let ganhador = -1;



function jogar(escolha){
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;



    // jogador 1
    if(jogadorEscolha == 1 && computadorEscolha == 1){
        ganhador = 0
    }

    else if(jogadorEscolha == 1 && computadorEscolha == 2){
        ganhador = 2
    }

    else if(jogadorEscolha == 1 && computadorEscolha == 3){
        ganhador = 1
    }

    // jogador 2
    if(jogadorEscolha == 2 && computadorEscolha == 1){
        ganhador = 1
    }

    else if(jogadorEscolha == 2 && computadorEscolha == 2){
        ganhador = 0
    }

    else if(jogadorEscolha == 2 && computadorEscolha == 3){
        ganhador = 2
    }

    // jogador 3
    if(jogadorEscolha == 3 && computadorEscolha == 1){
        ganhador = 2
    }

    else if(jogadorEscolha == 3 && computadorEscolha == 2){
        ganhador = 1
    }

    else if(jogadorEscolha == 3 && computadorEscolha == 3){
        ganhador = 0
    }


    //

    document.getElementById('jogadorEscolha1').classList.remove('selecionado');
    document.getElementById('jogadorEscolha2').classList.remove('selecionado');
    document.getElementById('jogadorEscolha3').classList.remove('selecionado');

    document.getElementById('computadorEscolha1').classList.remove('selecionado');
    document.getElementById('computadorEscolha2').classList.remove('selecionado');
    document.getElementById('computadorEscolha3').classList.remove('selecionado');

    document.getElementById('jogadorEscolha'+jogadorEscolha).classList.add('selecionado')
    document.getElementById('computadorEscolha'+computadorEscolha).classList.add('selecionado')

    // fim jogador

    let mensagem = document.getElementById('mensagem');
    let jogador = document.getElementById('jogadorPontos')
    let computador = document.getElementById('computadorPontos')

    

    if (ganhador == 0){
        mensagem.innerText = 'Empate'
    }

    else if(ganhador == 1){
        mensagem.innerText = 'Vitoria do jogador';
        jogadorPontos++;
        jogador.innerText = jogadorPontos
    }

    else if(ganhador == 2){
        mensagem.innerText = 'Vitoria do computador';
        computadorPontos++;
        computador.innerText = computadorPontos
    }

    



}

document.addEventListener("DOMContentLoaded", function() {
    var musica = document.getElementById("musicaFundo");
    var controleVolume = document.getElementById("controleVolume");

    controleVolume.addEventListener("input", function() {
        musica.volume = controleVolume.value;
    });
});