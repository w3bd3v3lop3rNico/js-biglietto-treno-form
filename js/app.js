// - Creare il bottone che ascolti
let btnDOMElement = document.getElementById("btn-calc");
console.log(btnDOMElement);

// qui

btnDOMElement.addEventListener('click', function () {
    const PRICE_POR_KM = 0.21;
    const SCONTO_OVER_65 = 40;
    const SCONTO_MINORENNI = 20;

    // - Recupero il numero di chilometri che vuole percorrere 
    //     - dichiarare una variabile
    //     - assegnare alla variabile il valore restituito dall'input text
    let userDOMKilometers = parseInt(document.getElementById("kilometers"));
    console.log(userDOMKilometers);
    console.log(typeof userDOMKilometers);
    console.dir(userDOMKilometers);

    // - Recupero il nome e cognome dell'utente
    //     - dichiarare una variabile
    //     - assegnare alla variabile il valore restituito dall'input text
    let userDOMNominative = document.querySelector("#nominative");
    console.log(userDOMNominative);
    console.log(typeof userDOMNominative);

    // - Recupero il valore dello sconto
    let userDOMDiscount = document.getElementById("discount");
    console.log(userDOMDiscount);

    // - Calcolare il prezzo totale del viaggio
        //     - Calcolare il prezzo standard in base ai chilomerti
        let standardPrice = (PRICE_POR_KM * userDOMKilometers);
        console.log(standardPrice);

    // - Calalcolare il prezzo finale eventualmente scontato
    let finalPrice

    // Controllo che i km siano un numero corretto
    if (isNaN(userDOMKilometers) || userDOMKilometers < 0) {
        alert("i dati non sono validi");
        console.log("i dati non sono validi");
    } else { // Se i dati dei km sono corretti

        // Applico i vari sconti
        if (userDOMDiscount.value == 0) {
            finalPrice = (standardPrice * SCONTO_MINORENNI) / 100

        } else if (userDOMDiscount.value == 2) {
            finalPrice = (standardPrice * SCONTO_OVER_65) / 100
        }
    
        // Aggiorno il dom con il prezzo finale
        let prezzoDOMElement = document.getElementById('price')
        prezzoDOMElement.innerHTML = '<p>' + finalPrice.toFixed(2) + ' &euro;</p>'
    }
})


