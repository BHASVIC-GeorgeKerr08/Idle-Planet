
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
    multi_purchase_state: 1,

    upgrades: {
        click_surge: {
            price: 100,
            level: 0,
            price_multiplier: 0.1,
            multiplier_increase: 0.01,
            base_price: 100,
            max_purchase: 0,
        },
        income_boost: {
            price: 1000,
      
            level: 1,
            price_multiplier: 0.1,
            multiplier_increase: 0.03,
            base_price: 1000,
            max_purchase: 0,
     
        }
    }
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
    game_data.money_per_second = game_data.population * 0.01   
    game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places 

    document.getElementById("population").textContent = game_data.population
    document.getElementById("money-per-second").textContent = game_data.money_per_second
    
}, game_data.worker_speed * 1000)




document.getElementById("multi-purchase-button").addEventListener("click", function (event) {

    switch(game_data.multi_purchase_state) {
        case 1: game_data.multi_purchase_state = 10; break
        case 10: game_data.multi_purchase_state = 25; break
        case 25: game_data.multi_purchase_state = 0; break
        default: game_data.multi_purchase_state = 1
    }
    update_prices()
    console.log(game_data.upgrades.click_surge.price)
    console.log(game_data.upgrades.income_boost.price)
    if (game_data.multi_purchase_state == 0) {
         document.getElementById("multi-purchase-state").textContent = "MAX"
         document.getElementById("purchase-amount").textContent = game_data.upgrades.click_surge.max_purchase
    }
    else {
    document.getElementById("multi-purchase-state").textContent = `x${game_data.multi_purchase_state}`
    document.getElementById("purchase-amount").textContent = game_data.multi_purchase_state
    }
  
    
})


function update_prices() {
    for (const key in game_data.upgrades) {
        let current_upgrade = game_data.upgrades[key]
        current_upgrade.price = current_upgrade.base_price
        current_upgrade.price_multiplier = 0.1
        if (game_data.multi_purchase_state == 0) {
            let prices = []
            prices.push(current_upgrade.price)
            var count = 1
            let next_price = 0 
            while (true) {
                next_price = prices[count-1] * (1 + current_upgrade.price_multiplier)
                next_price = Math.round(next_price * 100)/100 
                var prices_sum = 0 
                for (let i = 0; i < prices.length; i++) {
                    prices_sum += prices[i]
                }
 
                if ((prices_sum + next_price) > game_data.money) {
                    break
                }

                current_upgrade.price_multiplier += current_upgrade.multiplier_increase
                count ++
                prices.push(next_price)
               
            }
            current_upgrade.price = prices_sum
            current_upgrade.max_purchase = count

        } else {
            for (let i = 0; i<game_data.multi_purchase_state-1; i++) {
                current_upgrade.price *= 1 + current_upgrade.price_multiplier
                current_upgrade.price_multiplier += current_upgrade.multiplier_increase
            }
        }
        current_upgrade.price = Math.round(current_upgrade.price * 100) / 100
    }
}



