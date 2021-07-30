let citiesList = []
const cities = () => {
    const map1 = document.querySelectorAll(".tile")
       
    for(let i = 0; i < map1.length; i++){
        if(map1[i].classList[1] == "land"){
            rand = Math.floor(Math.random() * 2000);
            if(rand == 0){
                map1[i].classList.add("city")
                citiesList.push(i)

                let name = randCityName()
                map1[i].setAttribute("Name", name)


                popu = Math.floor(Math.random() * 100)
                map1[i].setAttribute("Population", popu)

                map1[i].addEventListener("click", function() {
                    console.log(name, map1[i].getAttribute("Population"))
                })
            }
            
        }
    }
}
const citiesGrowth = () => {
    const map1 = document.querySelectorAll(".tile")

    for(let i = 0; i < citiesList.length; i++){
        let city = citiesList[i]
        let currentPop = parseInt(map1[city].getAttribute('Population'))
        map1[city].setAttribute("Population", currentPop + (currentPop * .1))
    }
}
