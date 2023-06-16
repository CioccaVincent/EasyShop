async function recupProduct() {

    let storageKanap = getCart();
    let totalQty = 0;
    let totalPrice = 0;

    if(localStorage.getItem(`selecteProduct`)!= null) {
        for (let i = 0; i < storageKanap.length; i++) {
            let id = storageKanap[i].id;
            let color = storageKanap[i].color;
            let cartItems = document.querySelector(`cart__items`);
            let fetchUrl = 'http://localhost:3000/api/products/' + id;

            const response = await fetch(fetchUrl);
            if (!response.ok) {
                let productError = `<article classe="cart__item">
                <p>Oups ! L'article na pas pu être ajouter au panier ! </p> </article>`;

                const parser = new DOMParser();
                const productErrorItems = parser.parseFromString(productError, "text/html");

                cartItems.appendChild(productErrorItems.body.firstChild);
            } else {
                const data = await response.json();
                const parser = new DOMParser();
                let infoKanap = 
                `<article class="cart__item" data-id="${id}" data-color="${color}">
                <div class="cart__item__img">
                    <img src=${data.imageUrl} alt=${data.altTxt}>
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${data.name}</h2>
                        <p>Couleur : ${color}</p>
                        <p data-id="price-${id}-${color}">Prix : ${data.price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" onchange="addQty('${id}', '${color}', '${data.price}', this.value)" min="1" max="40" value="${storageKanap[i].qty}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteKanap" onclick="deleteKanap('${id}', '${color}', '${data.price}')">Supprimer</p>
                        </div>
                    </div>
                </div>
            </article>`;
            const infoKanaps = parser.parseFromString(infoKanap, "text/html");
            cartItems.appendChild(productErrorItems.body.firstChild);

            totalPrice += data.price * storageKanap[i].qty;
            document.querySelector('totalPrice').innerHTML = totalPrice;

            totalQty += parseInt(storageKanap[i].qty);
            document.querySelector('totalQuantity').innerHTML = totalQty;

            }
        }
    } else {
        document.querySelector(`h1`).innerText = `Votre panier est vide !`;
        document.querySelector('#totalQuantity').innerText = `0`;
        document.querySelector('#totalPrice').innerText = `0`;
    }


    const addQty = (id, color, price, newQty) => {
        let storageKanap = getCart();
        let item = storageKanap.find(
            (storageKanap) =>
            id === storageKanap.id && color === storageKanap.color
        );

        let previousQty = item.qty;
        let newQuantity = parseInt(newQty);

        item.qty = newQuantity;
        localStorage.setItem(`selectedProduct`, JSON.stringify(storageKanap));
    
    if (newQty <= 0 || newQty >= 40) {
        alert(`Votre choix doit être comprise entre 1 et 40 !`)
    }

    let totalQtyBefore = parseInt(document.querySelector(`#totalQuantity`).innerHTML);
    let totalQtyAfter = totalQtyBefore - previousQty + newQuantity;
    
    document.querySelector(`totalQuantity`).innerHTML = totalQtyAfter;

    let priceItem = parseInt(price);

    let totalPriceBefore = parseInt(document.querySelector(`totalPrice`).innerHTML);
    let totalPriceAfter = totalPriceBefore - (priceItem * previousQty) + (priceItem * newQuantity);
    
    document.querySelector(`totalPrice`).innerHTML = totalPriceAfter;
}



    const deleteKanap = (id, color, price) => {
        let storageKanap = getCart();
        for (i = 0; i < storageKanap.length; i++) {
            if (id === storageKanap[i].id && color === storageKanap[i].color) {
                let qtyDelete = storageKanap[i].qty;
                storageKanap.splice(i, 1);
    
                let itemDelete = document.querySelector(`.cart__item[data-id="${id}"][data-color="${color}"]`);
                itemDelete.setAttribute("style", "display:none");
    
                localStorage.setItem(`selectedProduct`, JSON.stringify(storageKanap));
    
                let totalQtyBefore = parseInt(document.querySelector(`totalQuantity`).innerHTML);
                let totalQtyAfter = totalQtyBefore - qtyDelete;
    
                document.querySelector(`totalQuantity`).innerHTML = totalQtyAfter;
    
                let priceItem = parseInt(price);
                let totalPriceBefore = parseInt(document.querySelector(`totalPrice`).innerHTML);
                let totalPriceAfter = totalPriceBefore - (priceItem * qtyDelete);
    
                document.querySelector(`totalPrice`).innerHTML = totalPriceAfter;
    
                if (storageKanap.length == 0) {
                    document.querySelector(`h1`).innerText = `Votre panier est vide !`;
                    return alert(`Votre panier est vide !`);
                }
            }
        }
    }
}
recupProduct()

// recuperer les donner stoker dans le localStorage pour les afficher dans le panier
// function getKanap() {

//     arKanap = localStorage.getItem("arKanap");
//     let getParsKanap = JSON.parse(arKanap);
//     getParsKanap = parseInt('arKanap', getParsKanap);
//     console.log(getParsKanap);


//     document.getElementById("cart__items").innerHTML += //img nom couleur prix Qté
   
    
// }
// getKanap()





// function contProduct(Products, cleanProducts){
//     let cleanKanapProd = [];
//     for (const cleanProduct of cleanProducts) {
//         let conter = 0;
//         for (const product of Products) {
//             if (cleanProduct.id == Product.id && cleanProduct.colors == Product.colors) {
//                 conter ++;
//             }
//             cleanProduct.conter = conter;
//             cleanKanapProd.push(cleanProduct)
//         }
//     }
// }

// // =====================    function compteur produit quantités       ============================
// function countProduct(products, cleanProducts) {
//     let cleanProductsWithCounter = []

//     for (const cleanProduct of cleanProducts) {
//         let counter = 0
//         for (const product of products) {
//             if (cleanProduct._id === product._id && cleanProduct.lenses === product.lenses) {
//                 counter++;
//             }
//             cleanProduct.counterPrice = product.price * counter
//             cleanProduct.counter = counter

//         }
//         cleanProductsWithCounter.push(cleanProduct)
//     }

//     return cleanProductsWithCounter
// };