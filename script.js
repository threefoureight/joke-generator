document.addEventListener('click', event => {
    if (event.target.id === 'hipsterButton') {
        getDadJoke("hipster");
    }
})

document.addEventListener('click', event => {
    if (event.target.id === 'historyButton') {
        getDadJoke("history");
    }
})

document.addEventListener('click', event => {
    if (event.target.id === 'beesButton') {
        getDadJoke("bees");
    }
})

async function getDadJoke(jokeType) {
    const options = {
        method: 'GET', // specify this is a GET request, not a PUT or POST
        headers: {
            "Accept": "application/json", // request the response in JSON format
        }
    }
    
    try {
        const response = await fetch('https://icanhazdadjoke.com/search?term=' + jokeType, options)
        const responseAsJson = await response.json()
        const randomElement = responseAsJson.results[(Math.floor(Math.random() * responseAsJson.results.length))];
        printJoke(randomElement.joke)
    }

    catch (error) {
        console.err(error)
    }
}

function printJoke(joke) {
    document.getElementById('jokeDisplay').innerText = joke;
}

//alternative approach
/*
function getDadJoke(jokeType) {
    const options = {
        method: 'GET', // specify this is a GET request, not a PUT or POST
        headers: {
            "Accept": "application/json", // request the response in JSON format
        }
    }

    fetch('https://icanhazdadjoke.com/search?term=' + jokeType, options)

        .then(response => {
            return response.json()
        })
        .then(responseAsJson => {
            const randomElement = responseAsJson.results[(Math.floor(Math.random() * responseAsJson.results.length))];
            printJoke(randomElement.joke)
        })
        .catch(error => {
            console.error(error)
        })
} */