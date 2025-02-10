/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.
 - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

 /* tools:
 - prompt per chiedere i km all'utente
 - prompt per chiedere l'età all'utente
 - const e let
 - math random e math floor
 - if , else
 - operatore modulo
 - console.log e alert */

 // raccolta dati

 const numberKm = Number(prompt("inserire il numero di km che si vuole percorrere, esempio [200, 300, 350 ecc..]"))
 console.log(numberKm);

 const userAge = Number(prompt("inserire l'età"))
 console.log(userAge);

 // generare il prezzo del biglietto 

 const priceTicket = numberKm * 0.21
 console.log(priceTicket);

 // sconto per minorenni

 if (userAge < 18){
    priceTicket * 20 / 100
 } else{
    priceTicket
 }
 console.log(priceTicket);
 
 
 
 