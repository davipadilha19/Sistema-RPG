let divOpcoesCombate = document.getElementById("div-opcoesCombate");
let visualizarFicha = document.getElementById("div-visualizarPersonagem")

function opcoesCombate() {
  if (divOpcoesCombate.style.visibility === "visible") {
    divOpcoesCombate.style.visibility = "hidden";
  } else {
    divOpcoesCombate.style.visibility = "visible";
  }
}

function visualizarC(){
  if(visualizarFicha.style.visibility === "visible"){
    visualizarFicha.style.visibility = "hidden"
  } else{
    visualizarFicha.style.visibility = "visible"
  }
}