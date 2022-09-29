
//  Chama os blocos da pasta html pras páginas principais
$(function(){
    $("#header-1").load("html/header-1.html");
    $("#header-2").load("html/header-2.html");
    $("#footer").load("html/footer.html");
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
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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


// Scroll do Quem Somos - Bloco 2 (meu Deus eu fiquei muito tempo nksso....)
function toggleScroll(){
    var card = document.getElementById('card')
    var btn = document.getElementById('btn-scroll')
    if(card.scrollTop == 0){
        card.scroll({
            top: 1000,
            behavior: 'smooth'
        })
    }else{
        card.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    btn.classList.toggle("active")
}