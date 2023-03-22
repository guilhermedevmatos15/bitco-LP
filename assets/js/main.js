import initAOS from './library/aos.js';
import initSmoothScroll from './library/smoothScroll.js';
initAOS(1800); // 1000 === 1 segundo
initSmoothScroll(150, 2000);
// ! library dando erro:
// import initTypedTexts from './library/typed.js';
// initTypedTexts(['one', 'two', 'tree'], 300, 300, 400);

function uptadeFooter() {
   const span = document.querySelector('footer .copy span');
   const date = new Date();
   span.innerHTML = date.getFullYear();
}
uptadeFooter();

function toggleThemeScreen() {
   const toggleSwitchs = [
      ...document.querySelectorAll('.toggle-switch-theme input'),
   ];

   toggleSwitchs.forEach((element, index, arr) => {
      element.addEventListener('click', () => {
         const body = document.querySelector('body');
         if (element.checked) {
            body.classList.add('dark');
         } else {
            body.classList.remove('dark');
         }
      });
   });
}
toggleThemeScreen();

function responsiveMenu() {
   const divMenu = document.querySelector('.menu');
   const barsIcon = document.querySelector('i.fa-bars');
   const xIcon = divMenu.querySelector('i.fa-xmark');
   const internalLinks = Array.from(divMenu.querySelectorAll('li a'));

   // percorrendo links internos para quando clicados desativar o menu
   internalLinks.forEach((element, index, arr) => {
      element.addEventListener('click', () => {
         divMenu.classList.remove('active');
      });
   });

   // garantindo assim que carregar a página o menu estiver fechado
   divMenu.classList.remove('active');

   // adicionando eventos nos icones
   barsIcon.addEventListener('click', () => {
      divMenu.classList.add('active');
   });
   xIcon.addEventListener('click', () => {
      divMenu.classList.remove('active');
   });

   // previnindo bugs
   window.addEventListener('resize', () => {
      if (window.innerWidth >= 780) {
         divMenu.classList.remove('active');
      }
   });
}
responsiveMenu();
