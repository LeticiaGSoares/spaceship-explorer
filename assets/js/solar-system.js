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

const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')
const planetName = document.querySelector('#planet-name')
const bodyType = document.querySelector('#body-type')
const planetImg = document.querySelector('#planet-img')
const avgTemp = document.querySelector('#avg-temp')
const gravity = document.querySelector('#gravity')
const mass = document.querySelector('#mass')
const density = document.querySelector('#density')
const moonCount = document.querySelector('#moon-count')
const discoveryDate = document.querySelector('#discovery-date')

document.addEventListener('DOMContentLoaded', () =>{
    const loadPlanet = get(`solar-system`, `${planetsQueue[2]}`)
    
    loadPlanet.then((data) =>{
        console.log(data)
        planetName.textContent = planetsQueue[2]
        bodyType.textContent = data.bodyType
        avgTemp.textContent = `${data.avgTemp} K`
        gravity.textContent = data.gravity.toFixed(1)
        mass.textContent = `${data.mass.massValue.toFixed(1)}*10^${data.mass.massExponent}`
        density.textContent = data.density.toFixed(1)

        if(data.moons === null){
            moonCount.textContent = '0'
        }else{
            moonCount.textContent = data.moons.length
        }

        if(data.discoveryDate === ""){
            discoveryDate.textContent = "Since ever"
        }else{
            discoveryDate.textContent = data.discoveryDate
        }
        
    })
})