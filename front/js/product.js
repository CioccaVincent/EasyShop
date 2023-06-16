// récuperer l'id du canaper selectionner
let params = new URLSearchParams(document.location.search);
let id = params.get ("id");

async function displayKanap(){
    await fetch("http://localhost:3000/api/products/"+ id) // intégrer l'id du canaper selectionner dans le fetch "+ id"
    .then(res => res.json())

    .then(function(value){
        // console.log(value);

            document.querySelector(".item__img").innerHTML += // affiche l'image stocker dans le models dans le code HTML via la classe
                    `<img src=${value.imageUrl} alt=${value.altTxt}>`;

            document.getElementById("title").innerHTML += // affiche le nom stocker dans le models dans le code HTML via l'id
            `${value.name}`;

            document.getElementById("price").innerHTML += // affiche le prix stocker dans le models dans le code HTML via l'id
            `${value.price}`;

            document.querySelector(".item__content__description").innerHTML += // affiche la description stocker dans le models dans le code HTML via la classe
                    `<p id="description">${value.description}</p>`;

            for(let color of value.colors){ //Boucle pour eviter une répetition de code et avoir chaque couleur lier a chaque canaper
        
                document.getElementById("colors").innerHTML += // affiche les couleurs pour un canaper dans le selecteur HTML via l'id
                    `<option value="${color}">${color}</option>`;
                }

            // document.getElementById("colors").innerHTML +=
            //         `<option value=${value.colors[0]}>${value.colors[0]}</option>
            //         <option value=${value.colors[1]}>${value.colors[1]}</option>
            //         <option value=${value.colors[2]}>${value.colors[2]}</option>`;
            })

    .catch(function(error){
        console.log('ALERT : ' + error.message);
        });
}
displayKanap() //permet le bon fonctionnement de la function

function colorValue() {
    let color = document.querySelector(`#colors`);
    return color.value;
};

function qtyValue() {
    let qty =  document.querySelector(`#quantity`);
    return qty.value;
};


    const addElement = (id, color, qty) => {

        if (color =="" && qty == "0") {
            return alert(`Choisissez une couleur et une quantité.`);
        }

        if (color == "") {
            return alert(`Choisissez une couleur.`);
        }

        if (qty <= 0 || qty >= 41)  {
            return alert(`Choisissez une quantité.`);
        }

        let storageKanap = getCart();

        if (storageKanap.length == 0) {
            storageKanap = [{id: id, color: color, qty: qty}];
        } else {
            let storagExist = false;
            for (let i = 0; i < storageKanap.length; i++) {
                if (id === storageKanap[i].id && color === storageKanap[i].color) {
                storagExist = true;
                storageKanap[i].qty += qty;
                }
            }
            if (storagExist == false) {
                let obj = {id: id, color: color, qty: qty};
                storageKanap.push(obj);
            }
        }
        localStorage.setItem(`productChoisis`, JSON.stringify(storageKanap));
        alert(`Votre choix a été ajouter au panier !`)
    }

const addCart = document.getElementById("addToCart");
    addCart.addEventListener ("click", function(event){
        let color = colorValue();
        let qty = parseInt(qtyValue());
        addElement(id, color, qty);
    });






// function addKanap(){ //Ajoute mes choix (couleur quantiter et prix) dans le localstorage

//     let addCart = document.getElementById("addToCart");
//     addCart.addEventListener ("click", function(event){
//         event.preventDefault();

//     const recupColors = document.getElementById("colors").value; 
//     const recupQuantity = document.getElementById("quantity").value;
//     const idProduct = id;
    
//     let arKanap = localStorage.getItem("arKanap");
//     if (arKanap === null){
//         // let getKanap = [id, recupColors, recupQuantity, recupPrice];
//         let getKanap = [{id: idProduct,
//             color: recupColors,
//             quantity: recupQuantity
//         }];
//         let jsonKanap = JSON.stringify(getKanap);
//         window.localStorage.setItem("arKanap", jsonKanap);

//     }else{
//         let parseKanap = JSON.parse(arKanap);
//         parseKanap.push(id, recupColors, recupQuantity);
//         let jsonParsKanap = JSON.stringify(parseKanap);
//         localStorage.setItem("arKanap", jsonParsKanap);
//     }


//     })
//     // if(recupColors === "" || recupQuantity === "0"){
//     //     localStorage.removeItem("arKanap");
//     // }
//     // localStorage.clear();
//     console.log(localStorage);
// }
// addKanap()