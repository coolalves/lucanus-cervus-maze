window.onload = function () {

    var sound = new Audio('sound/victory.ogg');
    sound.autoplay = true;
    //requer permissão do utilizador

    document.getElementById("repetir").onclick = function () {
        window.location.href = "jogo.html";
    }

    document.getElementById("mais").onclick = function () {
        window.location.href = "http://www.vacaloura.pt/";
    }

    document.getElementById("sair").onclick = function () {
        window.location.href = "menu.html";
    }

}