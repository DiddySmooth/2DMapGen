const column = document.createElement('div')
column.classList.add("column")
const container = document.createElement('div')
container.classList.add("container")
const map = document.querySelector(".map")
console.log("setup")
for(let j = 0; j< 40; j++){
    for( let i = 0; i < 40; i++){
        const square = document.createElement('div')
        square.classList.add("tile")
        column.append(square)
    }
    container.append(column)
}
map.append(container)



let state = 0;

const cleanPass = () => {
    const map1 = document.querySelectorAll(".tile")
    
    for(let i = 0; i < map1.length; i++){
        map1[i].classList.remove('water')
        map1[i].classList.remove('land')
    }


}


const firstPass = () =>{
    const map1 = document.querySelectorAll(".tile")
    
    for(let i = 0; i < map1.length; i++){
        let rand = Math.floor(Math.random() * 2);
            if(rand == 0){
                map1[i].classList.add("water")
            }
            else{
                map1[i].classList.add("land")
            }
    }
}

const secondPass = () =>{
    const map1 = document.querySelectorAll(".tile")
    
    for(let i = 0; i < map1.length; i++){
        if(i == 0){
            rand = Math.floor(Math.random() * 2);
            if(rand == 0){
                map1[i].classList.add("water")
            }
            else{
                map1[i].classList.add("land")
            }
        }
        
        else if(map1[i-1].classList[1] == "water"){
            rand = Math.floor(Math.random() * 5);
            if(rand == 0){
                map1[i].classList.add("land")
            }
            else{
                map1[i].classList.add("water")
            }
        }
        else if(map1[i-1].classList[1] == "land"){
            rand = Math.floor(Math.random() * 5);
            if(rand == 0){
                map1[i].classList.add("water")
            }
            else{
                map1[i].classList.add("land")
            }
        }
    }
    console.log(map1[0].classList)
}


document.querySelector(".next").addEventListener("click", function() {
    cleanPass()
    console.log("click")
    state = state + 1
    if(state == 1){
        firstPass()
    }
    else if(state == 2){
        secondPass()
    }
})
