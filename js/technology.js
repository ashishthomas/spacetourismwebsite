import info from '../data.json' with {type: 'json'};

const technology = info.technology;

window.addEventListener('load', () => {
  let index = 0;
  let technologyImg;
  window.addEventListener('resize', () => {
    technologyImg =
      window.innerWidth > 1200
        ? technology[index].images.portrait
        : technology[index].images.landscape;
    image.src = technologyImg;
  });

  const buttons = document.querySelectorAll('.pagination button');
  const mainText = document.querySelector('.main-text h1');
  const explanation = document.querySelector('.explanation');
  const image = document.querySelector('.tech-img');

  const updateTechnologyInfo = (index) => {
    const technologyName = technology[index].name;

    technologyImg =
      window.innerWidth > 1200
        ? technology[index].images.portrait
        : technology[index].images.landscape;

    const technologyDescription = technology[index].description;

    mainText.classList.add('fadeIn');
    image.classList.add('fadeIn');
    explanation.classList.add('fadeIn');
    // distance.classList.add('fadeIn');
    // travel.classList.add('fadeIn');
    setTimeout(() => {
      mainText.classList.remove('fadeIn');
      image.classList.remove('fadeIn');
      explanation.classList.remove('fadeIn');
      // distance.classList.remove('fadeIn');
      // travel.classList.remove('fadeIn');
    }, 1000);

    mainText.innerHTML = technologyName;
    explanation.innerHTML = technologyDescription;
    image.src = technologyImg;
    buttons.forEach((button) => {
      button.style.backgroundColor = '';
      button.style.color = '';
    });
    buttons[index].style.backgroundColor = '#ffffff';
    buttons[index].style.color = '#0B0D17';
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      index = button.getAttribute('data-index');
      updateTechnologyInfo(index);
    });
  });

  updateTechnologyInfo(index);
});
