// script.js - Active le menu burger responsive

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});
