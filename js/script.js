/**
 * Creare un For per generare i numeri da 1 a 100;
 * Creare un IF dove i numeri multipli di 3 si chiamano "Fizz",
 * di 5 si chiamano "Buzz",
 * di 3 e di 5 si chiamano "FizzBuzz"
 * Stampare i restanti numeri
 * 
 * --BONUS--
 * Successivamente stampare tutti i numeri nella section#number-list;
 * Aggiunge carateristiche CSS diverse ad ogni Fizz, Buzz, FizzBuzz o numero...
 */
const printNumberList = document.getElementById("number-list")

for (let i = 1; i <= 100; i++){

    
    if ((i % 3 == 0) && (i % 5 == 0)){
        printNumberList.innerHTML += `<h1 class="color-purple">FizzBuzz</h1>`;
    } else if (i % 5 == 0){
        printNumberList.innerHTML += `<h1 class="color-blue">Buzz</h1>`;
    } else if (i % 3 == 0){
        printNumberList.innerHTML += `<h1 class="color-red">Fizz</h1>`;
    } else{
        printNumberList.innerHTML += `<h1 class="number">${i}</h1>`;
    }
}