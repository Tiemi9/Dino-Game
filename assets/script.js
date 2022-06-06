const dino = document.querySelector('.dino');

let isJumping = false;

function handleKeyUp(event) {
    if(event.keyCode === 32) {/*keyCode = cód. do teclado verificar mais em keyCode.info*/
   
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

document.addEventListener('keyup', handleKeyUp); 
    
/*pegando o evento de apertar tecla

document.addEventListener('keyup', function() {
    console.log('apertou!')
}); */