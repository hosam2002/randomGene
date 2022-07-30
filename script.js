/* CHECKBOX IDs

    #uppercase
    #lowercase
    #numbers
    #symbols

*/

// Defining Variables

let random, random_2, randNumber, passKey, combination;

// Defining the arrays

let symbols = Array();
let upperca = Array();
let lowerca = Array();

// Assigning the values

symbols = ['@', '#', '$', '%', '&', '*', '+', '~', '!', '?', '}', ')', '(', '{'] // 10
upperca = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'M', 'D', 'F', 'Z'] // 10
lowerca = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'm', 'd', 'f', 'z'] // 10

// Assigning the values

random   = Math.floor(Math.random() * symbols.length );
random_2 = Math.floor(Math.random() * upperca.length );
randNumber = Math.floor(Math.random() * 10000 );

// ADDING EVENT LISTENER

document.querySelector('#btn-generate').addEventListener('click', function(){

    // Creating the password

    if (randNumber > 1000 && random !== undefined && randNumber !== 0000) {
        
        passKey = (random + symbols[random] + upperca[random] + randNumber + symbols[random_2] + random + lowerca[random])
        
        document.querySelector('#output').textContent = passKey;
    }
})

function clickAction(){

    // Creating the password

    if (randNumber > 1000 && random !== undefined && randNumber !== 0000) {
        
        passKey = (random + symbols[random] + upperca[random] + randNumber + symbols[random_2] + random + lowerca[random])

        document.querySelector('#output').textContent = passKey;
    }
}