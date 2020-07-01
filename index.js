/**
 * Do while. Task 7
 * @type {number}
 */
let value = 1000;
let divider = 2;
let count = 0;
do {
    value = value / 2;
    ++count;
} while (value > 50);
alert(`${value}; ${count}`);