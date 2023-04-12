async function displayKanap(){
        // récuperer l'id du canaper selectionner
    let params = new URLSearchParams(document.location.search);
    let id = params.get ("id");
    console.log(id);


    await fetch("http://localhost:3000/api/products/"+ id) // intégrer l'id du canaper selectionner dans le fetch "+ id"
    .then(res => res.json())

    .then(function(value){
        console.log(value);

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



// function sectionKanap(){
//     document.getElementById('addToCart').click();
//     addEventListener()
// }
// sectionKanap()