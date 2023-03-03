// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Naame="Tashfeen Raza";
let lowerCase=Naame.toLowerCase();
let UpperCase=Naame.toUpperCase();
let TitleCase=Naame;
Naame.toLowerCase();
Naame.split(" ");
Naame.map((word) => word.replace(word[0], word[0].toUpperCase()))
.join(" ");
console.log(lowerCase);
console.log(UpperCase);
console.log(TitleCase);