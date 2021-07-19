let terrain = []

const row = () =>{
    let rows = []
    for (let i = 0; i < 30; i++){  
        let rand = Math.floor(Math.random() * 2);
        if(rand == 0){
            rows.push("O")
        }
        else{
            rows.push(" ")
        }
    }
    terrain.push(rows)
}
for (let j = 0; j < 20; j++){
    row()
}
console.log(terrain)