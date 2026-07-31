/* =========================================================
   Configuration
   - GATE_CODE : le code d'accès pour l'aperçu privé
   - FORM_ENDPOINT : collecteur d'e-mails (FormSubmit.co)
     Remplacez l'adresse e-mail par celle de votre choix
     (ex. celle de la cousine) pour rediriger les envois.
   ========================================================= */
const GATE_CODE = 'BONUS2026';
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

if (sessionStorage.getItem('bonus_unlocked') === '1') {
  unlockSite();
} else {
  document.body.classList.add('locked');
  gateInput.focus();
}

gateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (gateInput.value.trim().toUpperCase() === GATE_CODE.toUpperCase()) {
    sessionStorage.setItem('bonus_unlocked', '1');
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

// ---------- Scroll : progression + header + parallax (une seule boucle rAF) ----------
const header = document.querySelector('.site-header');
const progress = document.getElementById('progress');
const heroFeature = document.querySelector('.hero-feature');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lastY = window.scrollY;
let ticking = false;

function onFrame() {
  const y = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;

  // Barre de progression
  if (progress) progress.style.transform = `scaleX(${docH > 0 ? y / docH : 0})`;

  // Header : ombre + masquage en descendant
  header.classList.toggle('scrolled', y > 8);
  if (!nav.classList.contains('open')) {
    if (y > lastY && y > 200) header.classList.add('nav-hidden');
    else header.classList.remove('nav-hidden');
  }

  // Parallax léger sur la couverture du hero
  if (heroFeature && !reduceMotion && y < window.innerHeight * 1.2) {
    heroFeature.style.transform = `translateY(${y * -0.05}px)`;
  }

  lastY = y;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onFrame); ticking = true; }
}, { passive: true });
onFrame();

// Apparition au scroll (fondu + montée, en cascade)
const revealEls = document.querySelectorAll(
  '.section-head, .card, .value, .split-visual, .split-text, .event-band, .cta-band, .manifesto-inner'
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

// Newsletter — collecte des e-mails clientes
const newsletter = document.getElementById('newsletter');
const newsletterMsg = document.getElementById('newsletterMsg');
newsletter.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = newsletter.email.value;
  newsletterMsg.textContent = 'Envoi en cours…';
  try {
    await sendForm({ email, _subject: 'Nouvelle inscription newsletter — Bonus' });
    newsletterMsg.textContent = 'Merci — vous êtes bien inscrite.';
    newsletter.reset();
  } catch {
    newsletterMsg.textContent = 'Oups, réessayez dans un instant.';
  }
});

// Formulaire de contact
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
      _subject: 'Nouveau message depuis le site Bonus',
    });
    contactMsg.textContent = 'Message envoyé — nous revenons vers vous très vite.';
    contactForm.reset();
  } catch {
    contactMsg.textContent = 'Oups, réessayez dans un instant.';
  }
});

// ---------- Boutons magnétiques (finition, uniquement sur écrans avec souris) ----------
if (window.matchMedia('(hover: hover)').matches && !reduceMotion) {
  document.querySelectorAll('.btn, .nav-cta').forEach((el) => {
    el.style.transition = 'transform 0.25s cubic-bezier(0.22,1,0.36,1), background 0.25s, color 0.25s';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left - r.width / 2;
      const my = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${mx * 0.18}px, ${my * 0.28}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = 'translate(0,0)'; });
  });
}
