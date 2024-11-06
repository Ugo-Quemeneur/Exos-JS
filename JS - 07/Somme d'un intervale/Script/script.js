let n1 = prompt("Entrez n1 :");
let n2 = prompt("Entrez n2 :");
let i = parseInt(n1);
let liste = parseInt(0);

if (n1 < n2) {
    while (i >= n1 && i <= n2) {
        liste += i;
        i++;
    }
}
else {
    while (i >= n2 && i <= n1) {
        liste += i;
        i--;
    }
}

alert(liste);