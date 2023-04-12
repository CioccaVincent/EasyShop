async function displayKanaps(){
    await fetch("http://localhost:3000/api/products/") // conextion avec l'API
    .then(res => res.json())

    .then(function(value){
        for(let i = 0; i < value.length; i++){ //boucle pour afficher tous les kanap de la base de donner
        document.querySelector(".items").innerHTML += //conextion avec le HTML
                    `<a href="./product.html?id=${value[i]._id}">
                        <article>
                            <img src=${value[i].imageUrl} alt=${value[i].altTxt}>
                            <h3 class="productName">${value[i].name}</h3>
                            <p class="productColors">${value[i].colors}</p>
                            <p class="productDescription">${value[i].description}</p>
                            <p class="productPrice">${value[i].price}€</p>
                        </article>
                    </a>` //le code concatener qu'on envoie dans le HTML
                    ;
                    }})

    .catch(function(error){
        console.log('Il y a un problème avec le fetch : ' + error.message);
    });
}
displayKanaps()

// async function permet de structurer le code et de le rendre plus rapide lors du chargement


