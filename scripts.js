
const limitProducts = 25

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
const totalProducts = productListArray
console.log(totalProducts)

function printList(list, imagelist, limitItens) {

    let listBox = document.querySelector(".product-list")
    let listPrint=''

    list.forEach((element, index) => {
        listPrint+=`<div class="product-box">
        <img class="image-box" src="./assets/products/${imagelist[index].img}">
        <p class="description">${element.productName}</p>
        <p class="price">R$ ${element.productPrice}</p>
        </div>`
    })

    listBox.innerHTML = listPrint

    console.log(listBox)
}

printList(totalProducts,productListImage,25)


