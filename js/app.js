const PRICE_POR_KM = 0.21;
const SCONTO_OVER_65 = 40;
const SCONTO_MINORENNI = 20;
// - Chiedere nome e cognome dell'utente
//     - dichiarare una variabile
//     - assegnare alla variabile il valore restituito dall'input text
let userDOMNominative = document.querySelector("#nominative");

console.log(userDOMNominative);
console.log(typeof userDOMNominative);
// - Chiedere numero di chilometri che vuole percorrere 
//     - dichiarare una variabile
//     - assegnare alla variabile il valore restituito dall'input text
let userDOMKilometers = parseInt(document.getElementById("kilometers"));

console.log(userDOMKilometers);
console.log(typeof userDOMKilometers);
console.dir(userDOMKilometers);
// - Calcolare il prezzo totale del viaggio
//     - Calcolare il prezzo standard in base ai chilomerti
let standardPrice = (PRICE_POR_KM * userDOMKilometers);
console.log(standardPrice);

// - Chiedere il tipo di sconto in base all'età
//     - dichiarare una variabile
//     - assegnare alla variabile il valore restituito dal select
let userDOMDiscount = document.getElementById("discount");
console.log(userDOMDiscount);

// - Creare il bottone che ascolti
// - Calalcolare il prezzo finale eventualmente scontato