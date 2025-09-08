const titulo = document.getElementById('titulo');
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');

let conteudos = document.querySelectorAll('.conteudo');


function escolher(idioma){
    fetch(`textos_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {


            titulo.style.opacity = 0;
            conteudos.forEach(conteudo => {
                conteudo.style.opacity = 0;
            })
            
            setTimeout( () => {
                titulo.innerHTML = texto.titulo;
                texto1.innerHTML = texto.texto1;
                texto2.innerHTML = texto.texto2;
                texto3.innerHTML = texto.texto3;
                texto4.innerHTML = texto.texto4;
                texto5.innerHTML = texto.texto5;
            },1000)

            setTimeout(() => {
                conteudos.forEach(conteudo => {
                    conteudo.style.opacity = 1;
                })
                titulo.style.opacity = 1;
            }, 1500)
        })
        .catch(error => console.error('Erro buscando textos: ', error));
}
escolher('ptbr')