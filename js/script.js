const navMenu = document.querySelector('.drp');
const CTN = document.querySelector('.ctn-wrapper');
const heroCont = document.querySelector('.hero-content');
const drpBtns = document.querySelectorAll('.drpBtn')
const modal = document.querySelector('#myModal');
const modalBtn = document.querySelector('#modalBtn');
const closeModal = document.querySelector('.close-btn');

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
  for (let i = 0; i < navMenu.length; i++){
    navMenu[i].children[1].classList.remove('show');
  }
})

CTN


// HERO ONLOAD 

window.onload = () => {
  setTimeout(()=>{
    heroCont.classList.add('hero-cont-block');
  }, 1000);
}


// Modal 

modalBtn.addEventListener('click', ()=>{
  modal.style.display = 'block';
})

closeModal.addEventListener('click', ()=>{
  modal.style.display = 'none';
})

window.addEventListener('click', (e)=>{
  if (e.target == modal) {
    modal.style.display = 'none';
  }
})