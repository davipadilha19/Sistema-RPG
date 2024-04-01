let divOpcoesUsuario = document.getElementById("div-opcoesUsuario");

function opcoesUsuario() {
  if (divOpcoesUsuario.style.visibility === "visible") {
    divOpcoesUsuario.style.visibility = "hidden"; // Usar '=' para atribuir o valor
    // alert("hidden");
  } else {
    divOpcoesUsuario.style.visibility = "visible"; // Usar '=' para atribuir o valor
    // alert("visible");
  }
}
