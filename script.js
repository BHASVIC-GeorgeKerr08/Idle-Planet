const game_data = { 
    population: 0,
    money: 0
}

document.getElementById("planet-button").addEventListener("click", function (event) {
    game_data.population ++;
    document.getElementById("population").textContent = game_data.population
})


