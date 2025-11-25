
// ========== GAME DATA ========== //


const game_data = {
    // POPULATION AND MONEY
    population: 10000000,
    money: 0,
    money_per_second: 0, 

    // WORKERS
    workers: 0,
    worker_speed: 2.5, // The amount of time (in seconds) that each worker takes to increase the population
    worker_increase:  1, // The amount of population that each worker increases every action
    total_worker_gen: 0, // The amount of population that all workers combined are generating per second
    worker_price: 100,
    worker_price_multiplier: 0.1,
    worker_base_price: 100,

    // SHOP
    multi_purchase_state: 1,

    upgrade_elements : [
        'click-surge', 'income-boost', 'industry-boom',
        'worker-training', 'worker-efficiency',
        'population-multiplier-boost', 'quicker-prestige', 'permanent-click-boost',
        'double-minigame-reward', 'temporary-population-surge', 
        'gamble-luck','win-streak',
        'achievement-gem-boost', 'achievement-xp-boost',
    ],

    upgrades: {
        click_surge: {
            price: 100,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.01,
            base_price: 100,
            max_purchase: 0,
        },
        income_boost: {
            price: 500,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.02,
            base_price: 500,
            max_purchase: 0,
        },
        industry_boom: {
            price: 10000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.05,
            base_price: 10000,
            max_purchase: 0,
        },
        worker_training: {
            price: 1000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.03,
            base_price: 1000,
            max_purchase: 0,
        },
        worker_efficiency: {
            price: 7500,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.08,
            base_price: 7500,
            max_purchase: 0,
        },
        population_multiplier_boost: {
            price: 10000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.08,
            base_price: 10000,
            max_purchase: 0,
        },
        quicker_prestige: {
            price: 5000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.07,
            base_price: 5000,
            max_purchase: 0,
        },
        permanent_click_boost: {
            price: 20000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.08,
            base_price: 20000,
            max_purchase: 0,
        },
        double_minigame_reward: {
            price: 30000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.125,
            base_price: 30000,
            max_purchase: 0,
        },
        temporary_population_surge: {
            price: 20000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.125,
            base_price: 20000,
            max_purchase: 0,
        },
        gamble_luck: {
            price: 50000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.125,
            base_price: 1000,
            max_purchase: 0,
        },
        win_streak: {
            price: 5000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.07,
            base_price: 5000,
            max_purchase: 0,
        },
        achievement_gem_boost: {
            price: 2000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.03,
            base_price: 2000,
            max_purchase: 0,
        },
        achievement_xp_boost: {
            price: 5000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.05,
            base_price: 5000,
            max_purchase: 0,
        },
    },
    
    // PRESTIGE

    prestige_level: 0,
    prestige_cost: 1000000,
    current_prestige_multiplier: 1.0,
    next_prestige_multiplier: 1.0,
  
}

const default_game_data = JSON.parse(JSON.stringify(game_data))
default_game_data.population = 0

// ========== FUNCTIONS ========== //



// ========== EVENT LISTENERS ========== //

// Click event listener for planet button
// Event handler code updates population and money_per_seoncd, and updates the population and money per second display in the HTML
document.getElementById("planet-button").addEventListener("click", function (event) { 
    game_data.population += 1 * (1 + (game_data.upgrades.click_surge.level * 2)/100)
    game_data.population += Number(game_data.current_prestige_multiplier)
    game_data.population = Math.round(game_data.population * 100) / 100
    game_data.money_per_second = game_data.population * (0.01 * (1 + (game_data.upgrades.income_boost.level  * 10) /100))   
    game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 
    for(let i = 0; i<game_data.upgrades.industry_boom.level; i++) {
        game_data.money_per_second *= 1.2
        game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100
    }                         
    document.getElementById("population").textContent = formatNum(game_data.population)
    document.getElementById("money-per-second").textContent = formatNum(game_data.money_per_second)

})


document.getElementById("worker-button").addEventListener("click", function (event) {
    if (game_data.money > game_data.worker_price) {
        game_data.workers ++
        game_data.money -= game_data.worker_price
        game_data.worker_price *= 1 + game_data.worker_price_multiplier
        game_data.worker_price = Math.round(game_data.worker_price * 100) / 100
        game_data.worker_price_multiplier += 0.05
        game_data.worker_base_price = game_data.worker_price
        game_data.total_worker_gen = (game_data.workers * game_data.worker_increase) 
        game_data.total_worker_gen = Math.round(game_data.total_worker_gen * 100) /100
      
        document.getElementById("workers").textContent = formatNum(game_data.workers)
        document.getElementById("worker-price").textContent = formatNum(game_data.worker_price)
        document.getElementById("worker-gen").textContent = formatNum(Math.round((game_data.total_worker_gen / game_data.worker_speed)* 100) /100)

    }
 
})

// ========== LOOPS ========== //

// Loop that runs every second, which calls the increaseMoney() Function
setInterval(() => {
    game_data.money += game_data.money_per_second
    game_data.money = Math.round(game_data.money * 100) / 100 //Removes extra, unwanted decimal places 
    document.getElementById("money").textContent = formatNum(game_data.money)
}, 1000)


let interval

function worker_click() {
    clearInterval(interval)
    game_data.population += game_data.total_worker_gen * (1 + (game_data.upgrades.worker_training.level * 20) / 100)
    game_data.population += game_data.workers * Number(game_data.current_prestige_multiplier)
    game_data.population = Math.round(game_data.population * 100) / 100 //Removes extra, unwanted decimal places 
    game_data.money_per_second += game_data.total_worker_gen * (0.01 * (1 + (game_data.upgrades.income_boost.level  * 10) /100))   
    game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places 
    document.getElementById("population").textContent = formatNum(game_data.population)
    document.getElementById("money-per-second").textContent = formatNum(game_data.money_per_second)
    interval = setInterval(worker_click, game_data.worker_speed * 1000)
}

setTimeout(worker_click, game_data.worker_speed * 1000)


for(let i = 0; i < game_data.upgrade_elements.length; i++) {
    document.getElementById(game_data.upgrade_elements[i]).addEventListener("click", function (event) {
        upgrade(game_data.upgrade_elements[i])
    })
}
     

var worker_efficiency_allowed = true
function upgrade(upgrade_element) {
    let upgrade_name = upgrade_element.replaceAll("-", "_")
    let upgrade_number = 0
    if(game_data.money >= game_data.upgrades[upgrade_name].price && worker_efficiency_allowed == true) {
        if(game_data.multi_purchase_state == 0) {
            game_data.upgrades[upgrade_name].level += game_data.upgrades[upgrade_name].max_purchase   
            upgrade_number = game_data.upgrades[upgrade_name].max_purchase
        } else {  
            game_data.upgrades[upgrade_name].level += game_data.multi_purchase_state
            upgrade_number = game_data.multi_purchase_state
        }

        for(let i = 0; i<upgrade_number; i++) {
            if(upgrade_name == "industry_boom") {   
                game_data.money_per_second *= 1.2
                game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places 
                document.getElementById("money-per-second").textContent = formatNum(game_data.money_per_second)
            } else if (upgrade_name =="worker_efficiency" && game_data.worker_speed > 0.5) {
                game_data.worker_speed -= 0.1
                game_data.total_worker_gen = (game_data.workers * game_data.worker_increase) 
                game_data.total_worker_gen = Math.round(game_data.total_worker_gen * 100) /100
                document.getElementById("worker-gen").textContent = Math.round((game_data.total_worker_gen / game_data.worker_speed)* 100) /100

            } else if (upgrade_name == "worker_training") {
                game_data.worker_increase *= (1 + (game_data.upgrades.worker_training.level * 20) / 100)
                game_data.total_worker_gen = (game_data.workers * game_data.worker_increase) 
                game_data.total_worker_gen = Math.round(game_data.total_worker_gen * 100) /100
                document.getElementById("worker-gen").textContent = formatNum(Math.round((game_data.total_worker_gen / game_data.worker_speed)* 100) /100)
            }
        }

        if(game_data.worker_speed <= 0.5) {
            worker_efficiency_allowed = false
        }


        game_data.money -= game_data.upgrades[upgrade_name].price
        document.getElementById("money").textContent = formatNum(game_data.money)
        game_data.upgrades[upgrade_name].price *= 1 + game_data.upgrades[upgrade_name].price_multiplier
        game_data.upgrades[upgrade_name].price_multiplier += game_data.upgrades[upgrade_name].multiplier_increase 
        game_data.upgrades[upgrade_name].price = Math.round(game_data.upgrades[upgrade_name].price * 100) / 100 //Removes extra, unwanted decimal places 

       
        game_data.upgrades[upgrade_name].base_price = game_data.upgrades[upgrade_name].price
        game_data.upgrades[upgrade_name].base_multiplier = game_data.upgrades[upgrade_name].price_multiplier
        update_prices()
        
    }
}


function update_price_and_level() {
    for(let i = 0; i<game_data.upgrade_elements.length; i++) {
        let upgrade_name = game_data.upgrade_elements[i].replaceAll("-", "_") 
        document.getElementById(`${game_data.upgrade_elements[i]}-level`).textContent = game_data.upgrades[upgrade_name].level  
        document.getElementById(`${game_data.upgrade_elements[i]}-price`).textContent = formatNum(game_data.upgrades[upgrade_name].price)
    }
}





setInterval(() => {
    for(let i = 0; i<game_data.upgrade_elements.length; i++) {
        let upgrade_name = game_data.upgrade_elements[i].replaceAll("-", "_")
        if(game_data.money >= game_data.upgrades[upgrade_name].price) {
            document.getElementById(game_data.upgrade_elements[i]).style.color = "green"
        } else {
            document.getElementById(game_data.upgrade_elements[i]).style.color = "red"
        }
    }

    if(game_data.money >= game_data.worker_price) {
        document.getElementById("worker-button").style.color = "green"
    } else {
        document.getElementById("worker-button").style.color = "red"
    }

    if(game_data.population >= game_data.prestige_cost) {
        document.getElementById("prestige-button").style.color = "green"
    } else {
        document.getElementById("prestige-button").style.color = "red"
    }
}, 1000)



document.getElementById("multi-purchase-button").addEventListener("click", function (event) {

    switch(game_data.multi_purchase_state) {
        case 1: game_data.multi_purchase_state = 10; break
        case 10: game_data.multi_purchase_state = 25; break
        case 25: game_data.multi_purchase_state = 0; break
        default: game_data.multi_purchase_state = 1
    }

    if (game_data.multi_purchase_state == 0) {
         document.getElementById("multi-purchase-state").textContent = "MAX"
    }
    else {
        document.getElementById("multi-purchase-state").textContent = `x${game_data.multi_purchase_state}`
    }

    update_prices()
    
})

function update_prices() { 
    let upgrade_number = 0
    for(const key in game_data.upgrades) {
        let current_upgrade = game_data.upgrades[key]
        current_upgrade.price = current_upgrade.base_price
        current_upgrade.price_multiplier = current_upgrade.base_multiplier
        var prices = []
        prices.push(current_upgrade.price)
        var count = 1
        var next_price = 0
        var prices_sum = 0
        if(game_data.multi_purchase_state == 0) {
    
            while(true) {
                next_price = prices[count -1] * (1 + current_upgrade.price_multiplier)
              
                prices_sum = 0
                for(let i = 0; i<prices.length; i++) {
                    prices_sum += prices[i]
                }

                if(prices_sum + next_price > game_data.money) {  
                    break
                }

                prices.push(next_price)
                current_upgrade.price_multiplier += current_upgrade.multiplier_increase
                count ++

             
                
            }

          
            current_upgrade.price = prices_sum
            current_upgrade.price = Math.round(current_upgrade.price * 100) / 100
            current_upgrade.max_purchase = count 

            document.getElementById(`${game_data.upgrade_elements[upgrade_number]}-amount`).textContent = `x${current_upgrade.max_purchase}`
            upgrade_number ++

 
       

        } else {

            for (let i = 0; i<game_data.multi_purchase_state-1; i++) {
                next_price = prices[count -1] * (1 + current_upgrade.price_multiplier)
                prices.push(next_price)
                current_upgrade.price_multiplier += current_upgrade.multiplier_increase
                count ++
                
            }

            prices_sum =  0
            for(let i = 0; i<prices.length; i++) {
                prices_sum += prices[i]
            }
         

            current_upgrade.price = prices_sum
            
            document.getElementById(`${game_data.upgrade_elements[upgrade_number]}-amount`).textContent = `x${game_data.multi_purchase_state}`
            upgrade_number ++
        }

        current_upgrade.price = Math.round(current_upgrade.price * 100) / 100
        update_price_and_level()
    }
}

     
function save_data() {
    //localStorage.setItem("game_data", JSON.stringify(game_data))
}

setInterval(() => {
    save_data()
}, 5000)


document.getElementById("save-button").addEventListener("click", function (event) {
    save_data()
})

window.onload = function() {
    Object.assign(game_data, (JSON.parse(localStorage.getItem("game_data"))))
    update_game_displays()

}

function update_game_displays() {
    update_prices()
    update_price_and_level()
    
    
    document.getElementById("population").textContent = formatNum(game_data.population)
    document.getElementById("money").textContent = formatNum(game_data.money)
    document.getElementById("money-per-second").textContent = formatNum(game_data.money_per_second)
    document.getElementById("workers").textContent = formatNum(game_data.workers)
    document.getElementById("worker-price").textContent = formatNum(game_data.worker_price)
    document.getElementById("worker-gen").textContent = formatNum(Math.round((game_data.total_worker_gen / game_data.worker_speed)* 100) /100)
    document.getElementById("prestige-cost").textContent = formatNum(game_data.prestige_cost)
}

function formatNum(num) {
    if (num < 1000) {
        return num
    }
    const unitAbbreviations = ["K", "M", "B", "T", "Q", "Qi", "Sx", "Oc", "No", "Dc"]
    let index = 0
    
    while (num >= 1000 && index < unitAbbreviations.length) {
        num /= 1000
        index ++
    }
    
    
    return parseFloat(num.toFixed(2)) + unitAbbreviations[index-1]

}

function prestige() {
    let prestige_level = game_data.prestige_level
    let prestige_cost = game_data.prestige_cost
    let current_prestige_multiplier = game_data.next_prestige_multiplier

    prestige_level ++
    prestige_cost *= 10

    Object.assign(game_data, JSON.parse(JSON.stringify(default_game_data)))

    game_data.prestige_level = prestige_level
    game_data.prestige_cost = prestige_cost
    game_data.current_prestige_multiplier = current_prestige_multiplier

    localStorage.removeItem("game_data")
}

document.getElementById("prestige-button").addEventListener("click", function (event) {
    if(game_data.population >= game_data.prestige_cost) {
        prestige()
        update_game_displays()
        
    }
})

setInterval(() => {
  
    game_data.next_prestige_multiplier = (1 + 0.1 * (game_data.population / 100000)).toFixed(1)
    document.getElementById("population-multiplier").textContent = game_data.next_prestige_multiplier
    
}, 1000)

