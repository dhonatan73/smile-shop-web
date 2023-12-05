let family

const limitProducts = 25

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
const totalProducts = productListArray
console.log(totalProducts)


function openWindow(name,imagesrc){

    document.documentElement.scrollTo({top: 600, behavior: "smooth"})

    let productWindow = document.querySelector(".window-division")
    let list=`<div class="box-window"><div class="header-box"><p class="texto-dentro-da-box">${name}</p><button onClick="closeWindow()" class="close-window">Fechar</button></div>
    <p class="descript-window">${productDescription}</p>
    <img class="big-image-box" src="./assets/products/${imagesrc}">
    
    </div>`

    productWindow.innerHTML = list
}

function closeWindow() {
    let productWindow = document.querySelector(".window-division");
    productWindow.innerHTML = ""; // Limpar o conteúdo para fechar a janela
}

function printList(list, imagelist) {

    let listBox = document.querySelector(".product-list")
    let listPrint=''

    list.forEach((element, index) => {
        listPrint+=`<div onClick="openWindow('${element.productName}','${imagelist[index].img}','${element.productDescription}')" class="product-box">
        <img class="image-box" src="./assets/products/${imagelist[index].img}">
        <p class="description">${element.productName}</p>
        <p class="price">R$ ${element.productPrice}</p>
        </div>`
    })

    listBox.innerHTML = listPrint
}

printList(totalProducts,productListImage,25)


const productSelection = document.querySelector(".product-box")
console.log(productSelection)

function cliquei(event){
    console.log(event)
}

productSelection.addEventListener("click", cliquei)




