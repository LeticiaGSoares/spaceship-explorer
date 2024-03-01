import { get } from "./api.js";

const planetsQueue = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
]

const planetName = document.querySelector('#planet-name')
const bodyType = document.querySelector('#body-type')
const planetImg = document.querySelector('#planet-img')
const avgTemp = document.querySelector('#avg-temp')
const gravity = document.querySelector('#gravity')
const mass = document.querySelector('#mass')
const density = document.querySelector('#density')
const moonCount = document.querySelector('#moon-count')
const discoveryDate = document.querySelector('#discovery-date')

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 2;

    const loadPlanet = get(`solar-system`, `${planetsQueue[currentIndex]}`);
    const previousPlanet = document.querySelector('#previous-planet')
    const nextPlanet = document.querySelector('#next-planet')

    loadPlanet.then((data) => {

        updatePlanetData(data);

        previousPlanet.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + planetsQueue.length) % planetsQueue.length;
            loadNewPlanet(planetsQueue[currentIndex]);
        });

        nextPlanet.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % planetsQueue.length;
            loadNewPlanet(planetsQueue[currentIndex]);
        });
    });

    function loadNewPlanet(planetName) {
        const loadPlanet = get(`solar-system`, planetName);
        loadPlanet.then((data) => {
            updatePlanetData(data);
        });
    }
    
    function updatePlanetData(data) {
        planetName.textContent = data.englishName;
        bodyType.textContent = data.bodyType;
        avgTemp.textContent = `${data.avgTemp} K`;
        gravity.textContent = data.gravity.toFixed(1);
        mass.innerHTML = `${data.mass.massValue.toFixed(1)}<span class="measure">*10<span class="exponent">${data.mass.massExponent}</span></span>`;
        density.innerHTML = `${data.density.toFixed(1)}<span class="measure">g/cm³<span/>`;

        if (data.moons === null) {
            moonCount.textContent = '0';
        } else {
            moonCount.textContent = data.moons.length;
        }

        if (data.discoveryDate === "") {
            discoveryDate.textContent = "Since ever";
        } else {
            discoveryDate.textContent = data.discoveryDate;
        }

        planetImg.src = `../assets/images/${planetsQueue[currentIndex]}.png`;
    }
});
