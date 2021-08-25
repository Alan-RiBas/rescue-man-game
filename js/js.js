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

    var velocidade = 6;
    var posicaoY = parseInt(Math.random * 334);
    var podeAtirar = true;

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
        moveAmigo();
        colisao();

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
            disparo(); //chama função disparo
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

    function moveAmigo() {
        let velocidade = 1;
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left",posicaoX + velocidade);
        
            if(posicaoX > 906) {
                $("#amigo").css("left", 0);
            }
    }

    function disparo() {//finção disparo
	
        if (podeAtirar==true) {
            
            podeAtirar=false;
            
            topo = parseInt($("#jogador").css("top"))
            posicaoX= parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 190;
            topoTiro=topo+53;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top",topoTiro);
            $("#disparo").css("left",tiroX);
            
            var tempoDisparo = window.setInterval(executaDisparo, 30);
        
        }

        function executaDisparo() {// Abre executaDisparo
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX + 20);
    
                if(posicaoX>900){
                    window.clearInterval(tempoDisparo);
                    tempoDisparo = null;
                    $("#disparo").remove();
                    podeAtirar = true;
                }
        }// Fim função executaDisparo
        
    } //FIM função disparo

    function colisao() {//Função colisao
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        //jogador com o inimigo 1 com
        console.log(colisao1);

        if(colisao1.length>0){
            inimigo1X = parseInt($("#inimigo1").css("left"));
	        inimigo1Y = parseInt($("#inimigo1").css("top"));
	        explosao1(inimigo1X,inimigo1Y);

	        posicaoY = parseInt(Math.random() * 334);
	        $("#inimigo1").css("left",694);
	        $("#inimigo1").css("top",posicaoY);
	
        }

    }//Fim da função colisao
    
    


   
} //Fim da função starts
