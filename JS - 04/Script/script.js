function demanderNom() {
    let nom = prompt("Veuillez entrer votre nom :");
    if (nom) {
        demanderPrenom(nom);
    }
}

function demanderPrenom(nom) {
    let prenom = prompt("Veuillez entrer votre prénom :");
    if (prenom) {
        demanderSexe(nom, prenom);
    }
}

function demanderSexe(nom, prenom) {
    let sexe = prompt("Êtes-vous un homme ou une femme ? (H/F)");
    if (sexe) {
        afficherInformations(nom, prenom, sexe);
    }
}

function afficherInformations(nom, prenom, sexe) {
    let genre = sexe.toLowerCase() === 'h' ? 'Homme' : 'Femme';
    let message = "Bonjour Monsieur " + nom + " " + prenom + "\n" +
                  "Bienvenue sur notre site web !" 
    alert(message);
}