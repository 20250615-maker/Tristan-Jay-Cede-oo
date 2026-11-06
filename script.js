document.addEventListener('DOMContentLoaded', () => {

  // 1. ACTIVE NAVBAR LINK DETECTOR HABANG NAG-S-SCROLL
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150; // offset para sakto ang detection
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === #${currentSectionId}) {
        link.classList.add('active');
      }
    });
  });

  // 2. SMOOTH SCROLL TO TOP KAPAG KINLICK ANG LOGO
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
