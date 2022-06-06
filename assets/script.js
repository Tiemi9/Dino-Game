const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;

function handleKeyUp(event) {
    if(event.keyCode === 32) {//keyCode = cód. do teclado verificar mais em keyCode.info
   
    //para que não haja falha no pulo, ou pulo sobre pulo
    if(!isJumping) {
    jump();
      }
    }
}

function jump() {
    let position = 0; //posição inicial

    isJumping = true; //boleano para indicar momento de pular

    //pula ao apertar espaço 
    let upInterval = setInterval(() => {

      //determina limite de altura do pulo
      if(position >= 150) {
        clearInterval(upInterval); //limpando o intervalo
      
        //descendo
        let downInterval = setInterval(() => {
            
             //determina limite de descida
            if(position <= 0) {
                clearInterval(downInterval);
                isJumping = false; //boleano para indicar que não esta pulando
            } else {
            position -=20;
            dino.style.bottom = position + 'px';
            }
        }, 20);

    } else {
        //subindo
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 20); //será executado a cada 20ms
}

function createCactus() {
    
    const cactus = document.createElement('div'); //criando uma div no html
    let cactusPosition = 1000; //posição inicial do cacto
    
    //criando uma constante para gerar números aleatórios para intervalos dos cactos
    let randomTime = Math.random() * 6000; //math serve para fazer algumas operacões matemáticas
    //console.log(randomTime); TESTE PARA VER OS NUMEROS ALEATÓRIOS

    cactus.classList.add('cactus'); //criando uma classe para a div
    cactus.style.left = cactusPosition + 'px'; 
    background.appendChild(cactus); //colocando a div dentro da div background

    //fazendo o cacto se mover para a esquerda
    let leftInterval = setInterval(() => {
       

        //para tirar o cacto que passou pelo dino
        if(cactusPosition < -60) {
            clearInterval(leftInterval); 
            background.removeChild(cactus); //remove a div do background
        } else {
            cactusPosition -= 10; //velocidade que se move para a esquerda, aqui poderá aumentar o diminuir a velocidade conforme tempo de jogo
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime); //para executar uma função após um tempo determinado (nesse caso aleatório)
}

createCactus();

document.addEventListener('keyup', handleKeyUp); 
    
/*pegando o evento de apertar tecla

document.addEventListener('keyup', function() {
    console.log('apertou!')
}); */