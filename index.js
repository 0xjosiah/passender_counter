// document.getElementById("count").innerText = 5

// initialize count at 0
// listen for clicks on increment button
// listen for clicks on decrement button
// increment/decrement when button clicked
// change count-el in HTML to reflect clicks 
let countEl = document.getElementById("count-el");
console.log(countEl)

let count = 0;

function increment () {
    count++;
    countEl.innerText = count;
}
function decrement () {
    if (count > 0) {
        count--;
        countEl.innerText = count;
    }
}
