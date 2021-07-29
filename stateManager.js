let state = ""
document.querySelector(".start").addEventListener("click", function() {
    state = "start"
    console.log("click")
    stateManager()
})


const stateManager = () => {
    if (state == "start"){
        map.classList.remove("hidden")
    }
}


console.log("click")
    state = state + 1
    if(state == 1){
        cleanPass()
        fifthPass()
        fourthPass()
        cities()
    }