const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const revealElements = document.querySelectorAll('.reveal');

// Alterna menu no mobile.
menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('active');
});

// Fecha menu ao clicar em um link de navegação.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Exibe botão de voltar ao topo após rolar a página.
window.addEventListener('scroll', () => {
  if (window.scrollY > 320) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animações suaves ao rolar usando Intersection Observer.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));
