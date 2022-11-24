// const btnjap = document.querySelector("#japanese")
// const btnita = document.querySelector("#italian")
// const btnmex = document.querySelector("#mexican")
// const btnall = document.querySelector("#all")
// Items
const menu = [
    {
        id: 1,
        title: "Mousse de Maracujá",
        category: "sobremesas",
        price: 10,
        img: "./images/mousseMaracuja.jpg",
        desc: "__________________________",
    },
    {
        id: 2,
        title: "Pudim ",
        category: "sobremesas",
        price: 15,
        img: "./images/pudimFit.webp",
        desc: "__________________________",
    },
    {
        id: 3,
        title: "Sufle de banana",
        category: "sobremesas",
        price: 15,
        img: "./images/sufleBanana.jpg",
        desc: "__________________________",
    },
    {
        id: 4,
        title: "Petit gâteau",
        category: "sobremesas",
        price: 15,
        img: "./images/PetitFit.jpg",
        desc: "__________________________",
    },
    {
        id: 5,
        title: "Crème Brûlée",
        category: "sobremesas",
        price: 20,
        img: "./images/cremeBrulee.jpg",
        desc: "__________________________",
    },
    {
        id: 6,
        title: "Bolo de Chuva ",
        category: "sobremesas",
        price: 5,
        img: "./images/boloChuva.jpg",
        desc: "__________________________",
    },
    {
        id: 7,
        title: "Mousse de limão",
        category: "sobremesas",
        price: 10,
        img: "./images/mousseLimao.jpg",
        desc: "__________________________",
    },
    {
        id: 8,
        title: "Sorvete de Morango",
        category: "sorvetes",
        price: 15,
        img: "morango.jpg",
        desc: "__________________________",
    },
    {
        id: 9,
        title: "Sorvete de Chocolate",
        category: "sorvetes",
        price: 15,
        img: "chocolate.webp",
        desc: "__________________________",
    },
    {
        id: 10,
        title: "Sorvete de Baunilha",
        category: "sorvetes",
        price: 15,
        img: "baunilha.jpg",
        desc: "__________________________",
    },
    {
        id: 11,
        title: "Sorvete de Menta",
        category: "sorvetes",
        price: 15,
        img: "menta.jpg",
        desc: "__________________________",
    },
    {
        id: 12,
        title: "Sorvete de Maracujá",
        category: "sorvetes",
        price: 15,
        img: "maracuja.jpg",
        desc: "__________________________",
    },
    {
        id: 13,
        title: "Sorvete de Manga",
        category: "sorvetes",
        price: 15,
        img: "manga.jpeg",
        desc: "__________________________",
    },
    {
        id: 14,
        title: "Sorvete de Uva",
        category: "sorvetes",
        price: 15,
        img: "uva.jpg",
        desc: "__________________________",
    },
    {
        id: 15,
        title: "Sorvete de Gorgonzola",
        category: "sorvetes",
        price: 20,
        img: "gorgonzola.jpg",
        desc: "__________________________",
    },
    {
        id: 16,
        title: "Açaí",
        category: "sorvetes",
        price: 20,
        img: "acai.webp",
        desc: "__________________________",
    },
    {
        id: 17,
        title: "Barca de Açaí",
        category: "sobremesas",
        price: 40,
        img: "barca.jpg",
        desc: "__________________________",
    },
    {
        id: 18,
        title: "Milkshake de Morango",
        category: "sorvetes",
        price: 20,
        img: "milmo.jpg",
        desc: "__________________________",
    },
    {
        id: 19,
        title: "Milkshake de Chocolate",
        category: "sorvetes",
        price: 20,
        img: "milcho.png",
        desc: "__________________________",
    },
    {
        id: 20,
        title: "Brownie com Sorvete",
        category: "sobremesas",
        price: 25,
        img: "broune.jpg",
        desc: "__________________________",
    },
    {
        id: 21,
        title: "Bolo de pote com sorvte",
        category: "sobremesas",
        price: 25,
        img: "bolo.jpg",
        desc: "__________________________",
    },
    {
        id: 22,
        title: "Creme de Avelã",
        category: "acompanhamentos",
        price: 5,
        img: "creme.webp",
        desc: "__________________________",
    },
    {
        id: 23,
        title: "Frutas",
        category: "acompanhamentos",
        price: 5,
        img: "fruta.jpg",
        desc: "__________________________",
    },
    {
        id: 24,
        title: "Gotas de Chocolate",
        category: "acompanhamentos",
        price: 5,
        img: "gotas.jfif",
        desc: "",
    },
    {
        id: 25,
        title: "Calda de Chocolate",
        category: "acompanhamentos",
        price: 5,
        img: "calda.webp",
        desc: "",
    }
]

const main = document.querySelector("main")
const btns = document.querySelectorAll(".sections")

// Load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
})

// Filter items

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category)
            if (category === menuItem.category) {
                return menuItem
            }

        })
        // console.log(menuCategory)
        if (category === "todos") {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }

    })

})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="options" class="japanese">
        <img src=${item.img} alt="">
        <div class="text-content">
            <div class="title">
                <h2>${item.title}</h2>   
                <h2 class="price">R$${item.price},00</h2> 
            </div>
            <hr>
            <p>${item.desc}
            </p>
        </div>
        </div>`

    })
    displayMenu = displayMenu.join("")
    main.innerHTML = displayMenu;
}