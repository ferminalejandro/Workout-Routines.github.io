// Nav Bar

const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

const navLinks = document.querySelectorAll('.nav ul li a, .dropdown-menu ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Under Construction');
  });
});

// Nav Bar Ends
