const footerYear = document.querySelector(".footer__year");

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 100) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }
  window.addEventListener("scroll", addShadow);
});

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();
// navBtn.addEventListener("click", handleNav);
//////////////////////////////
//////////buttonTOP//////////
/////////////////////////////
const mybutton = document.getElementById("myBtnTop");
mybutton.addEventListener("click", topFunction);
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// document.addEventListener("DOMContentLoaded", function () {
//   const dropdownToggleButtons = document.querySelectorAll(
//     ".price-menu .dropdown-toggle"
//   );

//   dropdownToggleButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const dropdownMenu = button.nextElementSibling;

//       // Toggle the 'show' class on the dropdown menu
//       dropdownMenu.classList.toggle("show");
//     });
//   });

//   // Close dropdown menus when clicking outside
//   document.addEventListener("click", (e) => {
//     if (!e.target.closest(".price-menu .dropdown")) {
//       document
//         .querySelectorAll(".price-menu .dropdown-menu")
//         .forEach((menu) => {
//           menu.classList.remove("show");
//         });
//     }
//   });
// });
