document.documentElement.classList.add('js');
const bot = document.getElementById('bot');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function onPointerMove(event) {
  if (!bot || prefersReducedMotion) return;

  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 16;
  const y = (event.clientY / innerHeight - 0.5) * 14;

  bot.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
}

window.addEventListener('pointermove', onPointerMove);

function setupRevealAnimations() {
  const sections = document.querySelectorAll('.reveal');
  const cards = document.querySelectorAll('.project-card');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('card-visible'), delay);
        cardObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, idx) => {
    card.dataset.delay = String((idx % 3) * 80);
    cardObserver.observe(card);
  });
}

function setupMagneticButtons() {
  if (prefersReducedMotion) return;

  const magneticElements = document.querySelectorAll('.btn, .project-card');

  magneticElements.forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      const moveX = x * 0.08;
      const moveY = y * 0.08;

      if (element.classList.contains('project-card')) {
        const tiltX = (-y / rect.height) * 8;
        const tiltY = (x / rect.width) * 8;
        element.style.transform = `translateY(-4px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      } else {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });

    element.addEventListener('pointerleave', () => {
      element.style.transform = '';
    });
  });
}

setupRevealAnimations();
setupMagneticButtons();
