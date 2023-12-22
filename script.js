let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let news = document.querySelector('.news-list');
menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open')
};
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});
sr.reveal('.agent-text',{delay:200, origin:'top'});
sr.reveal('.agent-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.article',{delay:200, origin:'right'});
sr.reveal('.icons-news',{delay:500, origin:'left'});
sr.reveal('.draw-text',{delay:450, origin:'left'});
sr.reveal('.icons-draw',{delay:500, origin:'left'});
sr.reveal('.draw-img',{delay:450, origin:'top'});
sr.reveal('.team-text',{delay:200, origin:'right'});
sr.reveal('.team-img',{delay:450, origin:'top'});
sr.reveal('.icons-team',{delay:500, origin:'left'});