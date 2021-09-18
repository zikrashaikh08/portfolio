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
// let menu = document.querySelector('#menu-bars');
// let header = document.querySelector('header');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

// let cursor1 = document.querySelector('.cursor-1');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
// }

// document.querySelectorAll('a').forEach(links =>{

//     links.onmouseenter = () =>{
//         cursor1.classList.add('active');
//     }

//     links.onmouseleave = () =>{
//         cursor1.classList.remove('active');
//     }

// });