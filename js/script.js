const psyBtn = document.querySelector('.dropdown-psy');
const mhBtn = document.querySelector('.dropdown-mh');
const persBtn = document.querySelector('.dropdown-pers');
const contentPsy = document.querySelector('.content-psy');
const contentMh = document.querySelector('.content-mh');
const contentPers = document.querySelector('.content-pers');
const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation-menu');

// DROPDOWN MENUS 

psyBtn.addEventListener('click', () => {
    if (contentPsy.style.display == '') {
      contentPsy.style.display = 'flex';
    } else {
      contentPsy.style.display = '';
    }
})
mhBtn.addEventListener('click', () => {
    if (contentMh.style.display == '') {
      contentMh.style.display = 'flex';
    } else {
      contentMh.style.display = '';
    }
})
persBtn.addEventListener('click', () => {
    if (contentPers.style.display == '') {
      contentPers.style.display = 'flex';
    } else {
      contentPers.style.display = '';
    }
})

// HAMBURGER MENU
// navMenu.style.display = 'none';
hamburgerBtn.addEventListener('click', () => {
  if (navMenu.style.display == '') {
    navMenu.style.display = 'inline-block'; 
  } else {
    navMenu.style.display = '';
  }

})