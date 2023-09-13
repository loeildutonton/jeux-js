// Chaque tour possède un score temporaire (ROUND) et un score global (GLOBAL)
// A chaque tour, le joueur a son ROUND initialisé à 0 et peu lancer le dé autant de fois qu'il le souhaite
// Le résultat d'un lancer est ajouté au ROUND

// Au clic sur le bouton "HOLD" permet d'envoyer les points du ROUND vers le GLOBAL. Ça sera alors à l'autre joueur de jouer.
// Lancé le dé. Si 1 alors le score ROUND est perdu et fin du tour
//le premier joueur qui atteint 100 points sur GLOBAL gagne le jeu


// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDe = function () {
    // Générer un nombre entre 1 et 6
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)

    // Retourner ce nombre
    return nombre
}

const clickSurBouton = () => {
    // Lancer le dé virtuel et récupérer le résultat
    const resultat = lancerDe();

    // Jouer la bande son
        const audio = new Audio('assets/son.mp3');

    // Quand la bande son est chargé lancer le son
    audio.addEventListener("canplaythrough", function() {
        audio.play();
    });

    audio.addEventListener('ended', function () {
        // Récupère l'image
        const img = document.getElementById('imageDe');
        // Ajouter l'attribut src avec le résultat
        img.src = 'assets/images/de' + resultat + '.svg';
    });
}

// Récupérer le bouton
const btnLancerDe = document.getElementById('rollDice');
// Exécuter le lancer de dé au click
btnLancerDe.addEventListener('click', clickSurBouton);