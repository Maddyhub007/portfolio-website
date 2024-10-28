/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*========== sticky navbar ==========*/
    let header=document.querySelector('.header');

    header.classList.toggle('sticky',window.scrollY > 100);

};

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/




/*========== swiper ==========*/


/*========== dark light mode ==========*/


/*========== scroll reveal ==========*/

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});