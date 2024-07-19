let start = Date.now()
import LinkedList from "../models/LinkedList/LinkedList.js";

let lista = new LinkedList();

async function fetchDataAndProcessList() {
    try {
        let response = await fetch("./controllers/bussines.json");
        let data = await response.json();

        console.log("Estoy metiendo cosas");
        // En esta parte unicamente se muestran los primeros 100 registros
        for (let x = 0; x < 5; x++) {
            lista.add(data[x].name);
        }

        // Ejecutar el código que debe esperar después del fetch
        lista.run((node) => {
            console.log(node.value);
        });

        lista.mergeSort();
        console.log("Separador con Radix");

        lista.run((node) => {
            console.log(node.value);
        });
    } catch (err) {
        console.log(err);
    }
}

fetchDataAndProcessList();


let root = document.getElementById("list-bussines")

/*
fetch("./controllers/bussines.json")
.then(response => response.json())
.then(data => {
    //En esta parte unicamente se muestran los primeros 100 registros
    for (let x=0;x<100;x++) {
        let item = document.createElement("li");
        item.textContent = data[x].name;
        root.appendChild(item)
    }
})
.catch(err => console.log(err))
*/

let end = Date.now()

console.log(end - start)