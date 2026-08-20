const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    let curtiu = false
    botao.addEventListener("click", curtir)
function curtir() {
    let curtidas = botao.querySelector("span")
     
    if(curtiu == false){
     curtiu = true
     curtidas.textContent++
     botao.style.backgroundColor= "pink"
    }

    else{
        curtiu = false
     curtidas.textContent--
     botao.style.backgroundColor= "lightgray"
    }
}

});