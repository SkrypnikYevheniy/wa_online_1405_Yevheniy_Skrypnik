import '../styles/widjet.scss';

export function accordion() {
  const piano = document.querySelector('.content_wrapper');
  const notes = Array.from(piano.querySelectorAll('.accordion__icon'));
  const texts = Array.from(piano.querySelectorAll('.accordion__text'));
  const HideText = 'accordion__text__none';
  

  function swicther() {
        for (let i = 0; i < notes.length; i++) {
            notes[i].addEventListener('click', turnOn);            
        }
    }

    function turnOn() {
        for (let i = 0; i < notes.length; i++) {
            texts[i].classList.add(HideText);
            if (notes[i] == event.currentTarget) {
                texts[i].classList.toggle(HideText);
            }
           
        }
    }
    
    swicther();
   
}