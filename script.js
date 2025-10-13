const game_data = {
    population: 0,
    money: 0,
    money_per_second: 0

}

// Click event listener for planet button
// Event handler updates population and money_per_seoncd, and updates the population and money per second display in the HTML
document.getElementById("planet-button").addEventListener("click", function (event) { 
    game_data.population ++;                                                                      
    game_data.money_per_second = game_data.population * 0.01   
    game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places                                
    document.getElementById("population").textContent = game_data.population 
    document.getElementById("money-per-second").textContent = game_data.money_per_second
})


// Loop that runs every second, increases money by money_per_second and updates money display in the HTML
setInterval(() => {
    game_data.money += game_data.money_per_second
    game_data.money = Math.round(game_data.money * 100) / 100 //Removes extra, unwanted decimal places 
    document.getElementById("money").textContent = game_data.money
}, 1000)



