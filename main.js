const nameUser = document.querySelector("#nameUser")
const material = document.querySelector("#lang")
const sizeBox = document.querySelectorAll("sizeBox")
const coments = document.querySelector("#w3review")
const button1 = document.querySelector("#button1")
const result = document.querySelector("#result")

button1.onclick = () => {

    result.textContent = (`${nameUser.value} ha pedido una caja de ${material.value} 
    con unas dimensiones ${sizeBox.value}. ${coments.value} .`)
}



