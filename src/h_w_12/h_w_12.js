import './h_w_12.scss';

import { accordion } from './skrypts/accordion';

import { creation } from './skrypts/creation';

function AutoAccordions(target) {
    const HereBeAccordion = document.createElement('div');
    HereBeAccordion.classList.add('here__be__accordion');
    target.appendChild(HereBeAccordion);
    const createdAccordions = Array.from(document.querySelectorAll('.here__be__accordion'));

    for (let i = 0; i < createdAccordions.length; i++) {
        creation(createdAccordions[i]);
        }

    const accordions = Array.from(document.querySelectorAll('.content_wrapper'));

    for (let i = 0; i < accordions.length; i++) {
        accordion(accordions[i]);
    }    
       
}

AutoAccordions(document.querySelector('.here__be__accordionh'));
AutoAccordions(document.querySelector('.here__be__accordionj'));
AutoAccordions(document.querySelector('.here__be'));   