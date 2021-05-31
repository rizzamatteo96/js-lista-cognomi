// Mail
// 1 - Chiedi all’utente la sua email,
// 2 - controlla che sia nella lista di chi può accedere,
// 3 - stampa un messaggio appropriato sull’esito del controllo.

// creazione variabile di registro
var regUser = ['gino@gmail.com', 'pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];

var actualUser = prompt('Inserisci la tua email');

var found = 'L\'email inserita non è registrata all\'interno del database';

for(var i = 0; i < regUser.length; i++) 
{
    if(actualUser == regUser[i]){
        found = 'Bentornato utente ' + actualUser;
    }
}

//mostra risultato controllo
document.getElementById('mail').innerHTML = found;
console.log(found);