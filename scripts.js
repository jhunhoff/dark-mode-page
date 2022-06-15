function toggledarkmode(){
addclassdarkmode();
mudatexto();
}

function addclassdarkmode(){
botao.classList.toggle("dark-mode");
header.classList.toggle("dark-mode");
footer.classList.toggle("dark-mode");
body.classList.toggle("dark-mode");
}

function mudatexto(){
if(body.classList.contains("dark-mode")){
    header.innerHTML = "Dark mode ON";
    botao.innerHTML = "Ativar light mode";
}
else{
    header.innerHTML = "Light mode ON";
    botao.innerHTML = "Ativar dark mode";

}

}

const botao = document.getElementsByClassName("botao")[0];
const header = document.getElementById("header1");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];


botao.addEventListener("click", toggledarkmode);

