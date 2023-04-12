let params = new URLSearchParams(document.location.search);
let id = params.get ("id");
console.log(id);

fetch("http://localhost:3000/api/products/"+ id)
.then(res => res.json())
.then(function(value){
    console.log(value);
       document.querySelector(".item__img").innerHTML +=
                `<img src=${value.imageUrl} alt=${value.altTxt}>`;

        document.getElementById("title").innerHTML +=
         `${value.name}`;

        document.getElementById("price").innerHTML +=
         `${value.price}`;

        document.querySelector(".item__content__description").innerHTML +=
                `<p id="description">${value.description}</p>`;
        })
// .then (function(Colors){
//     console.log(Colors);
// for(let i = 0; i < colors.length; i++){
    
//     document.getElementById("colors").innerHTML +=
//         `<option value="${Colors[i].colors}">${Colors[i].colors}</option>`;
//                     }})



        

.catch(function(error){
    console.log('ALERT : ' + error.message);
    });
