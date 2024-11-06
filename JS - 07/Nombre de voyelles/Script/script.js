let myVar = prompt("saisir un mot : ");
let nbVoyelles = 0;

for (let p = 0; p < myVar.length; p++) {
    console.log(myVar.substr(p,1));
    if (myVar.substr(p,1) == "a" ||myVar.substr(p,1) == "e"
    || myVar.substr(p,1) == "i" || myVar.substr(p,1) == "o" 
    || myVar.substr(p,1) == "u" || myVar.substr(p,1) == "y"
    || myVar.substr(p,1) == "A" || myVar.substr(p,1) == "E"
    || myVar.substr(p,1) == "I" || myVar.substr(p,1) == "O"
    || myVar.substr(p,1) == "U" || myVar.substr(p,1) == "Y") {
        nbVoyelles++;
    }
}
console.log(nbVoyelles);