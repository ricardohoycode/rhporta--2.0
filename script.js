let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('.navbar')

menuBar.onclick = () =>{
   menuBar.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBar.classList.remove('fa-times');
   navbar.classList.remove('active'); 
}

var swiper = new Swiper(".teachers-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click',() =>{
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () =>{
    if (window.scrollY < 500){
      irArriba.style.right = -100 + "px"
    } else {
      irArriba.style.right = 5 + "px";
    }
});