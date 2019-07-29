
const contentPsy = document.querySelector('.content-psy');
const contentMh = document.querySelector('.content-mh');
const contentPers = document.querySelector('.content-pers');
const dropdownPsy = document.querySelector('.dropdown-psy');
const dropdownMh = document.querySelector('.dropdown-mh');
const dropdownPers = document.querySelector('.dropdown-pers');
const navMenu = document.getElementsByClassName('drp');
const CTN = document.querySelector('.ctn-wrapper');
const heroCont = document.querySelector('.hero-content');

const drpBtns = document.querySelectorAll('.drpBtn')
const contentList = document.querySelectorAll('.content-list');

// dropdown menus


drpBtns.forEach((tab, index) => {
  tab.addEventListener('click', () =>{
    const contentList = document.querySelectorAll('.content-list');
      contentList.forEach((content, index) =>{
        content.classList.remove('show');
      })
      contentList[index].classList.toggle('show');
  })
})

CTN.addEventListener('click', ()=>{
  for (let i = 0; i<navMenu.length; i++){
    navMenu[i].children[1].classList.remove('show');
  }
})


// HERO ONLOAD 

window.onload = () => {
  setTimeout(()=>{
    heroCont.classList.add('hero-cont-block');
  }, 1000);
}




