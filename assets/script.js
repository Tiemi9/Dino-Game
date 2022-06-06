const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.keyCode === 32) {/*keyCode = cód. do teclado verificar mais em keyCode.info*/
    
    jump();
    }
}

function jump() {
    let position = 0; //posição inicial

    //pula ao apertat espaço
    let upInterval = setInterval(() => {
        position += 20;

        dino.style.bottom = position + 'px';
    }, 20); //será executado a cada 20ms
}

document.addEventListener('keyup', handleKeyUp); 
    
/*pegando o evento de apertar tecla

document.addEventListener('keyup', function() {
    console.log('apertou!')
}); */