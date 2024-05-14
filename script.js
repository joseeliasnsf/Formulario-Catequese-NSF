const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    

    

    // Processamento dos dados do formulário (ex: enviar para servidor)
    console.log('Dados do formulário:', {
        nome: nome,
        email: email,
        senha: senha
    });

    // Limpar o formulário
    formulario.reset();
});
