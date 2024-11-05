function saisieNombres() {
    let cel = confirm("Êtes-vous marié ?");
    let enf = parseInt(prompt("Veuillez entrer votre nombre d'enfant :"));
    let sal = parseInt(prompt("Entrez maintenant votre salaire mensuel :"));
    calcul(cel, enf, sal);
}

function calcul(cel2, enf2, sal2) {
    let part;
    if (cel2 == true) {
        part = 25;
    }
    else {
        part = 20;
    }
    part = part + enf2 * 10;
    if (sal2 < 1200) {
        part = part + 10;
    }
    if (part > 50) {
        part = 50;
    }
    message = part + " %";
    return alert(message);
}

saisieNombres();