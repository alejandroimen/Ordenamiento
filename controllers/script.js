let start = Date.now()

let root = document.getElementById("list-bussines")
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

let end = Date.now()

console.log(end - start)