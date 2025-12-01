
// ========== GAME DATA ========== //


const game_data = {
    // POPULATION AND MONEY
    population: 0,
    money: 500,
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
        'population-multiplier-boost', 'quicker-prestige',
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
            price: 500000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.125,
            base_price: 500000,
            max_purchase: 0,
        },
        win_streak: {
            price: 500000,
            level: 0,
            price_multiplier: 0.1,
            base_multiplier: 0.1,
            multiplier_increase: 0.07,
            base_price: 500000,
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
    current_prestige_multiplier: 0,
    next_prestige_multiplier: 1.0,
  
    // POPULATION GAMBLING

    win_chance: 0.5,
    win_multiplier: 1.5,
    win_return: 0,
    bet: 0,
    win_streak: 0,

    sounds: {
        win : new Audio("win.mp3"),
        lose: new Audio("lose.mp3")
    },

    // ACHIEVEMENTS

    achievements : {
        clicks: {
            progress: 0,
            goal: 100,
            gems: 5,
            xp: 25,
            element: document.getElementById("achievement-clicks"),
        },
        money: {
            progress: 0,
            goal: 100,
            gems: 5,
            xp: 25,
            element: document.getElementById("achievement-money"),
        },
        gamble: {
            progress: 0,
            goal: 5,
            gems: 10,
            xp: 50,
            element: document.getElementById("achievement-gambles"),
        },
    },

    // LEVEL SYSTEM

    gems: 50,
    xp: 0,

    level: 1,
    level_goal: 1000,
    level_gem_reward: 10,
    level_population_reward: 100000,

    // EFFECTS

    effects: {
        double_click_power: {
            cost: 5,
            time: 10,
            button: document.getElementById("click-effect-button"),
            active: false,
            title: document.getElementById("click-effect-title")
        },
        double_money: {
            cost: 10,
            time: 20,
            button: document.getElementById("money-effect-button"),
            active: false,
            title: document.getElementById("money-effect-title")
        },
        double_worker_gen: {
            cost: 50,
            time: 30,
            button: document.getElementById("worker-effect-button"),
            active: false,
            title: document.getElementById("worker-effect-title")
        }
    },
    
    effect_names : ["double_click_power", "double_money", "double_worker_gen"]
}

// Creates default copy of data, used to reset game data after prestige
const default_game_data = JSON.parse(JSON.stringify(game_data))

// ========== FUNCTIONS ========== //




// ========== EVENT LISTENERS ========== //

// Click event listener for planet button
// Event handler code updates population and money_per_seoncd, and updates the population and money per second display in the HTML
document.getElementById("planet-button").addEventListener("click", function (event) { 
    update_achievement("clicks", 1) // Updates click achievement each time player clicks planet
    let population = game_data.population // Creates a temporary variable which stores the population before increase
    game_data.population += 1 * (1 + (game_data.upgrades.click_surge.level * 2)/100) // Increases population by 1 multiplied by click surge effect (+2% population increase)
    game_data.population += Number(game_data.current_prestige_multiplier) 
    
    // Adds the population increase if the double click effect is active, which doubles the total increase.
    if(game_data.effects.double_click_power.active) {
        game_data.population += game_data.population - population
    }
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
    let money = Math.round(game_data.money * 100) / 100
    game_data.money += game_data.money_per_second
    if(game_data.effects.double_money.active) {
        game_data.money += game_data.money - money
    }
    game_data.money = Math.round(game_data.money * 100) / 100 //Removes extra, unwanted decimal places 
    document.getElementById("money").textContent = formatNum(game_data.money)
    update_achievement("money", game_data.money - money)
    
}, 1000)


let interval

function worker_click() {
    clearInterval(interval)
    let population = game_data.population
    game_data.population += game_data.total_worker_gen * (1 + (game_data.upgrades.worker_training.level * 20) / 100)
    game_data.population += game_data.workers * Number(game_data.current_prestige_multiplier)
    if(game_data.effects.double_worker_gen.active) {
        game_data.population += game_data.population - population
    }
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
var gamble_luck_allowed = true
function upgrade(upgrade_element) {
    let upgrade_name = upgrade_element.replaceAll("-", "_")
    let upgrade_number = 0
    if(game_data.money >= game_data.upgrades[upgrade_name].price) {
        if(upgrade_name == "worker_efficiency" && worker_efficiency_allowed == false) {
            alert("Worker speed is capped at 0.5s!")
            return null
        }
        if(upgrade_name == "gamble_luck" && gamble_luck_allowed == false) {
            alert("Win chance is capped at 75%")
            return null
        }
        if(upgrade_name == "population_multiplier_boost" && game_data.next_prestige_multiplier >= 50) {
            alert("Population multiplier is capped at x50!")
            return null
        }
        console.log(upgrade_name)
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
            } else if(upgrade_name == "quicker_prestige") {
                game_data.prestige_cost *= 0.95
                document.getElementById("prestige-cost").textContent = formatNum(game_data.prestige_cost)
            } else if (upgrade_name == "gamble_luck" && (game_data.win_chance + 0.05 <= 0.75)) {
                game_data.win_chance += 0.05
                game_data.win_chance = Math.round(game_data.win_chance * 100) / 100
                document.getElementById("win-chance").textContent = `${Math.round((game_data.win_chance * 100) * 100) / 100}%`
            } else if (upgrade_name == "achievement_gem_boost") {
                console.log(game_data.achievements.clicks.gems)
                game_data.achievements.clicks.gems = Math.ceil(game_data.achievements.clicks.gems * 1.02)
                console.log(game_data.achievements.clicks.gems)
                game_data.achievements.money.gems = Math.ceil(game_data.achievements.money.gems * 1.02)
                game_data.achievements.gamble.gems = Math.ceil(game_data.achievements.gamble.gems * 1.02)
            } else if(upgrade_name == "achievement_xp_boost") {
                game_data.achievements.clicks.xp *= 1.1
                game_data.achievements.money.xp *= 1.1
                game_data.achievements.gamble.xp *= 1.1
            }
        }

        if(game_data.worker_speed <= 0.5) {
            worker_efficiency_allowed = false
        }
        
        if(game_data.win_chance + 0.05 > 0.75) {
            gamble_luck_allowed = false
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

    // Iterates over effect objects
    for(let i = 0; i < game_data.effect_names.length; i++) {
        // If player can afford effect, sets effect button text colour to green
        if(game_data.gems >= game_data.effects[game_data.effect_names[i]].cost) {
            game_data.effects[game_data.effect_names[i]].button.style.color = "green"
        // If not, sets it to red
        } else {
            game_data.effects[game_data.effect_names[i]].button.style.color = "red"
        }
    }

    check_gamble()
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
    document.getElementById("win").hidden = true
    document.getElementById("loss").hidden = true
    document.getElementById("win-chance").textContent = `${Math.round((game_data.win_chance * 100) * 100) / 100}%`
    
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

// Function that handles prestige
function prestige() {

    // Creates temporary variables, to restore specific game data after prestige
    let prestige_level = game_data.prestige_level
    let prestige_cost = game_data.prestige_cost
    let current_prestige_multiplier = game_data.next_prestige_multiplier
    let quicker_prestige = JSON.parse(JSON.stringify(game_data.upgrades.quicker_prestige))

    let achievements = JSON.parse(JSON.stringify(game_data.achievements))
    let gems = game_data.gems
    let xp = game_data.xp

    let win_streak = game_data.win_streak

    let level = game_data.level
    let level_goal = game_data.level_goal
    let level_gem_reward = game_data.level_gem_reward
    let level_population_reward = game_data.level_population_reward

    // Increments prestige level and scales cost
    prestige_level ++
    prestige_cost *= 10

    Object.assign(game_data, JSON.parse(JSON.stringify(default_game_data))) // Resets game_data for prestige

    // Restores the game data variables that was assigned to the temporary variables
    game_data.prestige_level = prestige_level
    game_data.prestige_cost = prestige_cost
    game_data.current_prestige_multiplier = current_prestige_multiplier
    Object.assign(game_data.upgrades.quicker_prestige, quicker_prestige)

    Object.assign(game_data.achievements, achievements)
    game_data.achievements.clicks.element = document.getElementById("achievement-clicks")
    game_data.achievements.money.element = document.getElementById("achievement-money")
    game_data.achievements.gamble.element = document.getElementById("achievement-gambles")
    game_data.gems = gems
    game_data.xp = xp
    game_data.win_streak = win_streak

    game_data.level = level
    game_data.level_goal = level_goal
    game_data.level_gem_reward = level_gem_reward
    game_data.level_population_reward = level_population_reward

    game_data.sounds.win = new Audio("win.mp3"),
    game_data.sounds.lose = new Audio("lose.mp3")

    // Removes previous save from local storage
    localStorage.removeItem("game_data")
}


// Calls prestige function when prestige button clicked, if player has enough population
document.getElementById("prestige-button").addEventListener("click", function (event) {
    if(game_data.population >= game_data.prestige_cost) {
        prestige()
        update_game_displays()
    }
})


// Infinite loop that updates prestige multiplier
setInterval(() => {
    // Increases prestige mulitplier by 0.1 per 100k population, plus the boost form the population multiplier upgrade (+0.5 per upgrade)
    game_data.next_prestige_multiplier = (1 + 0.1 * (game_data.population / 100000) + (0.5 * game_data.upgrades.population_multiplier_boost.level)).toFixed(1)
    //Updates population multiplier display in HTML
    document.getElementById("population-multiplier").textContent = game_data.next_prestige_multiplier
    
}, 1000)


function check_gamble() {
    if(game_data.population >= game_data.bet && !isNaN(game_data.bet) && game_data.bet > 0) {
        document.getElementById("gamble-button").style.color = "green"
    } else {
        document.getElementById("gamble-button").style.color = "red"
    }
}

// Function that calculates gamble win chance, win multipliepr and win return
function calculate_gamble_stats() {
    let betLevel = 1000
    game_data.win_chance = 0.5
    // Adds on win chance boost from gamble luck upgrade (+5% per upgrade) 
    game_data.win_chance += game_data.upgrades.gamble_luck.level * 0.05
    
    // Increases win chance by 5% per win streak upgrade, per consecutive gamble win
    if(game_data.win_streak > 1) {
        game_data.win_chance += (game_data.upgrades.win_streak.level * 0.05) * (game_data.win_streak-1)
    }
    game_data.win_multiplier = 1.5
    while(game_data.bet >= betLevel) {
        game_data.win_chance -= 0.05
        game_data.win_multiplier += 0.25
        betLevel *= 10

        if(game_data.win_chance <= 0.05) {
            game_data.win_chance = 0.05 
            break
        }
    }

    // Sets win return to the amount the player bet, multiplied by the win multiplier calculated
    game_data.win_return = game_data.bet * game_data.win_multiplier
    game_data.win_chance = Math.round(game_data.win_chance * 100) / 100
}

// Input event listener, triggers anytime the player types or removes a digit form the input form
document.getElementById("gamble-amount").addEventListener("input", function(event) {
    // Checks if player has entered a non-numeric character 
    if(isNaN(this.value)) {
        document.getElementById("win-return").textContent = "Enter valid number"
    // Checks if player has entered 0 
    } else if(this.value == 0) {
        // Sets win return to 0 if player enteres 0. Can't win if bet is 0.
        document.getElementById("win-return").textContent = "0"
    } else {
        // Sets player bet to the value in the input form
        game_data.bet = this.value
        check_gamble() // Updates gamble button text colour depending on whether the player can afford to bet the amount entered
        calculate_gamble_stats() // Calculates the win return based on the input#
        // Updates win return and win chance display in HTML
        document.getElementById("win-return").textContent = formatNum(game_data.win_return)
        document.getElementById("win-chance").textContent = `${Math.round((game_data.win_chance * 100) * 100) / 100}%`
        // Updates win return display text colour
        // 50%+ Green
        // 35-45% Orange
        // <35% Red
        if(game_data.win_chance >= 0.5) {
            document.getElementById("win-chance-display").style.color = "green" 
        } else if(game_data.win_chance >= 0.35 && game_data.win_chance <= 0.45) {
            document.getElementById("win-chance-display").style.color = "orange"
        } else if(game_data.win_chance < 0.35) { 
            document.getElementById("win-chance-display").style.color = "red"
        }
    }
})

// Function that handles the gambles
function gamble() {
    // Checks if player has enough population to bet the amount they entered
    if(game_data.population >= game_data.bet) {
        // Generates random roll value
        let random_roll = Math.random()
        // Checks if player has one gamble
        if (random_roll < game_data.win_chance) {
            // Removes bet from population, and then adds it back with the win multiplier applied
            game_data.population -= game_data.bet
            game_data.population += game_data.bet * game_data.win_multiplier
            // Shows win message
            document.getElementById("win").hidden = false
            // Plays win sound
            game_data.sounds.win.play()
            game_data.win_streak ++
            
        } else {
            game_data.population -= game_data.bet
            // Shows loss message
            document.getElementById("loss").hidden = false
            // Plays loss sound
            game_data.sounds.lose.play()  
            game_data.win_streak = 0
            
        }

        // Reset input form and bet
        document.getElementById("gamble-amount").value = ""
        game_data.bet = 0

        // Recalculates gamble stats to reset win return and chance value, then updates them in HTML
        calculate_gamble_stats() 
        document.getElementById("win-return").textContent = formatNum(game_data.win_return)
        document.getElementById("win-chance").textContent = `${Math.round((game_data.win_chance * 100) * 100) / 100}%`
        // Hides win/loss message after 2 seconds
        setTimeout(() => {
            document.getElementById("win").hidden = true
            document.getElementById("loss").hidden = true
        }, 2000)
        
        // Recalculates money per second, then updates money per second and population displays in HTML
        game_data.money_per_second = game_data.population * (0.01 * (1 + (game_data.upgrades.income_boost.level  * 10) /100)) 
        game_data.money_per_second = Math.round(game_data.money_per_second * 100) /100 //Removes extra, unwanted decimal places 
        document.getElementById("money-per-second").textContent = game_data.money_per_second
        document.getElementById("population").textContent = formatNum(game_data.population)
      
    }
    
}

document.getElementById("gamble-button").addEventListener("click", function(event) {
    if(!isNaN(game_data.bet) && game_data.bet > 0) {
        gamble()
    } 
})


// Function that handles updating achievements
function update_achievement(type, amount) {    
    if(type == "reset_gamble_achievement") {
        console.log("test")
        // Resets gamble achievement progress completely
        // Only runs if gamble win streak is lost
        game_data.achievements.gamble.progress = 0
        game_data.achievements.gamble.element.querySelector("span").textContent = `\u00A0 - 0/${game_data.achievements.gamble.goal}`
        game_data.achievements.gamble.element.querySelector("div").style.width = "0%"
    } else {
            const achievement = game_data.achievements[type]
            // Increases achievement by amount passed in
            achievement.progress += amount
            // Checks if achievement is completed
            if(achievement.progress >= achievement.goal) {
                achievement.progress = achievement.goal // Sets progres back to goal in case it's gone over
                complete_achievement(type) // Completes achievement
            } else {
                // If achievement is not complete, update progress bar to percentage value of completion
                achievement.element.querySelector("div").style.width = `${(achievement.progress / achievement.goal) * 100}%` 
                // And update achievement progress display, ensures there is whitespace and dash between achievement title and progress display
                achievement.element.querySelector("span").textContent = 
                `
                \u00A0 - ${formatNum(Math.round(achievement.progress * 100) / 100)}/${formatNum(Math.round(achievement.goal * 100) / 100)}
                ` 
        }
    }
}


function complete_achievement(type) {
    const achievement = game_data.achievements[type]

    game_data.gems += achievement.gems
    game_data.xp += achievement.xp

    increase_level()

    if(type == "gamble") {
        // Increases gamble achievement goal by 1
        achievement.goal ++
    } else {
        // Scales other achievements by x5
        achievement.goal *= 5
    }

    // Scales achievement rewards
    achievement.gems *= 1.5
    achievement.xp *= 1.5

    // Updates gem and xp display in HTML
    document.getElementById("gems").textContent = formatNum(Math.round(game_data.gems * 100) / 100)
    document.getElementById("xp").textContent = formatNum(Math.round(game_data.xp * 100) / 100)

    // And update achievement progress display, ensures there is whitespace and dash between achievement title and progress display
    achievement.element.querySelector("span").textContent = `\u00A0 - ${achievement.progress}/${achievement.goal}`

    // Updates progress bar to percentage value of completion
    if(type == "gamble") { 
        // For gamble achievement, increases progress bar to full for 0.5s then resets it to current value
        // This makes it clear that the achievement is completed, since the progress bar doesn't move otherwise
        achievement.element.querySelector("div").style.width = "100%"
        setTimeout(() => {
            achievement.element.querySelector("div").style.width = `${(achievement.progress / achievement.goal) * 100}%`
        }, 500)
    } else {
        achievement.element.querySelector("div").style.width = `${(achievement.progress / achievement.goal) * 100}%`
    }

    

    
    // Updates achievement title with updated achievement goal
    game_data.achievements.clicks.element.querySelector("h3").textContent = `Click planet ${formatNum(game_data.achievements.clicks.goal)} times`
    game_data.achievements.money.element.querySelector("h3").textContent = `Earn ${formatNum(game_data.achievements.money.goal)} money`
    game_data.achievements.gamble.element.querySelector("h3").textContent = `Win ${formatNum(game_data.achievements.gamble.goal)} gambles in a row`
    
}

// Function that increases the player's level
function  increase_level() {
    // Checks if player has reached and of level
    if(game_data.xp >= game_data.level_goal) { 
        game_data.xp = game_data.level_goal // Sets xp to level goal incase it has gone over
        level_up() // Levels up player
    } else {
        // Updates xp display and progress bar width
        document.getElementById("xp").textContent = formatNum(Math.round(game_data.xp * 100) / 100) 
        document.getElementById("level-progress-bar").style.width = `${(game_data.xp / game_data.level_goal) * 100}%`
    }
}

// Function that levels up the player
function level_up() {

    game_data.level ++

    game_data.gems += game_data.level_gem_reward
    game_data.population += game_data.level_population_reward

    // Scales level goal and level reward
    game_data.level_goal *= 5
    game_data.level_gem_reward *= 1.5
    game_data.level_population_reward *= 1.5
    
    // Updates level displays in HTML
    document.getElementById("xp").textContent = formatNum(Math.round(game_data.xp * 100) / 100)
    document.getElementById("level").textContent = game_data.level
    document.getElementById("level-goal").textContent = formatNum(game_data.level_goal)
    document.getElementById("level-progress-bar").style.width = `${(game_data.xp / game_data.level_goal) * 100}%`
    
}

// Adds event listener to each effect button 
for(let i = 0; i < game_data.effect_names.length; i++) {
    game_data.effects[game_data.effect_names[i]].button.addEventListener("click", function(event) {
        let effect_active = game_data.effects[game_data.effect_names[i]].active
        // Checks if player can afford effect and if it is not already active (Cannot be purchased again while active)
        if(game_data.gems >= game_data.effects[game_data.effect_names[i]].cost && !effect_active) {
            // Purchases effect
            purchase_effect(game_data.effect_names[i])
        }
    })
}

// Function to handle purchasing of an effect
function purchase_effect(effect_name) {

    // Subtracts effect cost from players gems and updates gem display in HTML
    game_data.gems -= game_data.effects[effect_name].cost
    document.getElementById("gems").textContent = formatNum(Math.round(game_data.gems * 100) / 100)

    game_data.effects[effect_name].active = true
    console.log(effect_name + " activated")

    
    let flash = false;    
    // Flases effect background green, on and off, every 0.5 seconds whilst effect is active
    const flash_interval = setInterval(() => {
        if(flash) {
            game_data.effects[effect_name].title.style.backgroundColor = "limegreen"
        } else {
            game_data.effects[effect_name].title.style.backgroundColor = "#3D2A4F"
        }
        flash = !flash
    }, 500);

    setTimeout(() => {
       clearInterval(flash_interval) // Stops effect flashing
       game_data.effects[effect_name].title.style.backgroundColor = "#3D2A4F"
       game_data.effects[effect_name].active = false
       console.log(effect_name + " deactivated")
    }, game_data.effects[effect_name].time * 1000)
}

// Loop that runs every second to update the price of each effect
setInterval(() =>  {
    // Iterates over effect objects 
    for(let i = 0; i < game_data.effect_names.length; i++) {
        // Sets tect content of each button to the price of the effect
        game_data.effects[game_data.effect_names[i]].button.textContent = `${game_data.effects[game_data.effect_names[i]].cost} gems`
    }
}, 1000)

