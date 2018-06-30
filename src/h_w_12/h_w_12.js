import './h_w_12.scss';

import { accordion } from './skrypts/accordion';

import { creation } from './skrypts/creation';

creation();

const accordions = Array.from(document.querySelectorAll('.content_wrapper'));

for (let i = 0; i < accordions.length; i++) {
    accordion(accordions[i]);
}

