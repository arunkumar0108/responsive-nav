// Get the menu icon and nav-links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the active class to show or hide the menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
