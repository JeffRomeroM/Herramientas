

//menu
document.querySelector(".bars__menu").addEventListener("click", animateBars);

const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

   
});

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

}

//slide images

var images =["img/aprende-nosotros.png", "img/herramientas-asombrosas.png", "img/mundo-increible.png", "img/oper-utiles.png"];
var num =0;




function slide(){
    var slider = document.getElementById("slider");
    num++;
    if(num >=images.length){
        num =0;
    }
    slider.src = images[num];
}

setInterval(slide, 2000);

