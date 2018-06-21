export function clickCounter() {
    const input_red = document.querySelector('.input_red');
    const input_yellow = document.querySelector('.input_yellow');
    const input_green = document.querySelector('.input_green');
    const content_show_red = document.querySelector('.content_show_red');

    input_red.addEventListener('click', clickRed);
    input_yellow.addEventListener('click', clickYellow);
    input_green.addEventListener('click', clickGreen);

    let redCounter = 2;
    let yellowCounter = 2;
    let greenCounter = 2;

    function clickRed() {
        redCounter ++ ;
        if (redCounter > 2){
            //content_show_red.classList.remove('content_show_red');
            redCounter = 1;
        }
    }
    function clickYellow() {
        yellowCounter ++ ;         
        if (yellowCounter > 2){
            yellowCounter = 1;
        }
    }
    function clickGreen() {
        greenCounter ++ ;
        if (greenCounter > 2){
            greenCounter = 1;
        }
    }
    
    
    
    
}