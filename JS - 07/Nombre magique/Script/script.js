let magic = parseInt(Math.random() *100);
let guess = 0;

do {
    do {
        guess =  parseInt(prompt("Entrez un nombre"))
        if (guess < magic) {
            alert("Plus grand");
        }
        if (guess > magic) {
            alert("Plus petit");
        }
    } 
    while (guess != magic);

    alert("Bravo !");
    confirm("Voulez-vous rejouer ?");
} 
while (true);