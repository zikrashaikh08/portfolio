const selectElement = (s) => document.querySelector(s);

const navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks)

selectElement(".menu-icon").addEventListener("click", () => {
  
  selectElement(".nav-list").classList.toggle("active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5)
    }
  });

  selectElement(".menu-icon").classList.toggle("toggle");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    selectElement(".menu-icon").classList.toggle("toggle");
  });
});
