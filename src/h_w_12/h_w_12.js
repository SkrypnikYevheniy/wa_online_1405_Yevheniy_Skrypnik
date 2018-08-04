import './h_w_12.scss';

import { accordion } from './skrypts/accordion';

import { creation } from './skrypts/creation';

function AutoAccordions(target) {
    
    creation(target);

    const accordions = Array.from(document.querySelectorAll('.content_wrapper'));

    for (let i = 0; i < accordions.length; i++) {
        accordion(accordions[i]);
    }    
       
}

AutoAccordions(document.querySelector('.here__be__accordionh'));
AutoAccordions(document.querySelector('.here__be__accordionj'));
AutoAccordions(document.querySelector('.here__be'));   