const section = document.querySelector("section");

const title_winter_palace = document.querySelector(".title_winter_palace");
const text_winter_palace = document.querySelector(".text_winter_palace");
const line_hor = document.querySelector(".line_hor");
const line_ver = document.querySelector(".line_ver");

const title_new_hermitage = document.querySelector(".title_new_hermitage");
const text_new_hermitage = document.querySelector(".text_new_hermitage");
const line_hor_new = document.querySelector(".line_hor_new");
const line_ver_new = document.querySelector(".line_ver_new");

const title_old_hermitage = document.querySelector(".title_old_hermitage");
const text_old_hermitage = document.querySelector(".text_old_hermitage");
const line_hor_old = document.querySelector(".line_hor_old");
const line_ver_old = document.querySelector(".line_ver_old");

let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    console.log("scroll", scroll)
    console.log("sectionY.top", sectionY.top)
    console.log("section_height", section_height)

    // console.log("(scroll - 968) / (sectionY.top + section_height + 968) * 550", (scroll - 968) / (sectionY.top + section_height + 968) * 550)

    // console.log("scroll / (sectionY.top + section_height) * 600", scroll / (sectionY.top + section_height) * 600)

    // console.log("scroll - 968 / (sectionY.top + section_height + 968) * 600", (scroll - 968) / (sectionY.top + section_height + 968) * 600)

    // console.log("scroll / (section_height + sectionY.top) * 200 - 200", scroll / (section_height + sectionY.top) * 200 - 200)
    
    console.log("(scroll - 968) / (section_height + sectionY.top + 968) * -170 + 170", (scroll - 968) / (section_height + sectionY.top + 968) * -170 + 170)
    // console.log("scroll / (section_height + sectionY.top) * 200 - 200", scroll / (section_height + sectionY.top) * 200 - 200)
    console.log("6")


//--------WINTER PALACE--------//
    if (scroll <= 968)
        {
            title_winter_palace.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 200 - 200}px)`; // надпись WINTER PALACE двигается вниз
            text_winter_palace.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -200 + 200}px)`; // текст WINTER PALACE двигается вверх

            line_hor.style.width = `${scroll / (sectionY.top + section_height) * 600}px`; // горизонтальная линия WINTER PALACE двигается вправо
            line_ver.style.backgroundColor = "#151515"; //темный
        }

    // вертикальная линия WINTER PALACE двигается вниз
    if ((scroll / (sectionY.top + section_height) * 100 >= 100) && (scroll - 968) / (sectionY.top + section_height) * 100 <= 331)
        {
            line_ver.style.height = `${(scroll - 968) / (sectionY.top + section_height) * 100}%`;
            line_ver.style.backgroundColor = "#c4c4c4"; //светлый
        }

//--------NEW HERMITAGE--------//
    if (scroll >= 968 && scroll <= 1936)
        {
            title_new_hermitage.style.transform = `translateY(${(scroll - 968) / (section_height + sectionY.top + 968) * 170 - 170}px)`; // надпись NEW HERMITAGE двигается вниз
            text_new_hermitage.style.transform = `translateY(${(scroll - 968) / (section_height + sectionY.top + 968) * -170 + 170}px)`; // текст NEW HERMITAGE двигается вверх

            line_hor_new.style.width = `${(scroll - 968) / (sectionY.top + section_height + 968) * 550}px`; // горизонтальная линия NEW HERMITAGE двигается влево
            line_ver_new.style.backgroundColor = "#151515";
        }

    // вертикальная линия NEW HERMITAGE двигается вниз
    if ((scroll - 968) / (sectionY.top + section_height + 968) * 550 >= 550 && (scroll - 968) / (sectionY.top + section_height + 968) * 550 <= 3594)
        {
            line_ver_new.style.height = `${(scroll - 1936) / (sectionY.top + section_height + 968) * 100}%`;
            line_ver_new.style.backgroundColor = "#c4c4c4";
        }

//--------OLD HERMITAGE--------//
    if (scroll >= 1936 && scroll <= 2904)
        {
            title_old_hermitage.style.transform = `translateY(${(scroll - 1936) / (section_height + sectionY.top + 1936) * 200 - 200}px)`; // надпись OLD HERMITAGE двигается вниз
            text_old_hermitage.style.transform = `translateY(${(scroll - 1936) / (section_height + sectionY.top + 1936) * -200 + 200}px)`; // текст OLD HERMITAGE двигается вверх

            line_hor_old.style.width = `${(scroll - 1936) / (sectionY.top + section_height + 1936) * 600}px`; // горизонтальная линия OLD HERMITAGE двигается влево
            line_ver_old.style.backgroundColor = "#151515";
        }

    // вертикальная линия OLD HERMITAGE двигается вниз
    if ((scroll - 1936) / (sectionY.top + section_height + 1936) * 550 >= 550 && (scroll - 1936) / (sectionY.top + section_height + 1936) * 550 <= 3495)
        {
            line_ver_old.style.height = `${(scroll - 2904) / (sectionY.top + section_height + 1936) * 100}%`;
            line_ver_old.style.backgroundColor = "#c4c4c4";
        }
})