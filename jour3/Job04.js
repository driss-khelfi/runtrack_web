window.onload = function() { let N1 = parseFloat(prompt("Choisissez un nombre", "tapez votre nombre ici"));
document.writeln("Vous avez choisi le nombre " + N1 + "<br>");

let N2 = parseFloat(prompt("Choisissez un autre nombre", "tapez votre nombre ici"));
document.writeln("Vous avez choisi le nombre " + N2 + "<br>");

if (!isNaN(N1) && !isNaN(N2)) {
    document.writeln("La somme de vos deux nombres choisis est " + (N1 + N2) + "<br>");
} else {
    document.writeln("Erreur! Assurez-vous d'entrer des nombres valides." + "<br>");
}
   

let result = 0; // Déclarez result ici en dehors du bloc if

if (myString != null) {
    const letterCount = (str) => str.length;
    result = letterCount(myString); // Affectez la valeur à result ici
}
    

    document.getElementById("length").innerHTML = "Le nombre de lettres dans la phrase est : " + result;
};
