
 // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Portfolio tab filter (visual only)
  document.querySelectorAll('.portfolio-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.portfolio-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Contact form
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Sent! ✓';
    btn.style.background = '#111';
    btn.style.color = '#fff';
    setTimeout(() => { e.target.reset(); btn.textContent = 'Contact'; btn.style.background = ''; btn.style.color = ''; }, 3000);
  }