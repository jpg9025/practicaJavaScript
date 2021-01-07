//Creación de los ocho grupos
export const groupGenerator = function (array) {
    let groups = [
        {"name":"Grupo A","clubs":[]},
        {"name":"Grupo B","clubs":[]},
        {"name":"Grupo C","clubs":[]},
        {"name":"Grupo D","clubs":[]},
        {"name":"Grupo E","clubs":[]},
        {"name":"Grupo F","clubs":[]},
        {"name":"Grupo G","clubs":[]},
        {"name":"Grupo H","clubs":[]}
    ]
    
    let i=0
    while(i<32){
        for (let j=1;j<=8;j++){
            console.log("\n" + groups[j-1].name + "\n")
            for (let k=1;k<=4;k++) {
                groups[j-1].clubs[k-1]=array[i]
                console.log(array[i])
                i+=1
            }
            console.log(`--------------`)
        }
    }
    console.log(groups[2])
    console.log(groups[7])
}