fetch("http://localhost:3000/api/products/")
.then(res => res.json())

.then(function(value){
    for(let i = 0; i < value.length; i++){
       document.querySelector(".items").innerHTML +=
                `<a href="./product.html?id=${value[i]._id}">
                    <article>
                        <img src=${value[i].imageUrl} alt=${value[i].altTxt}>
                        <h3 class="productName">${value[i].name}</h3>
                        <p class="productColors">${value[i].colors}</p>
                        <p class="productDescription">${value[i].description}</p>
                        <p class="productPrice">${value[i].price}€</p>
                    </article>
                 </a>`
                 ;
                }})

.catch(function(error){
    console.log('Il y a un problème avec le fetch : ' + error.message);
});


