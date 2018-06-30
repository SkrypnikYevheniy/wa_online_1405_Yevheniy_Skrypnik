import '../styles/widjet.scss';

export function accordion(piano) {
    const notes = Array.from(piano.querySelectorAll('.accordion__icon'));
    const texts = Array.from(piano.querySelectorAll('.accordion__text'));
    const triangl = Array.from(piano.querySelectorAll('.accordion__icon__right-part'));
    const ShowText = 'accordion__text__show';
    const trianglBottom = 'accordion__icon__right-part_open';

    function switcher() {
        for (let i = 0; i < notes.length; i++) {
            notes[i].addEventListener('click', turnOf);
        }
    }

    function turnOf() {
        for (let i = 0; i < notes.length; i++) {
            texts[i].classList.remove(ShowText);
            triangl[i].classList.remove(trianglBottom);
            if (notes[i] == event.currentTarget) {
                texts[i].classList.toggle(ShowText);
                triangl[i].classList.toggle(trianglBottom);
            }           
        }
    }
    
    switcher();
}