function demanderNombre() {
    let nbr = prompt("Veuillez entrer un nombre :");
    pairImpair(nbr);
}

function pairImpair(nbr) {
    if (nbr%2==0) {
        message = "nombre pair";
    }
    else {
        message = "nombre impair";
    }
    return alert(message);
}