function validarFormulario () {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const mensagemErro = document.getElementById('mensagemErro').value;

    //Impede o envio de formularios se campos estiverem vazios
    if (nome === '' || email === '' || mensagem === '') {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        return false;
    }
        mensagemErro.textContent = '';
        return true;
}

function validarEmail(email) {
    const validaEmail = /^[^\s@]+[^\s@]+$/;
    return validaEmail.test(email);
}
