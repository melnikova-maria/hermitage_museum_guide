
const title_wrapper = document.querySelector(".title_wrapper");
const section = document.querySelector("section");
const image_container = document.querySelector(".image_container");

let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    


    title_wrapper.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 400 - 400}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

})