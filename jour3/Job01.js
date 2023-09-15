window.onload = function() {
    let N1 = parseFloat(prompt("Choisissez un nombre", "tapez votre nombre ici"));
    document.writeln("Vous avez choisi le nombre " + N1 + "<br>");

    let N2 = parseFloat(prompt("Choisissez un autre nombre", "tapez votre nombre ici"));
    document.writeln("Vous avez choisi le nombre " + N2 + "<br>");

    if (!isNaN(N1) && !isNaN(N2)) {
        
        document.writeln("La somme de vos deux nombres choisis est " + (N1 + N2) + "<br>");
        document.writeln("La différence de vos deux nombres choisis est " + (N1 - N2) + "<br>");
        document.writeln("Le produit de vos deux nombres choisis est " + (N1 * N2) + "<br>");
        if (N2 !== 0) {
            document.writeln("Le résultat de la division de vos deux nombres choisis est " + (N1 / N2) + "<br>");
        } else {
            document.writeln("La division par zéro n'est pas autorisée." + "<br>");
        }
    } else {
        document.writeln("Erreur! Assurez-vous d'entrer des nombres valides." + "<br>");
    }
};
