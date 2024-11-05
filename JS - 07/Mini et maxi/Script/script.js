let entier;
let somme = parseInt(0);
let moyenne = parseFloat(0);
let i = 0
let maxi = 0
let mini = 100000000000000

do {
    entier = parseInt(prompt("Entrez un entier :"));
    somme += entier;
    i++
    if (entier > maxi) {
        maxi = entier
    }
    if (entier < mini && entier !=0) {
        mini = entier
    }
}
while (entier != 0);

moyenne = somme / (i-1)
alert("moyenne : " + moyenne + ", somme : " + somme + ", maximum : " + maxi + ", minimum : " + mini);