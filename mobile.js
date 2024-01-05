const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('navlist');
const bodyHtml = document.querySelector('body')

mobileMenu.addEventListener('click', function() {

    navList.classList.toggle('navlist-hidden');
    navList.classList.toggle('navlist-visible');

    bodyHtml.classList.toggle('lockscroll')
});