const forms = document.querySelector('.form');

const inputUsuario = forms.querySelector('#usuario');
const inputEmail = forms.querySelector('#email');
const inputTelefone = forms.querySelector('#telefone');

const inputSenha = forms.querySelector('#senha');
const inputCsenha = forms.querySelector('#Csenha');

let Nusuario = '';
let Nsenha = '';

forms.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const usuario1 = inputUsuario.value.trim();
    const senha1 = inputSenha.value.trim();
    const Csenha = inputCsenha.value.trim();

    if (usuario1 === '' || senha1 === '' || Csenha === ''){
        alert('Insira os dados')
    } else if(senha1 !== Csenha){
        alert('senha incompativeis')
    } else {
        Nusuario = usuario1;
        Nsenha = senha1;
    }
})