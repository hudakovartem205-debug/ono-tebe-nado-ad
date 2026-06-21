document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const ctaBtn = document.querySelector('.hero__cta');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    const lots = document.querySelector('#lots');
    if (lots) {
      lots.scrollIntoView({ behavior: 'smooth' });
    }
  });
}