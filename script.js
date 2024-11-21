// toogle class active
const navbarnav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klick di luar cyber untuk menghilangkan naf n

const hambuerger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambuerger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
