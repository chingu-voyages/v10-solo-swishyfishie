
const contentPsy = document.querySelector('.content-psy');
const contentMh = document.querySelector('.content-mh');
const contentPers = document.querySelector('.content-pers');

// dropdown menus

contentPsy.addEventListener('click', () => {
  contentPsy.classList.toggle('show');
})
contentMh.addEventListener('click', () => {
  contentMh.classList.toggle('show');
})
contentPers.addEventListener('click', () => {
  contentPers.classList.toggle('show');
})






// close the menus if user clicks outside them 
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-psy') ||!event.target.matches('.dropdown-mh') || !event.target.matches('.dropdown-pers') ) {
    for ( let i = 0; i < contentPsy.length; i++) {
      const openDropdown = contentPsy[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}