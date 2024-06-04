// CIAO GIUSEPPE! 
// Buon Lunedì e grazie per la correzione! 

/*
Dato questo object:

```js
const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};
```

vorrei scrivere del codice che possa:

- stampare un console.log per ogni skill presente in coder.skills 
    ```
    // output aspettato:
    'JavaScript'
    'HTML'
    'CSS'
    ```

- salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street".
  Eseguiamo poi un console.log per controllare tutto sia OK.

- Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
    ```
    // output aspettato:
    "firstName"
    "lastName"
    "age"
    "skills"
    "address"
    ```

- Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
    ```
    // output aspettato:
    age: 29
    address: [object Object]
    ```

- Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.

    ```js
    const key = prompt('...');
    const value = prompt('...');

    coder[...] = ...;
    ```
*/

// oggetto

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

// stampare un console.log per ogni skill presente in coder.skills 
// console.log(coder.skills[0]);
// console.log(coder.skills[1]);
// console.log(coder.skills[2]);
for(let value of coder.skills) {
    console.log(value)
}
console.log('*****************************')

// salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street".
//country
const keyCountry = 'country';
const valueCountry = prompt('Inserisci qui la tua città!')
coder.address[keyCountry] = valueCountry;
// street
const keyStreet = 'street';
const valueStreet = prompt('Inserisci qui il tuo indirizzo!')
coder.address[keyStreet] = valueStreet;
// Eseguiamo poi un console.log per controllare tutto sia OK.
console.log(coder.address)
console.log('*****************************')

// Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
for (let key in coder) {
    console.log(key)
}
console.log('*****************************')

// Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
const vowels = 'aeiou'
for (let key in coder) {
    if(vowels.includes(key[0])) {
    const value = coder[key]
    console.log(`${key} ${value}`)
    }
}
console.log('*****************************')

// Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire.
let userKey = prompt('Quale nuova proprietà vorresti aggiungere all\'interno dell\'oggetto?');
const userValue = prompt('La tua nuova proprietà è stata agginta! Attribuiscile un valore')
// Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.
// coder.userKey = userValue;
coder[userKey] = userValue;  
console.log(coder)
console.log('******************************')

// parola palindroma corretto (ho solo aggiunto il join alla prompt per modificarla da array a stringa:)
let string = prompt
('Inserisci una parola e ti dirò se è palindroma')
.toLowerCase()
.split('')
.join('');
let length = string.length;
let isPalindrome = true;
// ed usare un for per poter controllare se è palindroma.
for (let i = 0; i < length; i++) {
    // console.log(string[i])
    let index = string[i];
    // console.log(index)
    let isLast = length -1 -i;
    // console.log(isLast)
        if (index !== string[isLast]){
            isPalindrome = false;
            break;
        }
}
if (isPalindrome) {
    console.log(`Successo! la parola ${string} è palindroma`)
} else {
    console.log(`la parola ${string} non è palindroma`)
}