const formulario = document.querySelector('#form-login');
const inputNome = document.querySelector('#nome');
const inputSenha = document.querySelector('#senha');
const mensagemErro = document.querySelector('#mensagem-erro')

formulario.addEventListener('submit', function(event){

    event.preventDefault();

    
    const nomeDigitado = inputNome.value.trim().toLowerCase();
    const senhaDigitada = inputSenha.value.trim().toLowerCase();

    
    if (nomeDigitado !== 'numa'){
        mensagemErro.textContent = 'Esse presente é pra numa e pra família dela';
        return;
    }

    if (senhaDigitada !== 'scar'){
        mensagemErro.textContent = "senha incorreta, a senha tem olhos verdes";
        return;
    }

    window.location.href = "./presente.html";
});