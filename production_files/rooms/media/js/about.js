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

const title = document.querySelector(".title");
const intro = document.querySelector(".intro");

const shadow = document.querySelector(".shadow");

let intro_height = intro.offsetHeight;
let section_height = section.offsetHeight;

const login = document.querySelector(".login a");
const intro_login = document.querySelector(".intro_login");

const intro_navigation_a = document.querySelectorAll(".intro_navigation ul li a");
const intro_navigation_ul_li = document.querySelectorAll(".intro_navigation ul li");

const input_search = document.querySelector(".input_search");
const btn_search = document.querySelector(".btn_search");

const image_win = document.querySelector(".container_winter .image_container .image");
const image_new = document.querySelector(".container_new .image_container .image");
const image_old = document.querySelector(".image_old");

const arrows = document.getElementById("arrow");

const line_comp = document.querySelector(".line_about_us");

const hermitage_h = document.querySelector(".h")
const hermitage_e = document.querySelector(".e")
const hermitage_r = document.querySelector(".r")
const hermitage_m = document.querySelector(".m")
const hermitage_i = document.querySelector(".i")
const hermitage_t = document.querySelector(".t")
const hermitage_a = document.querySelector(".a")
const hermitage_g = document.querySelector(".g")
const hermitage_ee = document.querySelector(".ee")
const hermitage_mm = document.querySelector(".mm")
const hermitage_u = document.querySelector(".u")
const hermitage_s = document.querySelector(".s")
const hermitage_eee = document.querySelector(".eee") 
const hermitage_uu = document.querySelector(".uu")
const hermitage_mmm = document.querySelector(".mmm") 
const hermitage_dot = document.querySelector(".dot")

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    console.log("scroll", 222)
    

//--------WINTER PALACE--------//
    if (scroll / (section_height + sectionY.top) * 200 - 200 <= 0)
        {
            title_winter_palace.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 200 - 200}px)`; // надпись WINTER PALACE двигается вниз
            
            line_hor.style.width = `${scroll / (sectionY.top + section_height) * 587}px`; // горизонтальная линия WINTER PALACE двигается вправо
    //         // line_ver.style.backgroundColor = "#151515"; //темный
        }

    if (scroll / (section_height + sectionY.top) * -200 + 200 >= 0)
        text_winter_palace.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -200 + 220}px)`; // текст WINTER PALACE двигается вверх

    // вертикальная линия WINTER PALACE двигается вниз
    // if (scroll >= 968 && scroll <= 1666)
    //     {
    //         line_ver.style.height = `${(scroll - 968) / (sectionY.top + section_height) * 100}%`;
    //         line_ver.style.backgroundColor = "#c4c4c4"; //светлый
    //     }

//--------NEW HERMITAGE--------//
    if ((scroll - 968) / (section_height + sectionY.top + 968) * 190 - 170 >= -180 && (scroll - 968) / (section_height + sectionY.top + 968) * 190 - 170 <= 9)
        {
            title_new_hermitage.style.transform = `translateY(${(scroll - 968) / (section_height + sectionY.top + 968) * 190 - 170}px)`; // надпись NEW HERMITAGE двигается вниз

            line_hor_new.style.width = `${(scroll - 968) / (sectionY.top + section_height + 968) * 590}px`; // горизонтальная линия NEW HERMITAGE двигается влево
            // line_ver_new.style.backgroundColor = "#151515";
        }

    if ((scroll - 968) / (section_height + sectionY.top + 968) * 190 - 170 >= -180 && (scroll - 968) / (section_height + sectionY.top + 968) * 190 - 170 <= 15)
        text_new_hermitage.style.transform = `translateY(${(scroll - 968) / (section_height + sectionY.top + 968) * -180 + 170}px)`; // текст NEW HERMITAGE двигается вверх

    // вертикальная линия NEW HERMITAGE двигается вниз
    // if (scroll >= 1938 && scroll <= 2632)
    //     {
    //         line_ver_new.style.height = `${(scroll - 1936) / (sectionY.top + section_height + 968) * 100}%`;
    //         line_ver_new.style.backgroundColor = "#c4c4c4";
    //     }

//--------OLD HERMITAGE--------//
    if ((scroll - 1936) / (section_height + sectionY.top + 1936) * 200 - 200 >= -220 && (scroll - 1936) / (section_height + sectionY.top + 1936) * 200 - 200 <= -44)
        {
            title_old_hermitage.style.transform = `translateY(${(scroll - 1936) / (section_height + sectionY.top + 1936) * 255 - 200}px)`; // надпись OLD HERMITAGE двигается вниз

            line_hor_old.style.width = `${(scroll - 1936) / (sectionY.top + section_height + 1936) * 725}px`; // горизонтальная линия OLD HERMITAGE двигается влево
            // line_ver_old.style.backgroundColor = "#151515";
        }

    if ((scroll - 1936) / (section_height + sectionY.top + 1936) * 200 - 200 >= -220 && (scroll - 1936) / (section_height + sectionY.top + 1936) * 200 - 200 <= -52)
        text_old_hermitage.style.transform = `translateY(${(scroll - 1936) / (section_height + sectionY.top + 1936) * -200 + 200}px)`; // текст OLD HERMITAGE двигается вверх

    // вертикальная линия OLD HERMITAGE двигается вниз
    // if (scroll >= 2904 && scroll <= 3546)
    //     {
    //         line_ver_old.style.height = `${(scroll - 2904) / (sectionY.top + section_height + 1936) * 100}%`;
    //         line_ver_old.style.backgroundColor = "#c4c4c4";

    //         line_comp.style.borderBottomColor = "#151515";
    //     }

    // горизонтальная линия ABOUT US двигается влево
    // if (scroll >= 3546)
    //     {
    //         line_comp.style.width = `${(scroll - 3546) / (sectionY.top + section_height + 3546) * 3400}px`;
    //         line_comp.style.borderBottomColor = "#c4c4c4";
    //     }
        
    // изменение цвета меню в зависимости от фонового цвета
    if (scroll >= 345)
        {
            login.style.color = "#e5e5e5";
            intro_login.style.setProperty("--color_border", "#e5e5e5");

            intro_navigation_a.forEach(element => {
                element.style.color = "#e5e5e5";
            });

            intro_navigation_ul_li.forEach(element => {
                element.style.setProperty("--color_border", "#e5e5e5");
            });

            hermitage_h.style.color = "#e5e5e5";
            hermitage_e.style.color = "#e5e5e5";
            hermitage_r.style.color = "#e5e5e5";
            hermitage_m.style.color = "#e5e5e5";
            hermitage_i.style.color = "#e5e5e5";
            hermitage_t.style.color = "#e5e5e5";
            hermitage_a.style.color = "#e5e5e5";
            hermitage_g.style.color = "#e5e5e5";
            hermitage_ee.style.color = "#e5e5e5";
            hermitage_mm.style.color = "#e5e5e5";
            hermitage_u.style.color = "#e5e5e5";
            hermitage_s.style.color = "#e5e5e5";
            hermitage_eee.style.color = "#e5e5e5";
            hermitage_uu .style.color = "#e5e5e5";
            hermitage_mmm.style.color = "#e5e5e5";
            hermitage_dot.style.color = "#e5e5e5";

            // input_search.style.setProperty("--color_border", "#e5e5e5");
            // btn_search.style.setProperty("--color_border", "#e5e5e5");
        }
    else
        {
            login.style.color = "#151515";
            intro_login.style.setProperty("--color_border", "#151515");

            intro_navigation_a.forEach(element => {
                element.style.color = "#151515";
            });

              intro_navigation_ul_li.forEach(element => {
                element.style.setProperty("--color_border", "#151515");
            });

            hermitage_h.style.color = "#151515";
            hermitage_e.style.color = "#151515";
            hermitage_r.style.color = "#151515";
            hermitage_m.style.color = "#151515";
            hermitage_i.style.color = "#151515";
            hermitage_t.style.color = "#151515";
            hermitage_a.style.color = "#151515";
            hermitage_g.style.color = "#151515";
            hermitage_ee.style.color = "#151515";
            hermitage_mm.style.color = "#151515";
            hermitage_u.style.color = "#151515";
            hermitage_s.style.color = "#151515";
            hermitage_eee.style.color = "#151515";
            hermitage_uu .style.color = "#151515";
            hermitage_mmm.style.color = "#151515";
            hermitage_dot.style.color = "#151515";
            // input_search.style.setProperty("--color_border", "#151515");
            // btn_search.style.setProperty("--color_border", "#151515");
        }

    // затемнение (то есть появление) элементов при прокрутке
    title_winter_palace.style.opacity = scroll / (sectionY.top + section_height);
    text_winter_palace.style.opacity = scroll / (sectionY.top + section_height);
    image_win.style.opacity = scroll / (sectionY.top + section_height);

    title_new_hermitage.style.opacity = (scroll - 968) / (sectionY.top + section_height + 968);
    text_new_hermitage.style.opacity = (scroll - 968) / (sectionY.top + section_height + 968);
    image_new.style.opacity = (scroll - 968) / (sectionY.top + section_height + 968);


    title_old_hermitage.style.opacity = (scroll - 1936) / (sectionY.top + section_height + 1936);
    text_old_hermitage.style.opacity = (scroll - 1936) / (sectionY.top + section_height + 1936);
    image_old.style.opacity = (scroll - 1936) / (sectionY.top + section_height + 1936);

    title.style.opacity = - scroll / (intro_height / 4) + 1;
    shadow.style.height = `${scroll * 0.5 + 330}px`;

    // появление стрелочек в зависимости от значения скролла
    if (scroll < 100)
        {
            arrows.style.setProperty("--arrow_up", "0");
            arrows.style.setProperty("--arrow_down", "100");
        }
    else if (scroll >= 100 && scroll <= (document.body.scrollHeight - document.body.clientHeight - 50))
        {
            arrows.style.setProperty("--arrow_up", "100");
            arrows.style.setProperty("--arrow_down", "100");            
        }
    else if (scroll >= (document.body.scrollHeight - document.body.clientHeight - 50))
        {
            arrows.style.setProperty("--arrow_up", "100");
            arrows.style.setProperty("--arrow_down", "0");            
        } 
})

// скрытие и появление меню в зависимости от прокрутки вверх или вниз
var prevScrollpos = window.pageYOffset;

window.onscroll = function()
    {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos)
            document.querySelector(".intro_bar").style.top = "0";
        else
            document.querySelector(".intro_bar").style.top = "-70px";
        prevScrollpos = currentScrollPos;
    }