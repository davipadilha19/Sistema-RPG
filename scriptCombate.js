let divOpcoesCombate = document.getElementById("div-opcoesCombate");
let visualizarFicha = document.getElementById("div-visualizarPersonagem");
let visualizarCriatura = document.getElementById("div-visualizarCriatura");
let rolagemDeDados = document.getElementById("div-rolagemDeDados");

function opcoesCombate() {
  if (divOpcoesCombate.style.visibility === "visible") {
    divOpcoesCombate.style.visibility = "hidden";
  } else {
    divOpcoesCombate.style.visibility = "visible";
    visualizarFicha.style.visibility = "hidden";
    visualizarCriatura.style.visibility = "hidden";
    rolagemDeDados.style.visibility = "hidden";
  }
}

function visualizarC() {
  if (visualizarFicha.style.visibility === "visible") {
    visualizarFicha.style.visibility = "hidden";
  } else {
    visualizarFicha.style.visibility = "visible";
    divOpcoesCombate.style.visibility = "hidden";
    visualizarCriatura.style.visibility = "hidden";
    rolagemDeDados.style.visibility = "hidden";
  }
}
function visualizarI() {
  if (visualizarCriatura.style.visibility === "visible") {
    visualizarCriatura.style.visibility = "hidden";
  } else {
    visualizarCriatura.style.visibility = "visible";
    divOpcoesCombate.style.visibility = "hidden";
    visualizarFicha.style.visibility = "hidden";
    rolagemDeDados.style.visibility = "hidden";
  }
}
function lancarDado() {
  if (rolagemDeDados.style.visibility === "visible") {
    rolagemDeDados.style.visibility = "hidden";
  } else {
    rolagemDeDados.style.visibility = "visible";
    divOpcoesCombate.style.visibility = "hidden";
    visualizarFicha.style.visibility = "hidden";
    visualizarCriatura.style.visibility = "hidden";
  }
}
