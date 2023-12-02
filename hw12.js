// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let yourArrLength = +prompt("Please enter your array length"); 
let array = [];
for (let i=0; i<yourArrLength; i++) {
    array[i] = prompt("Enter arrays element")
}
console.log(array);

sortedArray = array.sort();
console.log(sortedArray)

sortedArray.splice(1,3)
console.log(sortedArray)