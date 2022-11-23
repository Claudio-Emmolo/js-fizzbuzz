/**
 * Creare un For per generare i numeri da 1 a 100;
 * Stampare i numeri nella console
 * Creare un IF dove i numeri multipli di 3 si chiamano "Fizz",
 * di 5 si chiamano "Buzz",
 * di 3 e di 5 si chiamano "FizzBuzz"
 * 
 * --BONUS--
 * Successivamente stampare tutti i numeri nella section#number-list;
 * Aggiunge carateristiche CSS diverse ad ogni Fizz, Buzz, FizzBuzz o numero...
 */

for (let i = 1; i <= 100; i++){
    console.log(i);
    
    if (i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    }
}