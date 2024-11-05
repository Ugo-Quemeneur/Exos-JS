function saisieNombres() {
    let nbr1 = parseInt(prompt("Veuillez entrer votre 1er nombre :"));
    let nbr2 = parseInt(prompt("Veuillez entrer votre 2nd nombre :"));
    let op = prompt("Entrez maintenant l'opérateur :")
    calcul(nbr1, nbr2, op);
}

function calcul(nbr1, nbr2, op) {
    let res
    if (op == "+") {
        res = nbr1 + nbr2;
        message = "Le résultat est " + res;
    }
    if (op == "-") {
        res = nbr1 - nbr2;
        message = "Le résultat est " + res;
    }
    if (op == "*") {
        res = nbr1 * nbr2;
        message = "Le résultat est " + res;
    }
    if (op == "/") {
        if (nbr2 == 0) {
            message = "Erreur"
        }
        else {
            res = nbr1 / nbr2;
            message = "Le résultat est " + res;
        }
    }
    else {
        message = "Erreur";
    }
    return alert(message);
}

saisieNombres();

