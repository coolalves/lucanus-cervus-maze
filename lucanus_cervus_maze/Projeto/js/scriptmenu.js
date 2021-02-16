var pag = 1;

window.onload = function () {

    document.getElementById("iniciar").onclick = function () {
        window.location.href = "jogo.html";
    }

    document.getElementById("instrucoes").onclick = function () {
        document.getElementById("navegar").style.display = "block";
        document.getElementById("navegar").style.position = "relative";
        document.getElementById("navegar").style.zIndex = "1";
        document.getElementById("menu").style.display = "none";
        document.getElementById("instrucoes1").style.display = "block";
    }

    document.getElementById("historia").onclick = function () {
        document.getElementById("navegar").style.display = "block";
        document.getElementById("navegar").style.position = "relative";
        document.getElementById("navegar").style.zIndex = "1";
        document.getElementById("menu").style.display = "none";
        document.getElementById("story1").style.display = "block";
        document.getElementById("ant").style.display = "none";
        document.getElementById("prox").style.display = "none";
    }

    document.getElementById("instsair").onclick = function () {
        window.location.href = "menu.html";
        document.getElementById("navegar").style.display = "none";
    }

    document.getElementById("ant").onclick = function () {
        pag -= 1;
        if (pag == 1) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "block";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 2) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "block";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 3) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "block";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 4) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "block";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 5) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "block";
        }
    }

    document.getElementById("prox").onclick = function () {
        pag += 1;
        if (pag == 1) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "block";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 2) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "block";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 3) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "block";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 4) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "block";
            document.getElementById("instrucoes5").style.display = "none";
        } else if (pag == 5) {
            console.log(pag);
            document.getElementById("instrucoes1").style.display = "none";
            document.getElementById("instrucoes2").style.display = "none";
            document.getElementById("instrucoes3").style.display = "none";
            document.getElementById("instrucoes4").style.display = "none";
            document.getElementById("instrucoes5").style.display = "block";
        }
    }
}