// NOTE: Navbar FIxed
window.onscroll = () => {
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed-fldev")
  } else {
    header.classList.remove("navbar-fixed-fldev")
  }
}

// NOTE: Humberger Menu
const humbergerMenu = document.querySelector("#humberger-menu")
const navMenu = document.querySelector("#nav-menu")

humbergerMenu.addEventListener("click", () => {
  console.log("humbergerMenu clicked")
  humbergerMenu.classList.toggle("hamburger-fldev-active")
  navMenu.classList.toggle("hidden")
})
