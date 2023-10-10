/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.



MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.


MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//const namesur = document.getElementById('nome').value;
//const km = document.getElementById('km').value;
//const age = document.getElementById('eta').value;

const generatebtn = document.querySelector('.generatebtn');
const cancbtn = document.querySelector('.cancelbtn');

/*
console.dir(generatebtn);
console.dir(cancbtn);
*/

generatebtn.addEventListener('click', 
    function() {
        const namesur = document.getElementById('nome').value;
        const km = document.getElementById('km').value;
        const age = document.getElementById('eta').value;
        //in caso di null parte l'alert
        if (namesur === '' || km === '' || age === '') {
            alert ('Inserisci dei dati corretti!');
            
            //console.log(namesur, km, age);

        } else {
            //in ogni altro caso prendo le classi degli elementi in cui riporterò i valori
            const ticket = document.querySelector('.d-none');
            const passenger = document.getElementById('passeggero');
            const category = document.getElementById('offerta');
            const place = document.getElementById('carrozza');
            const cost = document.getElementById('costo');

            //console.log(ticket, passenger, category, place, cost);
        }

    }
);