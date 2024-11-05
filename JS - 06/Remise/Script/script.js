function saisieNombres() {
  let pu = parseFloat(prompt("Veuillez entrer le prix unitaire :"));
  let qtecom = parseInt(prompt("Veuillez entrer la quantité commandée :"));
  calcul(pu, qtecom);
}

function calcul(pu2, qtecom2) {
  let tot = parseFloat(pu2 * qtecom2);
  let pap;
  let port;
  let rem = 0;
  if (tot < 500) {
    port = tot * 0.02;
    if (port < 6) {
      port = 6;
    }
   
  } else {
    port = 0;
  }

  if (tot < 200 && tot > 100) {
    rem = tot * 0.05;
  } else if (tot > 200) {
    rem = tot * 0.1;
  }
  pap = tot + port - rem;
  message = "PAP : " + pap;
  return alert(message);
}

saisieNombres();
