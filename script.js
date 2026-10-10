
const botaoTema = document.getElementById("botao-tema");


function aplicarTema(tema) {
  if (tema === "escuro") {
    document.body.classList.add("tema-escuro");
    botaoTema.textContent = "Modo claro";
  } else {
    document.body.classList.remove("tema-escuro");
    botaoTema.textContent = "Modo escuro";
  }
}


function carregarTemaSalvo() {
  try {
    return localStorage.getItem("tema");
  } catch (erro) {
    return null;
  }
}


function salvarTema(tema) {
  try {
    localStorage.setItem("tema", tema);
  } catch (erro) {
    // Sem localStorage: o tema só vale até recarregar a página
  }
}


botaoTema.addEventListener("click", function () {
  const novoTema = document.body.classList.contains("tema-escuro") ? "claro" : "escuro";
  aplicarTema(novoTema);
  salvarTema(novoTema);
});


aplicarTema(carregarTemaSalvo() === "escuro" ? "escuro" : "claro");


document.getElementById("ano-atual").textContent = new Date().getFullYear();