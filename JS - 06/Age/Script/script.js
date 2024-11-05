function demanderAge() {
    let age = prompt("Veuillez entrer votre année de naissance :");
    mineurMajeur(age);
}

function mineurMajeur(age) {
    if (age <= 2006) {
        message = "Vous êtes majeur";
    }
    else {
        message = "Vous êtes mineur";
    }
    return alert(message);
}