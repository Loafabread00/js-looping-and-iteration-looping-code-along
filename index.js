// Code your solutions in this file

function writeCards(a,b) {
    let name = [];
    for (let i = 0; i < a.length; i++) {
        name.push(`Thank you, ${ a[i]}, for the wonderful ${b} gift!`);
    }
    return name;
}

function countDown(n) {
    for (let i = n; i >= 0; i--){
        console.log(i);
    }
}

//console.log(writeCards(["Lisa", "Kaitlin", "Jan"], "suprise"));
// console.log(countDown(4));
