(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');

  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  document.addEventListener('click', function (event) {
    var e = document.getElementById('menu-container');
    if (!e.contains(event.target)) e.style.display = 'none';
  });

  menuOpenBtn.addEventListener('click', openModal);
  menuCloseBtn.addEventListener('click', openModal);

  function openModal() {
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }
})();
