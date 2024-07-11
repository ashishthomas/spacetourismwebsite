

import info from '../data.json' with {type: 'json'};
const destinations = info.destinations

console.log(destinations);

window.addEventListener('load', function () {
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
  console.log(...planets);
});
