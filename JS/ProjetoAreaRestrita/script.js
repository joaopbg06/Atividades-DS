let button = document.querySelector('#enviar')

button.addEventListener('click', function (){
    let numeroCartao = document.querySelector('#numero_cartao').value;
    let textoResultado = document.querySelector('#resultado');
    let fundo = document.querySelector('#main');
   


    if (numeroCartao >= 1000 && numeroCartao < 2000){
        textoResultado.innerHTML = 'Parabens você tem acesso a area restrita';
        textoResultado.style.color = 'green';
        fundo.style.setProperty('--fundo', 'linear-gradient(6deg, #AAFAC5 0%, #3BB81F 100%)');
    }

    else if(numeroCartao >= 2000 && numeroCartao < 3000){
        textoResultado.innerHTML = 'Acesso apenas a algumas areas restritas'
        textoResultado.style.color = 'white'
        fundo.style.setProperty('--fundo', 'linear-gradient(6deg, #BEC4BC 0%, #8A8F89 100%)');
    }

    else if(numeroCartao == 0){
        textoResultado.innerHTML = 'Por favor informe o número do cartão'
        textoResultado.style.color = 'gray'
        fundo.style.setProperty('--fundo', 'linear-gradient(6deg, #FAED39 0%, #3A0099 100%)');
    }

    else{
        textoResultado.innerHTML = 'Sem acesso'
        textoResultado.style.color = 'red'
        fundo.style.setProperty('--fundo', 'linear-gradient(6deg, #DB2721 0%, #000 100%)')
    }
//element.style.setProperty('--fundoPadrao', '#00ff00');

})



