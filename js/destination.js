import info from '../data.json' with {type: 'json'};

const destinations = info.destinations;

window.addEventListener('load', () => {
  let index = 0;

  const planets = document.querySelectorAll('.planets');
  const destination = document.querySelector('.destination');
  const image = document.querySelector('.image');
  const descriptionContainer = document.querySelector('.description-container');
  const distance = document.querySelector('.distance');
  const travel = document.querySelector('.travel');

  const updatePlanetInfo = (index) => {
    const planetName = destinations[index].name;
    const planetImg = destinations[index].images.png;
    const planetDescription = destinations[index].description;
    const planetDistance = destinations[index].distance;
    const planetTravel = destinations[index].travel;

    destination.classList.add('fadeIn');
    image.classList.add('fadeIn');
    descriptionContainer.classList.add('fadeIn');
    distance.classList.add('fadeIn');
    travel.classList.add('fadeIn');
    setTimeout(() => {
      destination.classList.remove('fadeIn');
      image.classList.remove('fadeIn');
      descriptionContainer.classList.remove('fadeIn');
      distance.classList.remove('fadeIn');
      travel.classList.remove('fadeIn');
    }, 1000);

    destination.innerHTML = planetName;
    image.src = planetImg;
    descriptionContainer.innerHTML = planetDescription;
    distance.innerHTML = planetDistance;
    travel.innerHTML = planetTravel;
    planets.forEach((planet) => {
      planet.style.borderBottom = '';
    });
    planets[index].style.borderBottom = '3px solid #fff';
  };

  planets.forEach((planet) => {
    planet.addEventListener('click', () => {
      index = planet.getAttribute('data-index');
      updatePlanetInfo(index);
    });
  });

  // Initial load
  updatePlanetInfo(index);
});
