const people = { name: "Jean", age: "23", city: "Marseille" };

var result = ""; // Définissez result ici

if (!isNaN(people.age) && isNaN(people.name) && isNaN(people.city)) {
    result = "Voici " + people.name + " âgé de " + people.age + " ans et qui habite " + people.city;
    document.getElementById("bio").innerHTML = result;
}
