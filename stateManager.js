// Used to keep track of the state of the entire Simulation
// also runs some smaller utilities 

let state = ""
let year = 0

// Buttons For menus
document.querySelector(".start").addEventListener("click", function() {
    state = "start"
    console.log("click")
    stateManager()
})
document.querySelector(".next").addEventListener("click", function() {
    updateWorld()
})


const stateManager = () => {
    if (state == "start"){
        updateYear()
        map.classList.remove("hidden")
        document.querySelector('.next').classList.remove("hidden")
        cleanPass()
        fifthPass()
        fourthPass()
        cities()
    }
}
const updateWorld = () => {
    updateYear()
    cities()
    citiesGrowth()
}

const updateYear = () => {
    year = year + 1
    yearTitle = document.querySelector('.year')
    yearTitle.innerText = `Year ${year}`
}
