const botao = document.getElementById("MudarCor");
const fundo = document.getElementById("Fundo");
const corletra1 = document.getElementById("CorLetra1");
const corletra2 = document.getElementById("CorLetra2");
const corletra3 = document.getElementById("CorLetra3");

var count = 0;

botao.addEventListener("click", function(e) {
    if (count == 1){
        botao.src = "img/branco.png"
        fundo.style.background = "var(--ColorBlack)"
        fundo.style.color = "var(--ColorWhite)"
        corletra1.style.color = "var(--ColorWhite)"
        corletra2.style.color = "var(--ColorWhite)"
        corletra3.style.color = "var(--ColorWhite)"
        count--
    } else if (count == 0){
        botao.src = "img/preto.png"
        fundo.style.background = "var(--ColorWhite)"
        fundo.style.color = "var(--ColorBlack)"
        corletra1.style.color = "var(--ColorBlack)"
        corletra2.style.color = "var(--ColorBlack)"
        corletra3.style.color = "var(--ColorBlack)"
        count++
    }
})

corletra1.addEventListener("mouseover", function(e) {
    corletra1.style.color = "var(--ColorGrey)"
})

corletra1.addEventListener("mouseout", function(e) {
    if (count == 1){
        corletra1.style.color = "var(--ColorBlack)"
    } else if (count == 0){
        corletra1.style.color = "var(--ColorWhite)"
    }
})

corletra2.addEventListener("mouseover", function(e) {
    corletra2.style.color = "var(--ColorGrey)"
})

corletra2.addEventListener("mouseout", function(e) {
    if (count == 1){
        corletra2.style.color = "var(--ColorBlack)"
    } else if (count == 0){
        corletra2.style.color = "var(--ColorWhite)"
    }
})

corletra3.addEventListener("mouseover", function(e) {
    corletra3.style.color = "var(--ColorGrey)"
})

corletra3.addEventListener("mouseout", function(e) {
    if (count == 1){
        corletra3.style.color = "var(--ColorBlack)"
    } else if (count == 0){
        corletra3.style.color = "var(--ColorWhite)"
    }
})


