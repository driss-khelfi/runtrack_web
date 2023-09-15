
const myArray = ["Apple", "Banana", "Cherry"];

// Ajouter un élément au début du tableau (Lemon)
const newItemStart = "Lemon"; 
const newArrayStart = [newItemStart, ...myArray]; 

// Ajouter un élément à la fin du tableau (Orange)
const newItemEnd = "Orange";
const newArrayEnd = [...myArray, newItemEnd];

document.getElementById("demo").innerHTML = newArrayStart; // Affiche le tableau avec Lemon au début
document.getElementById("demo2").innerHTML = newArrayEnd;   // Affiche le tableau avec Orange à la fin

const newArrayWithoutFirstItem = myArray.slice(1);

document.getElementById("demo").innerHTML = newArrayWithoutFirstItem; // Affiche le tableau sans le premier élément
