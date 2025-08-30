const form = document.querySelector('.login-form');
const usuarioInput = form.querySelector("input[type='text']");
const senhaInput = form.querySelector("input[type='password']");

form.addEventListener('submit', (event) => {
    // Adicionar o event.preventDefault() evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '') {
        alert("Por favor preencha os campos");
    } else if(Nusuario === '' || Nsenha === ''){
        alert("Cadastre")
    } else if (usuario === Nusuario && senha === Nsenha) {
        alert("Bem vindo!")
        location.replace("/../tarefa/index.html", "_self")
    } else {
        alert( "Usuário ou senha incorreto, tente novamente" )
    
    }

})