import '../styles/base.scss';

export function clickCounterJs() {
    const lights = document.querySelector('.content_show__js');
    const lightsRed = document.querySelector('.content_show__red_js');
    const lightsYellow = document.querySelector('.content_show__yellow_js');
    const lightsGreen = document.querySelector('.content_show__green_js');

    function redShow() {
      lightsRed.classList.add('content_show__active_js');
      lightsYellow.classList.remove('content_show__active_js');
      lightsGreen.classList.remove('content_show__active_js');
    }
    function yellowShow() {
      lightsYellow.classList.add('content_show__active_js');
      lightsRed.classList.remove('content_show__active_js');
      lightsGreen.classList.remove('content_show__active_js');
    }
    function greenShow() {
      lightsGreen.classList.add('content_show__active_js');
      lightsYellow.classList.remove('content_show__active_js');
      lightsRed.classList.remove('content_show__active_js');
    }
    lightsRed.addEventListener('click', redShow);
    lightsYellow.addEventListener('click', yellowShow);
    lightsGreen.addEventListener('click', greenShow);
}