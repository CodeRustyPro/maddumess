const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  navbar.classList.add('active'); 
  menuToggle.classList.add('active'); 
});

closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active'); 
  menuToggle.classList.remove('active'); 
});