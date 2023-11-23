/*
console.log("Welcome to the Lobster Club Improv Comedy Show!");
const btn = null;
console.log("Button?: ", btn); */

document.addEventListener('click', event => {
    if (event.target.id === 'jokeButton') {
        getDadJoke();
    }
})

function getDadJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'My-App'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(responseAsJson => {
            printJoke(responseAsJson.joke)
        })
        .catch(error => {
            console.error(error)
        })
}

function printJoke(joke) {
    document.getElementById('jokeDisplay').innerText = joke;
}