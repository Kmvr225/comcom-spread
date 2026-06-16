// Année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Ombre du header au scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Apparition au scroll (fondu + montée, en cascade)
const revealEls = document.querySelectorAll(
  '.section-head, .card, .value, .split-visual, .split-text, .event-band, .cta-band'
);
revealEls.forEach((el) => el.classList.add('reveal'));

// Décalage progressif pour les éléments d'une même grille
document.querySelectorAll('.products, .values').forEach((grid) => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = (i * 0.09) + 's';
  });
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);
revealEls.forEach((el) => io.observe(el));

// Newsletter (démo front — à brancher sur un service d'envoi)
const newsletter = document.getElementById('newsletter');
const newsletterMsg = document.getElementById('newsletterMsg');
newsletter.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterMsg.textContent = 'Merci ! Vous êtes bien inscrit·e ✦';
  newsletter.reset();
});

// Formulaire de contact (démo front — à brancher sur un service d'envoi)
const contactForm = document.getElementById('contactForm');
const contactMsg = document.getElementById('contactMsg');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactMsg.textContent = 'Message envoyé ! Nous revenons vers vous très vite ✦';
  contactForm.reset();
});
