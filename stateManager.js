let state = ""
let year = 0

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
    
}

const updateYear = () => {
    year = year + 1
    yearTitle = document.querySelector('.year')
    yearTitle.innerText = `Year ${year}`
}
