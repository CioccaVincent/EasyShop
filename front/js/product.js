let params = new URLSearchParams(document.location.search);
let name = params.get("_id"); 


fetch("http://localhost:3000/api/products/")
// {
//     "method": "GET",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     "body": JSON.stringify({ product: get_id() })
// }
.then(res => res.json())
.then(function(value){
    for(let i = 0; i < value.length; i++){
       document.querySelector(".item__img").innerHTML +=
                `<img src=${value[i].imageUrl} alt=${value[i].altTxt}>`
                 ;
                }})

.catch(function(error){
    console.log('Il y a un problème avec le fetch : ' + error.message);
});