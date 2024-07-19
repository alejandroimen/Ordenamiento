import LinkedList from "../models/LinkedList/LinkedList.js";

let lista = new LinkedList()

fetch("./controllers/bussines.json")
.then(response => response.json())
.then(data => {
    console.log("Estoy metiendo cosas");
    //En esta parte unicamente se muestran los primeros 100 registros
    for (let x=0;x<10;x++) {
        lista.add(data[x].name)
    }
})
.catch(err => console.log(err))

export {lista}