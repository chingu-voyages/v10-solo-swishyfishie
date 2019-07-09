const about = document.getElementById('about-me');
const app = document.getElementById('app');
const contact = document.getElementById('contact');
const homeIcon = document.getElementById('home-icon');
const appIcon = document.getElementById('app-icon');
const contactIcon = document.getElementById('contact-icon');
const mainSection = document.querySelector('.main-section');

function toggleAbout() {
  if (about.style.opacity == '') {
    about.style.opacity = '1';
    app.style.opacity = '';
    contact.style.opacity = '';
    mainSection.style.opacity = '1';
  } else {
    
  }
}

function toggleApp() {
  if (app.style.opacity == '') {
    about.style.opacity = '';
    app.style.opacity = '1';
    contact.style.opacity = '';
    mainSection.style.opacity = '1';
  } else {

  }
}

function toggleContact() {
  if (contact.style.opacity == '') {
    about.style.opacity = '';
    app.style.opacity = '';
    contact.style.opacity = '1';
    mainSection.style.opacity = '1';
  } else {

  }
}
