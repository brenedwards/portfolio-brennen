
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2000);
});

const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");


const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

 
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));



var app = document.getElementById("autoWrite");

var typewriter = new Typewriter(app, {
  strings: ["Customer Success", "Account Manager", "Business Development", "Account Executive"],
  loop: true,
  autoStart: true,
});


const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home_img", { delay: 400 });
sr.reveal(".home_social-icon", { interval: 200 });


sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 400 });
sr.reveal(".about_text", { delay: 400 });



sr.reveal(".work_img", { interval: 200 });

sr.reveal(".contact_input", { interval: 200 });


const toggleDarkMode = document.getElementById("toggle");

toggleDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("head").classList.toggle("dark");
});
document.body.classList.toggle("dark");
document.getElementById("head").classList.toggle("dark");


particlesJS.load("particles-js", "js/particles.json");

