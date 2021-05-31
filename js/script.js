// Mail
// 1 - Chiedi all’utente la sua email,
// 2 - controlla che sia nella lista di chi può accedere,
// 3 - stampa un messaggio appropriato sull’esito del controllo.

// creazione variabile di registro
var regUser = ['gino@gmail.com', 'pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];

// step 1
var actualUser = prompt('Inserisci la tua email');

var found = 'L\'email inserita non è registrata all\'interno del database';

// step 2
for(var i = 0; i < regUser.length; i++) 
{
    if(actualUser == regUser[i]){
        found = 'Bentornato utente ' + actualUser;
    }
}

// step 3 - mostra risultato controllo
document.getElementById('mail').innerHTML = found;
// console.log(found);





//-------------------------------------------------------------------------------------------
// Lista Cognomi:
// 1 - chiedi all’utente il cognome
// 2 - inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3 - stampa la lista ordinata alfabeticamente
// 4 - scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var regSurname = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
// console.log(regSurname);

// step 1
var userSurname = prompt('Inserisci il tuo cognome');

// step 2
regSurname.push(userSurname);
console.log(regSurname);

// step 3
regSurname.sort();

// step 4
var pos = 0;
for (var i = 0; i < regSurname.length; i++) {
    if (userSurname == regSurname[i]){
        pos = i;
    }
}

console.log(pos);
console.log(regSurname);