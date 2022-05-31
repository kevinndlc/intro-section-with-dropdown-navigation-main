const hamburgerButton = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBackdrop = mobileMenu.querySelector('.backdrop');
const closeMenuButton = mobileMenu.querySelector('.mobile-menu-toggler');
const expandButtons = document.querySelectorAll('.expand-btn');

let isMobileMenuOpen = false;

const openMobileMenu = () => {
  mobileMenu.classList.add('active');
  (hamburgerButton as HTMLButtonElement).style.opacity = '0';
  isMobileMenuOpen = true
};
const closeMobileMenu = () => {
  mobileMenu.classList.remove('active');
  (hamburgerButton as HTMLButtonElement).style.opacity = '1';
  isMobileMenuOpen = false
};

hamburgerButton.addEventListener('click', openMobileMenu)

closeMenuButton.addEventListener('click', closeMobileMenu)
mobileMenuBackdrop.addEventListener('click', closeMobileMenu)

expandButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
  })
})