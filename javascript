function mostrarSaudacao() {
    var nome = document.getElementById("nome").value;
    var saudacao = document.getElementById("saudacao");
    
    if (nome === "") {
        saudacao.textContent = "Por favor, digite seu nome.";
    } else {
        saudacao.textContent = "Olá, " + nome + "! Bem-vindo!";
    }
}
