
//  Chama os blocos da pasta html pras páginas principais
$(function(){
    $("#header-1").load("html/header-1.html");
    $("#header-2").load("html/header-2.html");
});


//  Menu Mobile
function toggleMenu(){
    document.getElementById("menu").classList.toggle("active")
}

//  Carousel da Home - Bloco 2
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        850: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        }
    }
});