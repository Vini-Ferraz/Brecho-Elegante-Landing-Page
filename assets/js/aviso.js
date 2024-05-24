const avisoPopUp = document.getElementById("aviso");
const btnAvisoPopUp = document.getElementById("btnPopUp");

btnAvisoPopUp.addEventListener("click", closePopUp);

function closePopUp() {
  avisoPopUp.style.display = "none";
}
