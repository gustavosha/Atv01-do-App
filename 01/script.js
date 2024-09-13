var nome = prompt("Qual o seu nome")

document.getElementById("user-name").textContent = nome;

document.getElementById("sair").onclick = function() {
    alert("Você clicou em Sair.");
};

