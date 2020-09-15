const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    // image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
    
})



 
//  if (window.matchMedia("(orientation: landscape)").matches) {
//     document.querySelector('.landscape').classList.toggle('on');
//         document.getElementById('body').style.overflow = 'hidden';
//  }

// window.addEventListener("orientationchange", function() {
//     if(screen.orientation.angle == 90){
//         document.querySelector('.landscape').classList.toggle('on');
//         document.getElementById('body').style.overflow = 'hidden';
//     }
 
     
// });

const body = document.querySelector('body')
const logo = document.querySelector('.logo');
const burger = document.querySelector('.navbar__burger');
const menuMobil = document.querySelector('.navbar__mobil')
const navbarDesk = document.querySelector('nav');


body.classList.add('light');

burger.addEventListener('click', Mostrar)

function Mostrar(){
    navbarDesk.classList.toggle('active');
    logo.classList.toggle('active')
    console.log('mostrar')
    menuMobil.classList.toggle('active');
    burger.classList.toggle('close');
   
    
    if(logo.classList.contains('active')){
 
        body.style.overflow = 'hidden';
    }else{
        
        body.style.overflow = 'scroll';
    }

    if(navbarDesk.classList.contains('active')){

    }
    
}