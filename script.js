// ========== GAME DATA ========== //


const game_data = {
    // POPULATION AND MONEY
    population: 0,
    money: 0,
    money_per_second: 0, 

    // WORKERS
    workers: 0,
    worker_speed: 2.5, // The amount of time (in seconds) that each worker takes to increase the population
    worker_increase:  1, // The amount of population that each worker increases every action
    total_worker_gen: 0, // The amount of population that all workers combined are generating per second
    worker_price: 100,
    worker_price_multiplier: 0.1,

    // SHOP
    
}




// ========== FUNCTIONS ========== //



// ========== EVENT LISTENERS ========== //

// Click event listener for planet button
// Event handler code updates population and money_per_seoncd, and updates the population and money per second display in the HTML
document.getElementById("planet-button").addEventListener("click", function (event) { 
    game_data.population ++;                                                                      
    game_data.money_per_second = game_data.population * 0.01   
    game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places                                
    document.getElementById("population").textContent = game_data.population 
    document.getElementById("money-per-second").textContent = game_data.money_per_second

})


document.getElementById("worker-button").addEventListener("click", function (event) {
    if (game_data.money > game_data.worker_price) {
        game_data.workers ++
        game_data.money -= game_data.worker_price

        game_data.worker_price *= 1 + game_data.worker_price_multiplier
        game_data.worker_price = Math.round(game_data.worker_price * 100) / 100
        game_data.worker_price_multiplier += 0.05

        game_data.total_worker_gen = (game_data.workers * game_data.worker_increase) 

        document.getElementById("workers").textContent = game_data.workers
        document.getElementById("worker-price").textContent = game_data.worker_price
        document.getElementById("worker-gen").textContent = game_data.total_worker_gen / game_data.worker_speed

    }
 
})

// ========== LOOPS ========== //

// Loop that runs every second, which calls the increaseMoney() Function
setInterval(() => {
    game_data.money += game_data.money_per_second
    game_data.money = Math.round(game_data.money * 100) / 100 //Removes extra, unwanted decimal places 
    document.getElementById("money").textContent = game_data.money
}, 1000)


setInterval(() => {
    game_data.population += game_data.total_worker_gen
    game_data.population = Math.round(game_data.population * 100) / 100 //Removes extra, unwanted decimal places 
    console.log(game_data.money_per_second)
    game_data.money_per_second = game_data.population * 0.01   
    game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places 

    document.getElementById("population").textContent = game_data.population
    document.getElementById("money-per-second").textContent = game_data.money_per_second
    
}, game_data.worker_speed * 1000)
