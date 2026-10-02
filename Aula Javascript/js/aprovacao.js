function verAprovacao() {
    let nome = document.getElementById("nome").value;

    let media = Number(document.getElementById("media").value);

    let resultado;

    if (media>=7.0) {
        resultado = "Aprovado(a)"
    }

    else {
        resultado = "Reprovado(a)"
    }

   document.getElementById("nomeResultado").textContent = nome;

   document.getElementById("resultado").textContent = resultado;
}