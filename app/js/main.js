//--------------------------popup
const popupOpen = document.querySelector('.popup-open-link');
const popup = document.querySelector('.popup');


function openPopup() {
   popup.classList.add('popup_open')
   document.body.classList.add('lock');
}

function closePopup(event) {
   if (!event.target.closest('.popup__content')) {
      popup.classList.remove('popup_open');
      document.body.classList.remove('lock');
   }

}

popup.addEventListener('click', closePopup)
popupOpen.addEventListener('click', openPopup)


//----------------------------------------menu burger

const menuBurger = document.querySelector(".burger");
const header = document.querySelector(".header");

if (menuBurger) {
   menuBurger.addEventListener('click', function (e) {
      menuBurger.classList.toggle("burger_close");
      header.classList.toggle("header_dropdown");
      document.body.classList.toggle("lock");
   });
}

