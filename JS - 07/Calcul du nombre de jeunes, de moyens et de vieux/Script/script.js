let jeunes = parseInt(0);
let moyens = parseInt(0);
let vieux = parseInt(0);
let age = 0;

do {
    age = parseInt(prompt("Entrez l'âge :"))
    if (age < 20) {
        jeunes++;
    }
    if (age >= 20 && age <= 40) {
        moyens++;
    }
    if (age > 40) {
        vieux++;
    }
} 
while (age <= 100)

alert("Jeunes : " + jeunes + " Moyens : " + moyens + " Vieux : " + vieux)