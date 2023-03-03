// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Naame = "Tashfeen Raza";
var lowerCase = Naame.toLowerCase();
var UpperCase = Naame.toUpperCase();
var TitleCase = Naame;
Naame.toLowerCase();
Naame.split(" ");
Naame.map(function (word) { return word.replace(word[0], word[0].toUpperCase()); })
    .join(" ");
console.log(lowerCase);
console.log(UpperCase);
console.log(TitleCase);
