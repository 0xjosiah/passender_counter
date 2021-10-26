// document.getElementById("count").innerText = 5

// initialize count at 0
// listen for clicks on increment button
// listen for clicks on decrement button
// increment/decrement when button clicked
// change count-el in HTML to reflect clicks 
let countEl = document.getElementById("count-el");
// console.log(countEl)

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

let entryCountInstance = '';
let entriesEl = document.getElementById('entries-el')
function save() {
    entryCountInstance += count + ', '
    entriesEl.textContent = entryCountInstance;
    count = 0;
    countEl.innerText = count;
}
// let eraseBtn = document.getElementById('erase-btn')

function erase() {
    entryCountInstance = '';
    entriesEl.textContent = entryCountInstance
    // entryCountInstance.slice(entryCountInstance.length - 1, )
    // entriesEl.innerText = eraseBtn.innerText
}


