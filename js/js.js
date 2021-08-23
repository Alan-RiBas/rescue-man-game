function start(){//Inicio da função start()
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1' ></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");


    //Váriaveis principais

    var jogo = {}
    var TECLA = {
        W: 87,
        S:83,
        D: 68
    }

    jogo.pressionou = [];

    var velocidade = 5;
    var posicaoY = parseInt(Math.random * 334);

    //Váriaveis principais

    //verifica se uma tecla foi pressionada

    $(document).keydown(function(e) {
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function(e) {
        jogo.pressionou[e.which] = false;
    });

    


    //game Loop

    jogo.timer = setInterval(loop, 30);

    function loop() {

        moveFundo();
        moveJogador();
        moveInimigo1();
        moveInimigo2();

    } //Fim da Funçao gameLoop

    //Função movimenta o fundoGame
    function moveFundo(){
        esquerda = parseInt($("#fundoGame").css ("background-position"));
        $("#fundoGame").css("background-position",  esquerda-2);
    };

    //Fim da função movimenta o fundoGame

    function moveJogador(){

        if(jogo.pressionou[TECLA.W]){
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo-10);
                
                if(topo <= 0){
                    $("#jogador").css("top", topo+10);
                }
        };

        if(jogo.pressionou[TECLA.S]){
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo+10);

            if(topo >= 434){
                $("#jogador").css("top", topo-10);
            }
        
        }

        if(jogo.pressionou[TECLA.D]){
            //chama função disparo
        }
    }//Fim da função moveJogador

    function moveInimigo1() { //Função movimentaçao inimigo 1
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);

            if(posicaoX <= 0) {
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left",694);
                $("#inimigo1").css("top",posicaoY);
            }
    }// FIM da função movimentaçao inimigo 1

    function moveInimigo2() {//Função movimentaçao inimigo 2
        let velocidade = 3;
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left",posicaoX-velocidade);
        
            if(posicaoX <= 0) {
                $("#inimigo2").css("left", 775);
            }
    }// FIM da função movimentaçao inimigo 2

} //Fim da função start

