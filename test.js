// Récupération de la référence de la balise <span> par son ID
const spanElement = document.getElementById('mon-span');

// Fonction JavaScript à exécuter lors du clic sur la balise <span>
function maFonctionClic() {
    console.log('La fonction a été exécutée !');
    // Ajoutez ici le code que vous souhaitez exécuter lors du clic sur la balise <span>
}

// Ajout d'un gestionnaire d'événement "click" à la balise <span>
spanElement.addEventListener('click', maFonctionClic);
