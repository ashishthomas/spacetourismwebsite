window.addEventListener('load', function () {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.querySelector('.body').style.display = '';
  }, 3000);
  const menuButton = document.getElementById('menu-button');
  const hiddenNav = document.querySelector('.hidden-nav');
  const innerHiddenNav = document.querySelector('.hidden-nav-inside');
  const menu1 = document.querySelector('.menu1');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');
  const overlay = document.querySelector('.overlay');

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      setTimeout(() => {
        hiddenNav.classList.remove('show');
        document.body.style.position = '';
        overlay.style.display = '';
      }, 500);
      innerHiddenNav.classList.remove('slide-in');
      innerHiddenNav.classList.add('slide-out');
      menu2.style.opacity = '';
      menu1.style.transform = 'rotate(0)';
      menu3.style.transform = 'rotate(0)';
    } else {
      hiddenNav.classList.add('show');
      document.body.style.position = 'fixed';
      overlay.style.display = 'block';

      innerHiddenNav.classList.add('slide-in');
      innerHiddenNav.classList.remove('slide-out');
      menu2.style.opacity = '0';
      menu1.style.transform = 'rotate(-40deg)';
      menu3.style.transform = 'rotate(40deg)';
    }
  });
});
