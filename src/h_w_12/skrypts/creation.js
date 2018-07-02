export function creation(AcordionPlace) {
    const ContentWrapper = document.createElement('div');
    const AccordionBodyCreated = 'content_wrapper';
    const AccordionBody = 'created-content';

    AcordionPlace.appendChild(ContentWrapper);
    ContentWrapper.classList.add(AccordionBody);
    ContentWrapper.classList.add(AccordionBodyCreated);
    
    const targetEl = AcordionPlace.querySelector('.created-content');
    targetEl.innerHTML = `
    <div class="accordion__icon accordion__icon__border">
        <span class="accordion__icon__title"></span>
        <span class="accordion__icon__right-part">&#8249</span></div>
    <div class="accordion__text accordion__text__show"></div>
    <div class="accordion__icon accordion__icon__border">
        <span class="accordion__icon__title"></span>
        <span class="accordion__icon__right-part accordion__icon__right-part_open">&#8249</span></div>
    <div class="accordion__text"></div>
    <div class="accordion__icon accordion__icon__border">
        <span class="accordion__icon__title"></span>
        <span class="accordion__icon__right-part">&#8249</span></div>
    <div class="accordion__text"></div>
    <div class="accordion__icon">
        <span class="accordion__icon__title"></span>
        <span class="accordion__icon__right-part">&#8249</span></div>
    <div class="accordion__text"></div>
     `;

     const accordContent = [
        {
            title: 'Collapsible item #1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
        },
        {
            title: 'Collapsible item #2',
            content: 'Sorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
        },
        {
            title: 'Collapsible item #3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa tempora facere magnam similique, unde autem totam sit in a esse? Modi, iste mollitia. Itaque autem asperiores nemo sint laboriosam.'
        },
        {
            title: 'Collapsible item #4',
            content: 'Porem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
        },
    ];

     function pasteContent(target) {
        const accordionIconTitle = Array.from(AcordionPlace.querySelectorAll('.accordion__icon__title'));
        const accordionText = Array.from(AcordionPlace.querySelectorAll('.accordion__text'));
        for (let i = 0; i < accordionIconTitle.length; i++) {
            accordionIconTitle[i].textContent = target[i].title;
        }
        for (let i = 0; i < accordionText.length; i++) {
            accordionText[i].textContent = target[i].content;
        }
    }
    pasteContent(accordContent);
}
