var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// manual
var manualNav = function(manual)
    {
        slides.forEach((slide) => 
            {
                slide.classList.remove('active');

                btns.forEach((btn) => 
                    {
                        btn.classList.remove('active');
                    });
            });

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

btns.forEach((btn, i) => 
    {
        btn.addEventListener("click", () => 
            {
                manualNav(i);
                currentSlide = i;
            });
    });

// autoplay
var repeat = function(activeClass)
    {
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = () => 
        {
            setTimeout(function()
                {
                    [...active].forEach((activeSlide) => 
                        {
                            activeSlide.classList.remove('active');
                        });

                    slides[i].classList.add('active');
                    btns[i].classList.add('active');
                    i++;

                    if (slides.length == i)
                        i = 0;

                    if (i >= slides.length)
                        return;

                    repeater();
                }, 15000);
            
        }
        repeater();
    }
    
repeat();

const section = document.querySelector("section");

const card_1 = document.querySelector(".card_1");
const card_4 = document.querySelector(".card_4");

const card_2 = document.querySelector(".card_2");
const card_3 = document.querySelector(".card_3");

const title = document.querySelector(".title");
const title_soon = document.querySelector(".title_soon")
const intro = document.querySelector(".intro");
const shadow = document.querySelector(".shadow");


const arrows = document.getElementById("arrow");

let intro_height = intro.offsetHeight;
let section_height = section.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    if (scroll <= 1000)
        {
            card_1.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -100 + 120}px)`; // картина молодой двигается вверх
            card_4.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 140 - 350}px)`; // картина старушки двигается вниз
        }

    card_2.style.transform = `translateY(${(scroll - 1193) / (section_height + sectionY.top + 1193) * 200 - 150}px)`; // картина битвы двигается вниз
    card_3.style.transform = `translateY(${(scroll - 968) / (section_height + sectionY.top + 968) * -200 + 200}px)`; // картина бонапарта двигается вверх

    title.style.opacity = - scroll / (intro_height / 4) + 1;
    title_soon.style.opacity = - scroll / (intro_height / 4) + 1;
    shadow.style.height = `${scroll * 0.5 + 200}px`;

    // затемнение (то есть появление) элементов при прокрутке
    card_1.style.opacity = (scroll + 200) / (sectionY.top + section_height);
    card_4.style.opacity = (scroll + 200) / (sectionY.top + section_height);

    card_2.style.opacity = (scroll - 500) / (sectionY.top + section_height + 1193);
    card_3.style.opacity = (scroll - 500) / (sectionY.top + section_height + 1193);


    // появление стрелочек в зависимости от значения скролла
    if (scroll < 100)
        {
            arrows.style.setProperty("--arrow_up", "0");
            arrows.style.setProperty("--arrow_down", "100");
        }
    else if (scroll >= 100 && scroll <= 2150)
        {
            arrows.style.setProperty("--arrow_up", "100");
            arrows.style.setProperty("--arrow_down", "100");            
        }
    else if (scroll > 2150)
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