import { get } from "./api.js";

const planetsQueue = [
    'sun', 
    'mercury', 
    'venus', 
    'earth', 
    'mars', 
    'jupiter', 
    'saturn', 
    'uranus', 
    'neptune'
]
const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')
const planetOn = document.querySelector('')

document.addEventListener('DOMContentLoaded', () =>{
    const loadPlanet = get(`solar-system`, `${planetsQueue[3]}`)
})