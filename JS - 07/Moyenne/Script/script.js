let entier;
let somme = parseInt(0);
let moyenne = parseFloat(0);
let i = 0

do {
    entier = parseInt(prompt("Entrez un entier :"));
    somme += entier;
    i++
}
while (entier != 0);

moyenne = somme / (i-1)
alert("moyenne : " + moyenne + ", " + "somme : " + somme);