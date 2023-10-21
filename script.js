let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
const menuIcon = document.getElementById("hambmenuicon");
const menu = document.querySelector(".porfolio__home--navbar--menu");
const menuList = document.querySelectorAll(".porfolio__home--navbar--menu li");

menuIcon.addEventListener("click", function () {
   menu.classList.toggle("menushow");
   changeMenu();
});

menuList.forEach((e) => {
   e.addEventListener("click", function () {
      menu.classList.remove("menushow");
      changeMenu();
   });
});

function changeMenu() {
   menu.classList.value.includes("menushow")
      ? (menuIcon.src = "./src/img/icons/closemenu.svg")
      : (menuIcon.src = "./src/img/icons/openmenu.svg");
}
