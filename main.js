const character = prompt("please enter a character: ");
const count = prompt("please enter a number: ");
let inverted = prompt("please enter either true or false: ");
const rows = [];


function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i <= count; i++) {
    if (inverted) {
	rows.unshift(padRow(i, count));
    } else {
	rows.push(padRow(i, count));
    }
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
