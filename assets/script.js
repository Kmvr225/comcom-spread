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

// Apparition au scroll
const revealEls = document.querySelectorAll('.section, .cta-band, .card, .value');
revealEls.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
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
