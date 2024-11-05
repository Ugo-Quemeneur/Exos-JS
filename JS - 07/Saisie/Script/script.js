let n = 1;
let nom;
let liste = "";

do {
    nom = prompt("Saisissez le prénom N°" + n);
    liste += ", " + nom;
    n++;
} 
while (nom != "");

alert(liste + " " + (n-2));