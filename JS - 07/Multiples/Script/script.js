let n = prompt("Entrez la valeur de N");
let x = prompt("Entrez la valeur de X");
let i = 0;
let msg = "";

while (i < n) {
    i++;
    msg += i + " x " + x + " = " + (i*x) + "\n";
}

alert(msg);