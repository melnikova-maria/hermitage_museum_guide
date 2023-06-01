
const title_and_text_wrapper = document.querySelector(".title_and_text_wrapper");
const section = document.querySelector("section");
const image_container = document.querySelector(".image_container");

let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    


    title_and_text_wrapper.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

})