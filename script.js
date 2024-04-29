let arr = [
    { number1: 1, name: "Product A", price: 10 },
    { number1: 2, name: "Product B", price: 20 },
    { number1: 3, name: "Product C", price: 15 },
    { number1: 4, name: "Product D", price: 25 },
    { number1: 5, name: "Product E", price: 30 },
    { number1: 6, name: "Product F", price: 12 },
    { number1: 7, name: "Product G", price: 18 },
    { number1: 8, name: "Product H", price: 22 },
    { number1: 9, name: "Product I", price: 28 },
    { number1: 10, name: "Product J", price: 14 }
];
let container = document.querySelector(".container")
let products = document.querySelector(".products")
let page = document.querySelector(".page")
let cart = document.querySelector(".cart")
let div = document.querySelector(".div")

let showPage = 3
let currentPage = 1

renderPage()

function renderPage() {
    let totalPages = Math.ceil(arr.length / showPage)
    page.innerHTML = ""
    for (let s = 1; s <= totalPages; s++) {
        let btn_create = document.createElement("button");
        btn_create.innerHTML = s;
        btn_create.addEventListener("click", function () {
            currentPage = s;
            renderProducts(currentPage)
        })
        page.appendChild(btn_create)
    }
}


renderProducts(currentPage)

function renderProducts(value) {
    products.innerHTML = ""
    let startindx = (value - 1) * showPage
    let endindx = startindx + showPage
    let newArray = arr.slice(startindx, endindx)
    newArray.forEach((elem) => {
        let CreatDiv = document.createElement("div")
        CreatDiv.classList.add("add")
        products.appendChild(CreatDiv)
        CreatDiv.innerHTML = `
        <h3>${elem.name}</h3>
        <p>Price: $${elem.price}</p>
      <button onclick="Update(${elem.number1})">Add to Cart</button>
        `
    })
}

let Arr2 = []
function Update(Get_number1) {
    let obj = arr.find(elem => elem.number1 === Get_number1)
    if (obj) {
        let cartItem = Arr2.find(ele => ele.number1 === obj.number1)

        if (cartItem) {
            cartItem.quantity++
            cartItem.totalprice += obj.price
            Display()
        }
        else {
            Arr2.push({
                ...obj,
                quantity: 1,
                totalprice: obj.price
            })
            Display()
        }
    }
}
function Display() {
    div.innerHTML = ""
    Arr2.forEach((ele) => {
        let Create = document.createElement("p")
        Create.innerHTML = `${ele.name} - Quantity: ${ele.quantity} - Totel Price: $${ele.totalprice} `

        div.appendChild(Create)
    })
}
