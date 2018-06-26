import '../styles/lighter_auto.scss';

export function lighter() {
    const lights = document.querySelector('.wrapper_lighter');
    const lightsRed = lights.querySelector('.lighter__red');
    const lightsYellow = lights.querySelector('.lighter__yellow');
    const lightsGreen = lights.querySelector('.lighter__green');
    const lightActive = 'lighter__on';
    let lightState;
    
    function turnOff() {
        lightsRed.classList.remove(lightActive);
        lightsYellow.classList.remove(lightActive);
        lightsGreen.classList.remove(lightActive);
    }
    
    function switcher(light) {
        if (lightState == light){
            turnOff();
            lightState = undefined;
        }else{
        turnOff();
        lightState = light;
        light.classList.add(lightActive);}
    }



    lightsRed.addEventListener('click', function(){
        switcher(lightsRed);
    });
    lightsYellow.addEventListener('click', function(){
        switcher(lightsYellow);
    });
    lightsGreen.addEventListener('click', function(){
        switcher(lightsGreen);
    });
}