/* =========================================================
   Configuration — Sénégal Privilège
   - GATE_CODE : code d'accès pour l'aperçu privé
   - FORM_ENDPOINT : collecteur d'e-mails (FormSubmit.co)
     Remplacez l'adresse par celle de Sénégal Privilège
     pour rediriger les demandes de réservation.
   ========================================================= */
const GATE_CODE = 'PRIVILEGE2026';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mbenson.valentino@gmail.com';

// ---------- Écran de code d'accès (aperçu privé) ----------
const gate = document.getElementById('gate');
const gateForm = document.getElementById('gateForm');
const gateInput = document.getElementById('gateInput');
const gateMsg = document.getElementById('gateMsg');

function unlockSite() {
  gate.classList.add('hidden');
  document.body.classList.remove('locked');
  setTimeout(() => gate.remove(), 600);
}

if (sessionStorage.getItem('sp_unlocked') === '1') {
  unlockSite();
} else {
  document.body.classList.add('locked');
  gateInput.focus();
}

gateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (gateInput.value.trim().toUpperCase() === GATE_CODE.toUpperCase()) {
    sessionStorage.setItem('sp_unlocked', '1');
    unlockSite();
  } else {
    gateMsg.textContent = 'Code incorrect, réessayez.';
    gateForm.classList.remove('shake');
    void gateForm.offsetWidth;
    gateForm.classList.add('shake');
  }
});

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
  '.section-head, .card, .value, .pillar, .split-visual, .split-text, .cta-band, .fleet-note'
);
revealEls.forEach((el) => el.classList.add('reveal'));

// Décalage progressif pour les éléments d'une même grille
document.querySelectorAll('.products, .values, .pillars').forEach((grid) => {
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

// ---------- Profondeur 3D : inclinaison des stages au survol ----------
// Chaque "stage" (véhicule sur fond noir) réagit à la souris : léger
// basculement en perspective + déplacement de la voiture et de la lueur
// pour un rendu cinématique et profond. Désactivé si mouvement réduit.
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(hover: hover)').matches;

if (!prefersReduced && canHover) {
  document.querySelectorAll('.stage').forEach((stage) => {
    const car = stage.querySelector('.car');
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5 → 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = `perspective(900px) rotateY(${px * 9}deg) rotateX(${-py * 7}deg)`;
      if (car) car.style.transform = `translateZ(40px) translate(${px * 16}px, ${py * 10}px)`;
    });
    stage.addEventListener('pointerleave', () => {
      stage.style.transform = '';
      if (car) car.style.transform = '';
    });
  });
}

// ---------- Parallaxe des lignes dorées du hero ----------
const heroLines = document.querySelector('.hero-lines');
if (heroLines && !prefersReduced) {
  window.addEventListener('scroll', () => {
    heroLines.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}

// Envoi d'un formulaire vers le collecteur d'e-mails
async function sendForm(data) {
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _captcha: 'false', ...data }),
  });
  if (!res.ok) throw new Error('network');
  return res.json();
}

// Newsletter — cercle privé
const newsletter = document.getElementById('newsletter');
const newsletterMsg = document.getElementById('newsletterMsg');
newsletter.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = newsletter.email.value;
  newsletterMsg.textContent = 'Envoi en cours…';
  try {
    await sendForm({ email, _subject: 'Nouvelle inscription — Cercle privé Sénégal Privilège' });
    newsletterMsg.textContent = 'Merci ! Vous faites partie du cercle ✦';
    newsletter.reset();
  } catch {
    newsletterMsg.textContent = 'Oups, réessayez dans un instant.';
  }
});

// Formulaire de contact / réservation
const contactForm = document.getElementById('contactForm');
const contactMsg = document.getElementById('contactMsg');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  contactMsg.textContent = 'Envoi en cours…';
  try {
    await sendForm({
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
      _subject: 'Nouvelle demande de réservation — Sénégal Privilège',
    });
    contactMsg.textContent = 'Demande envoyée ! Nous revenons vers vous très vite ✦';
    contactForm.reset();
  } catch {
    contactMsg.textContent = 'Oups, réessayez dans un instant.';
  }
});
