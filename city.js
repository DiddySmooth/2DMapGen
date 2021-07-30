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
                console.log(name)
                map1[i].setAttribute("Name", name)
                map1[i].addEventListener("click", function() {
                    console.log(name)
                })
            }
            
        }
    }
}
