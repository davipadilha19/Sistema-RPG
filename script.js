let divOpcoesUsuario = document.getElementById("div-opcoesUsuario");

function opcoesUsuario() {
  if (divOpcoesUsuario.style.visibility === "visible") {
    divOpcoesUsuario.style.visibility = "hidden";
  } else {
    divOpcoesUsuario.style.visibility = "visible";
  }
}
