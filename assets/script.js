const dino = document.querySelector('.dino');

function handleKeyUp (event) {
    if(event.keyCode === 32) /*keyCode = cód. do teclado verificar mais em keyCode.info*/
    console.log('Apertou espaço');
}

document.addEventListener('keyup', handleKeyUp); 
    
/*pegando o evento de apertar tecla

document.addEventListener('keyup', function() {
    console.log('apertou!')
}); */