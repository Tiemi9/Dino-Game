const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.keyCode === 32) {/*keyCode = cód. do teclado verificar mais em keyCode.info*/
    
    jump();
    }
}

function jump() {
    let position = 0; //posição inicial

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