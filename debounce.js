// create input  in html file >> <input type="text" id="search" placeholder="Type to search..." onkeypress="BetterFunction()" />
// Debouncing code here

let count = 0;

function getData() {
    console.log('Debounce call function:- ', count++)
}

function myDebounc(callFx, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);            
        }
        timer =  setTimeout(() => {
            callFx()
        }, delay)
    }
}

const BetterFunction = myDebounc(getData, 1000)
