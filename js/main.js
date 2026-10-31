document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav__link');

  if (toggleBtn && navMenu) {
    // 1. Abrir o cerrar el menú al hacer clic en el botón hamburguesa
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
    });

    // 2. Cerrar el menú automáticamente al hacer clic en cualquier enlace de la lista
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('is-active');
        navMenu.classList.remove('is-active');
      });
    });

    // 3. Cerrar el menú si el usuario hace clic en cualquier parte fuera del panel
    document.addEventListener('click', (event) => {
      const isClickInside = navMenu.contains(event.target) || toggleBtn.contains(event.target);
      if (!isClickInside && navMenu.classList.contains('is-active')) {
        toggleBtn.classList.remove('is-active');
        navMenu.classList.remove('is-active');
      }
    });

    // 4. Cerrar el menú al presionar la tecla 'Escape' del teclado
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
        toggleBtn.classList.remove('is-active');
        navMenu.classList.remove('is-active');
      }
    });
  }
});