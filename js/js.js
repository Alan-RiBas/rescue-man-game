function start(){//Inicio da função start()
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1' ></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");


    //Váriaveis principais

var jogo = {}

//game Loop

jogo.timer = setInterval(loop, 30);

function loop() {

    moveFundo();

} //Fim da Funçao gameLoop
    
//Função movimenta o fundoGame
function moveFundo(){
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda-3);
}

} //Fim da função start

