export function creation() {
    const ContentWrapper = document.createElement('div');
    const AcordionPlace = document.querySelector('.here__be__accordion');
    const AccordionBodyCreated = 'content_wrapper';
    const AccordionBody = 'created-content';

    AcordionPlace.appendChild(ContentWrapper);
    ContentWrapper.classList.add(AccordionBody);
    ContentWrapper.classList.add(AccordionBodyCreated);
    
    const targetEl = document.querySelector('.created-content');
    targetEl.innerHTML = `
    <div class="accordion__icon accordion__icon__border">
        <span>Collapsible item #1</span>
        <span class="accordion__icon__right-part">&#8249</span></div>
    <div class="accordion__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati rem nostrum dicta doloremque vitae reprehenderit pariatur eveniet, quidem mollitia nihil ad blanditiis. Enim nulla quos laborum accusantium. Quod, deleniti.</div>
    <div class="accordion__icon accordion__icon__border">
        <span>Collapsible item #2</span>
        <span class="accordion__icon__right-part accordion__icon__right-part_open">&#8249</span></div>
    <div class="accordion__text accordion__text__show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum tempora mollitia ducimus nobis a exercitationem accusantium quia, illum quae maiores ad accusamus itaque quibusdam quasi odit, possimus dignissimos distinctio?</div>
    <div class="accordion__icon accordion__icon__border">
        <span>Collapsible item #3</span>
        <span class="accordion__icon__right-part">&#8249</span></div>
    <div class="accordion__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa tempora facere magnam similique, unde autem totam sit in a esse? Modi, iste mollitia. Itaque autem asperiores nemo sint laboriosam.</div>
    <div class="accordion__icon">
        <span>Collapsible item #4</span>
        <span class="accordion__icon__right-part">&#8249</span></div>
    <div class="accordion__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nesciunt, quidem alias debitis rem porro neque tenetur labore temporibus excepturi, consequuntur doloremque nemo, fugit unde ullam. Dolore deleniti corrupti tempora?</div>
     `;
    
}
