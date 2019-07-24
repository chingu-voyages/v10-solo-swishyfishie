
const contentPsy = document.querySelector('.content-psy');
const contentMh = document.querySelector('.content-mh');
const contentPers = document.querySelector('.content-pers');
const dropdownPsy = document.querySelector('.dropdown-psy');
const dropdownMh = document.querySelector('.dropdown-mh');
const dropdownPers = document.querySelector('.dropdown-pers');
const navMenu = document.getElementsByClassName('drp');
const CTN = document.querySelector('.ctn-wrapper');


// dropdown menus

dropdownPsy.addEventListener('click', () => {
  contentPsy.classList.toggle('show');
  navMenu[1].children[1].classList.remove('show');
  navMenu[2].children[1].classList.remove('show');
})
dropdownMh.addEventListener('click', () => {
  contentMh.classList.toggle('show');
  navMenu[0].children[1].classList.remove('show');
  navMenu[2].children[1].classList.remove('show');
})
dropdownPers.addEventListener('click', () => {
  contentPers.classList.toggle('show');
  navMenu[0].children[1].classList.remove('show');
  navMenu[1].children[1].classList.remove('show');
})

CTN.addEventListener('click', ()=>{
  for (let i = 0; i<navMenu.length; i++){
    navMenu[i].children[1].classList.remove('show');
  }
})
