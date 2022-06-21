/* traccia
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

//percorso logico
/*
1 - creo una const per contenere la risposta dell'utente ai kilometri da percorrere, la cambio in numero con parseInt e la verifico con console.log(variabile)
2 - creo il prompt per ottenere la risposta dall'utente
3 - creo una const per contenere la risposta dell' utente alla domanda sulla sua età, la cambio in numero con parseInt e verifico che tutto funzioni con console.log(..)
4 - validazione dati inseriti!!
5 - creo una const per contenere il calcolo del prezzo (0.21 * km)
6 - creo una let per definire quali valori e quali sconti andrò ad applicare
7 - calcolo prezzo finale del biglietto   
*/

// 1 + 2
const userDistance = parseInt(prompt("Quale distanza in km vuoLe percorrere?", "es. 100"));
console.log("Distanza da percorrere:" + userDistance + " km");

// 3

const userAge = parseInt(prompt("qual'è la Sua età?", "Inserisca qui la sua età in numeri"));
console.log("Età passeggero: " + userAge);

// 4 next

// 5

const ticketPrice = (userDistance * 0.21);
console.log("Il costo del biglietto sarebbe di: " + ticketPrice);

// 6

let discountedPrice;

if (userAge < 18) {

    discountedPrice = (ticketPrice - (ticketPrice * 0.2)).toFixed(2)

}

else if (userAge > 65) {
    discountedPrice = (ticketPrice - (ticketPrice * 0.4)).toFixed(2)
}

else {
    discountedPrice = ticketPrice
};

console.log("Il costo del biglietto scontato è: " + discountedPrice);


document.getElementById("final-price").innerHTML = "Il costo per il Suo viaggio è di: €" + `${discountedPrice}`