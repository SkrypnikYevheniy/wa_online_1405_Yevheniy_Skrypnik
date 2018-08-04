import './h_w_14.scss';

const WRAPPER = 'respons__wrapper';
const TITLE_NAME = 'respons__title';
const CONTENT_NAME = 'respons__content';
const xhr = new XMLHttpRequest();
let resp;

xhr.open('GET', 'http://localhost:4001/comments');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4) {
        console.log('RESPONS', JSON.parse(xhr.response), xhr);
        resp = JSON.parse(xhr.response);
    }
})

function catalog(targetEl, options) {
    let wrapper;
    let title;

    function render() {
        renderWrapper();
        renderTitle();
    }
    
    function renderWrapper() {
        wrapper = document.createElement('div');
        wrapper.classList.add(WRAPPER);
        targetEl.appendChild(wrapper);
    }

    function renderTitle() {
        title = document.createElement('ul');
        title.classList.add(TITLE_NAME);
        
        options.forEach(function(contentText) {            
            const contentItem = document.createElement('li');

            contentItem.classList.add(CONTENT_NAME);
            contentItem.textContent = contentText;

            title.appendChild(contentItem);
        });
        
        targetEl.appendChild(title);
    }

    render();
}

catalog(document.querySelector('.catalog-place'), resp);