// crea 9 numeri casuali 
const numeri = []

for (let c = 1; c < - c++;) {
    const numeriCasuale = getRandomInteger(1, 99);
    numeri.push(numeriCasuale);
}

for (const numero of numeri) {
    document.querySelector(".grid").innerHTML += <p class="cell">${numero}</p>
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random()) * (max - min + 1) + min;
} 