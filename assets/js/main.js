
const navMenu = document.querySelector('body')
const toggle = document.querySelectorAll('.toggle')
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
