// Fonction pour récupérer le panier dans le localStorage
const getCart = () => {   
    let storageKanap = [];
    if (localStorage.getItem(`selectedProduct`) != null) { 
        storageKanap = JSON.parse(localStorage.getItem(`selectedProduct`));
    }
    return storageKanap;
}