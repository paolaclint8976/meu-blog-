const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    botao.addEventListener("click", curtir)
function curtir() {
    let curtidas = document.querySelector("span")
    curtidas.textContent++
}

});