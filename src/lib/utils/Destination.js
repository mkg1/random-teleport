import Destinations from '../components/Destinations/Destinations.js';

export const takeMeSomewhere =() => {
    let randomIndex = Math.floor(Math.random() * Destinations.length);
    console.log("random index: ", randomIndex);
    let destiny = Destinations[randomIndex].url; 
    return destiny;
} 