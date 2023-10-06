// - Creare il bottone che ascolti
let btnDOMElement = document.getElementById("btn-calc");
console.log(btnDOMElement);

// qui

btnDOMElement.addEventListener('click', function () {
    const PRICE_POR_KM = 0.21;
    const SCONTO_OVER_65 = 40;
    const SCONTO_MINORENNI = 20;

// - Recupero il nome e cognome dell'utente
    //     - dichiarare una variabile
    //     - assegnare alla variabile il valore restituito dall'input text
    let userDOMNominativeInput = document.querySelector("#nominative");
    console.log(userDOMNominativeInput);
    console.log(typeof userDOMNominativeInput);

    // - Recupero il numero di chilometri che vuole percorrere 
    //     - dichiarare una variabile
    //     - assegnare alla variabile il valore restituito dall'input text
    let userDOMKilometers = parseFloat(document.getElementById("kilometers").value);
    console.log("numero chilometri: " + userDOMKilometers);
    console.log(typeof userDOMKilometers);
    
    
    // - Recupero il valore dello sconto
    let userDOMDiscount = parseInt(document.getElementById("discount").value);
    

    console.log("valore select " + userDOMDiscount);
    console.log(typeof userDOMDiscount)

    // - Calcolare il prezzo totale del viaggio
        //     - Calcolare il prezzo standard in base ai chilomerti
    let standardPrice = (PRICE_POR_KM * userDOMKilometers);
    console.log("prezzo standard " + standardPrice);

    // - Calalcolare il prezzo finale eventualmente scontato
    let discount
    
    // Controllo che i km siano un numero corretto
    if (isNaN(userDOMKilometers) || userDOMKilometers < 0) {
        alert("i dati non sono validi");

        console.log("i dati non sono validi");
    } else { // Se i dati dei km sono corretti

        // Applico i vari sconti
        if (userDOMDiscount == 0) {
            discount = (standardPrice * SCONTO_MINORENNI) / 100

        } else if (userDOMDiscount == 2) {
            discount = (standardPrice * SCONTO_OVER_65) / 100
        } else {
            discount = 0
        }
        console.log("sconto " + discount)
    }

    let finalPrice = standardPrice - discount;
    console.log("prezzo finale " + finalPrice);
    console.log(typeof finalPrice);
    

    // Aggiorno il dom con il prezzo finale
    let prezzoDOMElement = document.getElementById('price')
    prezzoDOMElement.innerHTML = "<p>" + finalPrice.toFixed(2) + " &euro;</p>";
    if (isNaN(userDOMKilometers)) {
        prezzoDOMElement.innerHTML = "<p>" + "error" + "</p>"
    } else { 
    }

    let userDOMNominativeResult = document.querySelector(".user-name")
    userDOMNominativeResult.innerHTML = userDOMNominativeInput
    
})


