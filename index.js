/**
 *
 * @type {number}
 */
let value = Number(prompt('Введите ваше число'));
let factorial = value;
let count = value;

while (count > 1) {
    count--
    factorial = factorial * count;
    alert(factorial);
}


