window.addEventListener('load', async () => {
  let destinations = [];
  let index = 0;

  try {
    const response = await fetch(
      'https://lowlifehighway.github.io/spacetourismwebsite/data.json'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const info = await response.json();
    destinations = info.destinations;
  } catch (error) {
    console.error('Error loading data:', error);
    document.body.innerHTML =
      '<p>Failed to load destination data. Please try again later.</p>';
    return;
  }

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

    [destination, image, descriptionContainer, distance, travel].forEach(
      (element) => {
        element.classList.add('fadeIn');
      }
    );

    setTimeout(() => {
      [destination, image, descriptionContainer, distance, travel].forEach(
        (element) => {
          element.classList.remove('fadeIn');
        }
      );
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

  const handleEvent = (event) => {
    event.preventDefault();
    const index = event.currentTarget.getAttribute('data-index');
    updatePlanetInfo(index);
  };

  planets.forEach((planet) => {
    planet.addEventListener('click', handleEvent);
    planet.addEventListener('touchstart', handleEvent);
  });

  // Initial load
  updatePlanetInfo(index);
});
