
const navMenu = document.querySelector('body')
const toggle = document.querySelectorAll('.toggle')


for(const element of toggle){
  element.addEventListener('click', ()=>{
    if(!navMenu.classList.contains('show')){
      navMenu.classList.add('show')
    }else{
      navMenu.classList.remove('show')
    }
  })
}

