var tabuleiro = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 2, 0, 0, 1, 4, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 5, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1]
]; //array relativo ao nivel1

var nivel2 = [
    [2, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 4, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1],
    [1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 2, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 2, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; //array relativo ao nivel2

var ntroncos = 18; //total de troncos
var pontos = 0; //pontuaçao inicial
var certa; //resposta certa
var errada1; //opcao errada
var errada2; //...
var errada3; //...
var state_pergunta = 0; //estado de pergunta ativado: congela o jogador enquanto mostra a pergunta
var state_nivel = 1; //estado que indica em que nivel esta
var state_musica = 0; //estado da musica
var vidas = 3; //numero de vidas
var max_segundos = 180; //tempo inicial
var conta_segundos = 0; //temporizador
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; //indices do array das perguntas
var player = {
    x: 0,
    y: 0,
}; //tuple com a posição do jogador

var N = 15; // N (numero de blocos 15x15) tem que ser divisor da largura, largura%N == 0
var largura = 600; //largura da canva
var tamanho_bloco = largura / N; //dividir em grade/quadrados
var canvas;
var ctx; //variavel de contexto
var direcao = "w"; //direçao do jogador
var prox_pergunta = 0; //percorrer o array de perguntas
var p = [
    ["O macho tem a mandíbula em forma de…", "Tenaz", "Pinça", "U", "Coração"],
    ["Podemos encontrar larvas de vaca-loura em…", "Aterros sanitários", "Poças", "Esgotos", "Raízes de árvores antigas"],
    ["Que nome se dá à fase intermédia da vaca-loura, anterior à fase adulta?", "Pupa", "Larva", "Adolescência", "Casulo"],
    ["Depois de acasalar, a vaca-loura macho…", "Arranja uma nova parceira", "Morre", "Muda de abrigo", "É comida pela fêmea"],
    ["Qual é o período de atividade de um macho adulto?", "1 a 2 meses", "1 a 2 anos", "24h a 72h", "3 a 4 semanas"],
    ["A vaca-loura é também conhecida como…", "Abadejo", "Escaravelho-javali", "Besouro-martelo", "Ovelha-loura"],
    ["Quando podemos começar a avistar as vacas-louras?", "Outono", "Inverno", "Primavera", "Verão"],
    ["A vaca-loura é uma espécie quase ameaçada por causa…", "Das cobras", "Das alterações climáticas", "Da acidez dos solos", "Dos caçadores"],
    ["A vaca-loura prefere…", "Oliveiras", "Carvalhos", "Pinheiros", "Cerejeiras"],
    ["A vaca-loura voa…", "Ao início da noite", "Durante o dia", "Quando chove", "Quando apanha boleia"],
    ["A cabeça da vaca-loura fêmea é…", "Preta", "Esverdeada", "Castanha", "Preta com manchas brancas"],
    ["O nome científico da vaca-loura é…", "Lucanus Cervilis", "Ceviche Cervus", "Lucanus Cervus", "Lucas Cervus"],
    ["As mandíbulas das vacas-louras macho servem para…", "Ajudar no acasalamento", "Segurar madeira", "Decorar", "Lutar"],
    ["A vaca-loura é o maior escaravelho…", "Da Europa", "Da América", "De África", "Da Antártida"],
    ["Para se reproduzirem, os machos…", "Desfilam", "Dançam", "Lutam até à morte", "Oferecem prendas"],
    ["Os adultos alimentam-se de…", "Bagas", "Seiva", "Folhas", "Fezes"],
    ["A vaca-loura é benéfica para as florestas porque…", "Destrói as pragas", "Rega as árvores", "Limpa as florestas", "Regula os nutrientes do solo"],
    ["As fêmeas podem ser avistadas até setembro devido…", "À falta de predadores", "Ao bom tempo", "À postura dos ovos", "À busca de alimento para armazenar"]
];

var audio_effect; //efeitos sonoros
var tamanho_jogador = tamanho_bloco - 6; //tamanho inicial da larva
var audio_forest; //som ambiente
audio_forest = new Audio('sound/forest.ogg');

window.onload = function () {
    preparar(); //prepara jogo
    shuffleArray(nums); //mistura array
    tempo(); //inicia o temporizador
};

function preparar() {
    document.getElementById("musica").onclick = function () {
        if (state_musica == 0) {
            audio_forest.loop = true;
            audio_forest.play();
            document.getElementById("musica").src = 'img/pause.png';
            state_musica += 1;
        } else if (state_musica == 1) {
            audio_forest.loop = false;
            audio_forest.pause();
            document.getElementById("musica").src = 'img/play.png';
            state_musica -= 1;
        }
    }

    document.getElementById("pontos").innerHTML = "Troncos: " + pontos.toString() + "/" + (ntroncos / 3).toString();
    canvas = document.getElementById("areadejogo");
    ctx = canvas.getContext("2d"); //contexto de renderização 2d

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (tabuleiro[i][j] === 1) {
                ctx.beginPath();
                ctx.fillStyle = "#251d1b";
                ctx.fillRect(j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco); //(posição, posição, tamanho, tamanho)
            } else if (tabuleiro[i][j] === 2) {
                base_imagetronco = new Image();
                base_imagetronco.setAttribute("id", "tronco" + i);
                base_imagetronco.src = "img/trunk.png";
                base_imagetronco.onload = function () {
                    ctx.drawImage(base_imagetronco, j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco);
                }
            } else if (tabuleiro[i][j] === 3) {
                if (pontos < ntroncos / 3) {
                    base_imagesaida = new Image();
                    base_imagesaida.setAttribute("id", "saida");
                    base_imagesaida.src = "img/saidablock.png";
                    base_imagesaida.onload = function () {
                        ctx.drawImage(base_imagesaida, j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco);
                    }
                } else if (pontos >= ntroncos / 3) {
                    base_imagesaida = new Image();
                    base_imagesaida.setAttribute("id", "saida");
                    base_imagesaida.src = "img/saida.png";
                    base_imagesaida.onload = function () {
                        ctx.drawImage(base_imagesaida, j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco);
                    }
                }
            } else if (tabuleiro[i][j] === 4) {
                base_imagevida = new Image();
                base_imagevida.setAttribute("id", "vida");
                base_imagevida.src = "img/leaf.png";
                base_imagevida.onload = function () {
                    ctx.drawImage(base_imagevida, j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco);
                }
            } else if (tabuleiro[i][j] === 5) {
                base_imagegarrafa = new Image();
                base_imagegarrafa.setAttribute("id", "garrafa");
                base_imagegarrafa.src = "img/garrafa.png";
                base_imagegarrafa.onload = function () {
                    ctx.drawImage(base_imagegarrafa, j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco);
                }
            } else if (tabuleiro[i][j] == 6) {
                base_imagefemea = new Image();
                base_imagefemea.setAttribute("id", "femea");
                base_imagefemea.src = "img/femea4.png";
                base_imagefemea.onload = function () {
                    ctx.drawImage(base_imagefemea, j * tamanho_bloco, i * tamanho_bloco, tamanho_bloco, tamanho_bloco);
                }
            }
        }
        desenhajogador();
        window.onkeydown = processa_tecla;
    }
}

function desenhajogador() {
    base_image = new Image();
    base_image.setAttribute("id", "lagarta");

    switch (direcao) {
        case "w":
            if (pontos < ntroncos / 3) {
                base_image.src = "img/lagartaw.png";
            } else if (ntroncos >= ntroncos / 2) {
                base_image.src = "img/machow.png";
            }
            break;
        case "a":
            if (pontos < ntroncos / 3) {
                base_image.src = "img/lagartaa.png";
            } else if (ntroncos >= ntroncos / 2) {
                base_image.src = "img/machoa.png";
            }
            break;
        case "s":
            if (pontos < ntroncos / 3) {
                base_image.src = "img/lagartas.png";
            } else if (ntroncos >= ntroncos / 2) {
                base_image.src = "img/machos.png";
            }
            break;
        case "d":
            if (pontos < ntroncos / 3) {
                base_image.src = "img/lagartad.png";
            } else if (ntroncos >= ntroncos / 3) {
                base_image.src = "img/machod.png";
            }
            break;
    }
    base_image.onload = function () {
        ctx.drawImage(base_image, player.x, player.y, tamanho_jogador, tamanho_jogador);
    };
}

function processa_tecla(event) {
    switch (event.key) {
        case "d":
            direcao = "d";
            move_lagarta(1, [1, 0]);
            break;
        case "D":
            direcao = "d";
            move_lagarta(1, [1, 0]);
            break;
        case "ArrowRight":
            direcao = "d";
            move_lagarta(1, [1, 0]);
            break;
        case "w":
            direcao = "w";
            move_lagarta(1, [0, -1]);
            break;
        case "W":
            direcao = "w";
            move_lagarta(1, [0, -1]);
            break;
        case "ArrowUp":
            direcao = "w";
            move_lagarta(1, [0, -1]);
            break;
        case "a":
            direcao = "a";
            move_lagarta(1, [-1, 0]);
            break;
        case "A":
            direcao = "a";
            move_lagarta(1, [-1, 0]);
            break;
        case "ArrowLeft":
            direcao = "a";
            move_lagarta(1, [-1, 0]);
            break;
        case "s":
            direcao = "s";
            move_lagarta(1, [0, 1]);
            break;
        case "S":
            direcao = "s";
            move_lagarta(1, [0, 1]);
            break;
        case "ArrowDown":
            direcao = "s";
            move_lagarta(1, [0, 1]);
            break;
    }
}

function move_lagarta(vel, movimento) {
    movimento = movimento.map((x) => x * tamanho_bloco); //precorre todos os elementos do array e multiplica pelo tamanho do bloco
    var prox_y = movimento[0] + player.x;
    prox_y /= tamanho_bloco;
    var prox_x = movimento[1] + player.y;
    prox_x /= tamanho_bloco;
    if (0 <= prox_x && prox_x < N && 0 <= prox_y && prox_y < N) {
        if (tabuleiro[prox_x][prox_y] == 0 && state_pergunta != 1) {
            player.x += movimento[0]; //atualiza a componente x da coordenada da lagarta
            player.y += movimento[1]; //""""""y
        } else if (tabuleiro[prox_x][prox_y] == 4) {
            if (vidas == 3) {
                tabuleiro[prox_x][prox_y] = 0;
            } else if (vidas == 2) {
                vidas += 1;
                document.getElementById("vida3").style.display = "inline-block";
                tabuleiro[prox_x][prox_y] = 0;
                audio_effect.src = 'sound/comer.ogg';
                audio_effect.play();
            } else if (vidas == 1) {
                vidas += 1;
                document.getElementById("vida2").style.display = "inline-block";
                tabuleiro[prox_x][prox_y] = 0;
                audio_effect.src = 'sound/comer.ogg';
                audio_effect.play();
            }
        } else if (tabuleiro[prox_x][prox_y] == 5) {
            perde();
            tabuleiro[prox_x][prox_y] = 0;
            document.getElementById("vida1").style.display = "none";
            document.getElementById("vida2").style.display = "none";
            document.getElementById("vida3").style.display = "none";
        } else if (tabuleiro[prox_x][prox_y] == 6) {
            window.location.href = "vitoria.html";
        } else if (tabuleiro[prox_x][prox_y] == 2) {
            state_pergunta = 1;
            let usado = nums[prox_pergunta++];
            switch (usado) {
                case 0:
                    certa = 2;
                    errada1 = 1;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 1:
                    certa = 4;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 3;
                    break;
                case 2:
                    certa = 1;
                    errada1 = 2;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 3:
                    certa = 2;
                    errada1 = 1;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 4:
                    certa = 1;
                    errada1 = 2;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 5:
                    certa = 1;
                    errada1 = 2;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 6:
                    certa = 3;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 4;
                    break;
                case 7:
                    certa = 4;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 3;
                    break;
                case 8:
                    certa = 2;
                    errada1 = 1;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 9:
                    certa = 1;
                    errada1 = 2;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 10:
                    certa = 1;
                    errada1 = 2;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 11:
                    certa = 3;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 4;
                    break;
                case 12:
                    certa = 4;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 3;
                    break;
                case 13:
                    certa = 1;
                    errada1 = 2;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 14:
                    certa = 3;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 4;
                    break;
                case 15:
                    certa = 2;
                    errada1 = 1;
                    errada2 = 3;
                    errada3 = 4;
                    break;
                case 16:
                    certa = 4;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 3;
                    break;
                case 17:
                    certa = 3;
                    errada1 = 1;
                    errada2 = 2;
                    errada3 = 4;
                    break;
            }
            document.getElementById("pergunta").style.display = "block";
            document.getElementById("perg").innerHTML = p[usado][0];
            document.getElementById("resp1").innerHTML = p[usado][1];
            document.getElementById("resp2").innerHTML = p[usado][2];
            document.getElementById("resp3").innerHTML = p[usado][3];
            document.getElementById("resp4").innerHTML = p[usado][4];
            document.getElementById("resp" + certa.toString()).onclick = function () {
                pontos++;
                audio_effect = new Audio('sound/correct.ogg');
                audio_effect.play();
                document.getElementById("pergunta").style.display = "none";
                state_pergunta = 0;
                tamanho_jogador += 1;
                max_segundos += 10;
            };

            document.getElementById("resp" + errada1.toString()).onclick = function () {
                errada();
                if (vidas == 0) {
                    perde();
                }
            };

            document.getElementById("resp" + errada2.toString()).onclick = function () {
                errada();
                if (vidas == 0) {
                    perde();
                }
            };

            document.getElementById("resp" + errada3.toString()).onclick = function () {
                errada();
                if (vidas == 0) {
                    perde();
                }
            };

            player.x += movimento[0]; //atualiza a componente x da coordenada da lagarta
            player.y += movimento[1]; //""""""y
            tabuleiro[prox_x][prox_y] = 0;
        } else if (tabuleiro[prox_x][prox_y] == 3) {
            if (pontos >= ntroncos / 3) {
                state_nivel = 2;
                audio_effect.src = 'sound/unlock.ogg';
                audio_effect.play();
                tabuleiro = nivel2;
                state_nivel = 2;
            }
        }
    }
    ctx.clearRect(0, 0, largura, largura);
    preparar();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function perde() {
    document.getElementById("tempo").style.display = "none";
    document.getElementById("vidas").style.display = "none";
    state_pergunta = 1;
    audio_effect = new Audio('sound/lost.ogg');
    audio_effect.play();
    document.getElementById("perdeu").style.display = "block";
    document.getElementById("btntentar").onclick = function () {
        location.reload();
    }
    document.getElementById("btndesistir").onclick = function () {
        window.location.href = "menu.html";
    }

}

function tempo() {
    let segundo = function () {
        if (conta_segundos >= max_segundos) {
            clearInterval(temporizador);
            perde();
            return;
        }
        document.getElementById("tempo").innerHTML = "Tempo restante: " + (max_segundos - conta_segundos) + "s";
        conta_segundos++;
    };
    var temporizador = setInterval(segundo, 1000);
}

function errada() {
    audio_effect = new Audio('sound/wrong.ogg');
    audio_effect.play();
    document.getElementById("pergunta").style.display = "none";
    state_pergunta = 0;
    document.getElementById("vida" + vidas.toString()).style.display = "none";
    vidas--;
}