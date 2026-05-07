
// VALIDAÇÃO DO FORMULÁRIO
// Seleciona o formulário
const formulario = document.getElementById("formulario");

// Evento de envio
formulario.addEventListener("submit", function (event) {

    // Impede recarregar a página
    event.preventDefault();

    // Captura os valores digitados
    let nome = document.getElementById("nome").value;

    let email = document.getElementById("email").value;

    let mensagem = document.getElementById("mensagem").value;

    // Verifica campos vazios
    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos!");

        return;
    }

    // Verifica email
    if (!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido!");

        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa formulário
    formulario.reset();

});