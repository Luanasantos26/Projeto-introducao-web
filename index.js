//header
var header = document.getElementById("header")
var ele = document.createElement("span")
ele.appendChild(document.createTextNode("text do span"))
console.log(ele)
container.appendChild(ele)

var button = document.getElementById("button")
var elem = document.createElement("span")
elem.appendChild(document.createTextNode("text do span"))
console.log(elem)
container.appendChild(elem)

//criar elemento
var el = document.createElement("p")
var text = document.createTextNode("Cachorro")
el.appendChild(text)
console.log(el)

var body = document.querySelector("body")
console.log(body)
body.appendChild(el)

var container = document.getElementById("container")
var el = document.createElement("span")
el.appendChild(document.createTextNode("text do span"))
console.log(el)
container.appendChild(el)

//footer
var containe = document.getElementById("containe")
var elem = document.createElement("span")
eleme.appendChild(document.createTextNode("text do span"))
console.log(eleme)
container.appendChild(eleme)

//filtro
const elemento = document.querySelector('header imput')
const card = document.querySelectorAll('.card li')
filterElement.addEventListener('input', filterCards)

function filterCards(){
    console.log("aloo")
}

//2
/*el.classList = "div-criada"

console.log(el)

var container = document.querySelector("#container")

// inserindo elemento filho
container.appendChild(el)

// inserBefore - insere antes

var el2 = document.createElement("div")

el2.classList = "div-before"

var el3 = document.querySelector("#container .div-criada")

console.log(el3)

container.insertBefore(el2, el3)*/

