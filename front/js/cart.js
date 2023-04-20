let totalQty = 0;
let totalPrice = 0;

// recuperer les donner stoker dans le localStorage pour les afficher dans le panier
function getKanap() {

    arKanap = localStorage.getItem("arKanap");
    let getParsKanap = JSON.parse(arKanap);
    getParsKanap = parseInt('arKanap', getParsKanap);
    console.log(getParsKanap);


    document.getElementById("cart__items").innerHTML += //img nom couleur prix Qté
    `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
            <img src=${getParsKanap.imageUrl} alt=${arKanap.altTxt}>
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>${arKanap.name}</h2>
                <p>${arKanap.recupColors}</p>
                <p>${arKanap.recupPrice} €</p>
            </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="40" value="${arKanap.recupQuantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
    </article>`;
    
}
getKanap()

function contProduct(Products, cleanProducts){
    let cleanKanapProd = [];
    for (const cleanProduct of cleanProducts) {
        let conter = 0;
        for (const product of Products) {
            if (cleanProduct.id == Product.id && cleanProduct.colors == Product.colors) {
                conter ++;
            }
            cleanProduct.conter = conter;
            cleanKanapProd.push(cleanProduct)
        }
    }
}