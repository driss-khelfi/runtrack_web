var array = ["Apple", "Banana", "Cherry", "Lemon"];

var result = ""; // Définissez result ici

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    result += array[i] + "<br>";
}

document.getElementById("demoFor").innerHTML = result;

var result2 = ""; // Définissez result ici

array.forEach(function(arrayElement) {
    console.log(arrayElement);
    result2 += arrayElement + "<br>";
});

document.getElementById("demoForEach").innerHTML = result2;
