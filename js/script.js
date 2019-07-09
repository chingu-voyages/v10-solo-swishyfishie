const about = document.getElementById('about-me');
const app = document.getElementById('app');
const contact = document.getElementById('contact');
const homeIcon = document.getElementById('home-icon');
const appIcon = document.getElementById('app-icon');
const contactIcon = document.getElementById('contact-icon');
const mainSection = document.querySelector('.main-section');

function toggleAbout() {
  if (about.style.opacity == '0') {
    about.style.opacity = '1';
    app.style.opacity = '';
    contact.style.opacity = '';
    mainSection.style.height = 'auto';
  } else {
    
  }
}

function toggleApp() {
  if (app.style.opacity == '') {
    about.style.opacity = '0';
    app.style.opacity = '1';
    contact.style.opacity = '';
    mainSection.style.height = '55vh';
  } else {

  }
}

function toggleContact() {
  if (contact.style.opacity == '') {
    about.style.opacity = '0';
    app.style.opacity = '';
    contact.style.opacity = '1';
    mainSection.style.height = '50vh';
  } else {

  }
}
