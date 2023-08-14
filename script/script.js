function nettoyage(balise){
    while(balise.firstChild){
        balise.removeChild(balise.firstChild);
    }
}

function  accueil(){
    /* accueil reproduit l'affichage de l'écran de base. Plus tard, ajouter le chargement automatique de la fonction */
    /* les 3 lignes à la suite permette de s'assurer que l'écriture du main est vide */
    var balise = document.getElementById("main");
    nettoyage(balise);
    var NewBalise = document.createElement('h3')
    NewBalise.textContent = "Je recherche une alternance";
    balise.appendChild(NewBalise);
    var NewBalise = document.createElement('p')
    NewBalise.textContent = "Je vais vous décrire un peu qui je suis, à travers mes passions, mes expériences bonnes ou mauvaises, mes projets inachevés mais qui m'ont malgré tout appris";
    balise.appendChild(NewBalise);
    var NewBalise = document.createElement('p')
    NewBalise.textContent = "Je vous prie de croire, visiteur, que ce que vous voyez visiteur évoluera encore à l'avenir, à mesure que mes compétences s'amélioreront, peut être avec vous.";
    balise.appendChild(NewBalise);
}

function projets() {
    var balise = document.getElementById("main");
    nettoyage(balise);
    var NewBalise = document.createElement('h3')
    NewBalise.id='project';
    NewBalise.innerHTML = "Mes projets";
    balise.appendChild(NewBalise);
}

function contact(){
    var balise = document.getElementById("contact");
    nettoyage(balise);
    github(balise);
    linkedin(balise);
    mail(balise);
}

function github(balise){
    /* affiche le logo et l'adresse de mon GitHub*/
    var NewBalise3 = document.createElement('a');
    NewBalise3.setAttribute('href',"https://github.com/Altior1");
    var NewBalise2 = document.createElement('img');
    NewBalise2.src="./ressource/github-icon-for-resume-12.jpg";
    NewBalise2.alt="Lien vers mon GitHub";
    NewBalise2.setAttribute('size' , '20 px');
    NewBalise2.setAttribute('width', '40 px');
    NewBalise3.appendChild(NewBalise2);
    balise.appendChild(NewBalise3);
}


function linkedin(balise){
    /* affiche le logo et l'adresse de mon linkedin */
    var NewBalise3 = document.createElement('a');
    NewBalise3.setAttribute('href',"https://www.linkedin.com/in/thomas-rudloft-90b4b4256"); 
    var NewBalise2 = document.createElement('img');
    NewBalise2.src="./ressource/linkedin.png";
    NewBalise2.alt="Lien vers mon Linkedin";
    NewBalise2.setAttribute('size' , '20 px');
    NewBalise2.setAttribute('width', '40 px');
    NewBalise3.appendChild(NewBalise2);
    balise.appendChild(NewBalise3);
}

function mail(balise){
    var NewBalise3 = document.createElement('a');
    var nom = "thomas.rud";
    var domaine = 'mailo.com';
    NewBalise3.setAttribute('href',`mailto:${nom}@${domaine}?Subject=ta%20candidature%20nous%20plait`);
    var NewBalise2 = document.createElement('img');
    NewBalise2.src="./ressource/email.png";
    NewBalise2.alt="pour m'envoyer un mail";
    NewBalise2.setAttribute('size' , '20 px');
    NewBalise2.setAttribute('width', '40 px');
    NewBalise3.appendChild(NewBalise2);
    balise.appendChild(NewBalise3);
}


/* la suite ajoute les différentes fonctions aux balises, pour lancer leurs executions */
var spanElement = document.getElementById('accueil');
spanElement.addEventListener('click',accueil);
var spanElement = document.getElementById('projet');
spanElement.addEventListener('click',projets);
contact();

/* effet envelloppe */
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('mouseenter', () => {
    envelope.style.height = '300px'; // Agrandir la lettre
    letter.style.display = 'block'; // Afficher le texte
});

envelope.addEventListener('mouseleave', () => {
    envelope.style.height = '150px'; // Réduire la lettre
    letter.style.display = 'none'; // Cacher le texte
});