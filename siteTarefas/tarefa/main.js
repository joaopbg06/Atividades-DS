const forme = document.querySelector('.form');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

let todas = [];

function listarTarefas(){
    lista.innerHTML = '';

    for(let i = 0; i < todas.length; i++){
        const toda = todas[i];

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.innerHTML = toda;
        button.innerHTML = 'Excluir'
        button.addEventListener('click', function(){
            todas.splice(i, 1);
            listarTarefas();
        });
        li.appendChild(span);
        li.appendChild(button);

        lista.appendChild(li)
    };
};

forme.addEventListener('submit', function(event){
    event.preventDefault();

    const texto = input.value.trim();

    if(texto.length === 0){
        return;
    } 
    todas.push(texto);
    input.value = '';
    listarTarefas();
});
listarTarefas();