
const navMenu = document.querySelector('body')
const toggle = document.querySelectorAll('.toggle')
const btnBackToTop = document.querySelector('#backToTop')
const header = document.querySelector('#header')
const headerHeight = header.offsetHeight

for(const element of toggle){
  element.addEventListener('click', ()=>{
    if(!navMenu.classList.contains('show')){
      navMenu.classList.add('show')
    }else{
      navMenu.classList.remove('show')
    }
  })
}

window.addEventListener('scroll', ()=>{
  if(window.scrollY >= headerHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
} )

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 320){
    btnBackToTop.classList.add('backToTop')
  }else{
    btnBackToTop.classList.remove('backToTop')
  }
} )


// Swipper Carrousel

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:{
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true
});

// Scroll Review

const scrollreveal = ScrollReveal(
  {
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset:true
  })

  scrollreveal.reveal(`#home .col-a, #home .col-b, #about .col-a, #about .col-b, #services header, #services .cards .card, #testimonials header, #testimonials .testimonials, #contact header, #contact article ul li, footer .col-a, footer .col-b`)
