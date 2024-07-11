window.addEventListener('load', function () {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.querySelector('.body').style.display = '';
  }, 3000);
});
