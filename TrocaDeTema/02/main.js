const trocarFundo = document.getElementById('trocar-fundo');

trocarFundo.addEventListener('click', () => {
    //variaveis
    let textoServico = document.querySelectorAll('#servico .texto');
    let label = document.querySelectorAll('label')
    

    if (trocarFundo.classList.contains('fa-toggle-off')) {
        trocarFundo.classList.remove('fa-toggle-off');
        trocarFundo.classList.add('fa-toggle-on');

        textoServico.forEach(element => {
            element.style.color = 'var(--laranja)';
        });

        label.forEach(elemento => {
            elemento.style.color = 'white'
        })

        

        //troca das cores
        document.documentElement.style.setProperty('--roxo', '#B181ED');
        document.documentElement.style.setProperty('--branco', '#202C33');
        document.documentElement.style.setProperty('--verdeClaro', '#fff');
        document.documentElement.style.setProperty('--verdeLima', '#202C33');

        trocarFundo.style.color = 'black'
    
    } else {
        trocarFundo.classList.remove('fa-toggle-on');
        trocarFundo.classList.add('fa-toggle-off');

        textoServico.forEach(element => {
            element.style.color = 'var(--preto)';
        });

        label.forEach(elemento => {
            elemento.style.color = 'black'
        })

        

        //volta
        document.documentElement.style.setProperty('--roxo', '#920da7');
        document.documentElement.style.setProperty('--branco', '#fff');
        document.documentElement.style.setProperty('--verdeClaro', '#70FF00');
        document.documentElement.style.setProperty('--verdeLima', '#52BA00');

        trocarFundo.style.color = 'white'
        
    }
});
