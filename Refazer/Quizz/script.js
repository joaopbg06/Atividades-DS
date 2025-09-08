let caixaPergunta = document.getElementById('box');
let elementoPergunta = document.getElementById('pergunta');
let answerButtons = document.getElementById('answerButtons');
let feedback = document.getElementById('feedback');

let imgIndice = 0;
let IMAGENS = ["img/imagem1.png", "img/imagem2.png", "img/imagem3.png", "img/imagem4.png", "img/imagem5.png", ];
const IMG = document.getElementById('carrosselImagem');


let erros = 0;
let acertos = 0;

const PERGUNTAS = [
    {
        pergunta:'Na segunda guerra mundial, quais países estavam no eixo?',
        respostas: [
            {texto: 'Alemanha, Brasil e França', correta: false},
            {texto: 'Japão, URSS e Italia', correta: false},
            {texto: 'EUA, Inglaterra e URSS', correta: false},
            {texto: 'Japão, Italia, Alemanha', correta: true}
        ]
    },

    {
        pergunta:'Quais são os principal criador do liberalismo?',
        respostas: [
            {texto: 'John Locke', correta: true},
            {texto: 'karl marx', correta: false},
            {texto: 'Micael Bakunin', correta: false},
            {texto: 'Górgias', correta: false}
        ]
    },

    {
        pergunta:'Quais das alternativas melhor descreve o Heliocentrismo',
        respostas: [
            {texto: 'Que a Terra é o centro do universo', correta: false},
            {texto: 'O sol é o centro do sistema solar', correta: false},
            {texto: 'O sol é o centro do universo', correta: true},
            {texto: 'Que o universo gira em torno de Deus', correta: false}
        ]
    },

    {
        pergunta:'O que significa o termo universo observável',
        respostas: [
            {texto: 'O universo é limitado pela a falta de tecnolgia', correta: false},
            {texto: 'É tudo aquilo que é possivel se ver', correta: true},
            {texto: 'Tudo aquilo que existe, existiu ou existirá', correta: false},
            {texto: 'toda matéria que é possivel ver a olho nu', correta: false}
        ]
    },

    {
        pergunta:'O que é a hipótese da floresta negra',
        respostas: [
            {texto: 'A teória que comprova o lobo pidão', correta: false},
            {texto: 'Fala sobre o medo do outro lado, ou seja, a vida pos-morte', correta: false},
            {texto: 'E o nome de um sistema de RPG', correta: false},
            {texto: 'O fato de que não há sinal vida no universo por medo de outras civilizações', correta: true}
        ]
    }
];

let indicePerguntaAtual = 0

function mostrarPergunta(pergunta){
    elementoPergunta.innerHTML = pergunta.pergunta;
    answerButtons.innerHTML='';
    pergunta.respostas.forEach(respostas => {
        const BOTAO = document.createElement('button');
        BOTAO.innerText = respostas.texto;
        BOTAO.classList.add('answerButton');
        BOTAO.addEventListener('click', () => selecionarResposta(respostas))
        answerButtons.appendChild(BOTAO);
    })
;}

function selecionarResposta(resposta){
    const CORRETA = resposta.correta;
    
    if(CORRETA === true){
        indicePerguntaAtual++
        feedback.innerText = ''
        acertos += 10;
        imgIndice += 1;
        carregar()
    }

    else if( erros >= 2 ){
        indicePerguntaAtual = 0
        erros = 0;
        acertos = 0;
        imgIndice = 0;
        carregar()
        mostrarPergunta(PERGUNTAS[indicePerguntaAtual])
        alert('Limite de erros atingidos')
    }

    else{
        feedback.innerText = 'Resposta incorreta!'
        feedback.style.color = 'red'
        erros += 1
    }


    
    if(indicePerguntaAtual < PERGUNTAS.length){
        mostrarPergunta(PERGUNTAS[indicePerguntaAtual]);
    }
    else{
        elementoPergunta.style.display = 'none'
        answerButtons.style.display = 'none'
        feedback.innerText = 'parabéns ' + acertos + ' pontos'
        feedback.style.color = 'green'
        

        const RECOMECO = confirm('Gostaria de recomeçar');
        if (RECOMECO === true){
            indicePerguntaAtual = 0;
            acertos = 0;
            erros = 0;
            imgIndice = 0
            mostrarPergunta(PERGUNTAS[indicePerguntaAtual])
            elementoPergunta.style.display = 'block'
            answerButtons.style.display = 'flex'
            carregar()
        }
        else{
            feedback.style.fontSize = 40 + 'px';
        }

        
}}

function carregar() {
    IMG.src = IMAGENS[imgIndice];
}

mostrarPergunta(PERGUNTAS[indicePerguntaAtual])

carregar()