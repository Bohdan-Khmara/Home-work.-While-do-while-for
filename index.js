/**
 * DO WHILE. Task 3
 * @type {number}
 */
let number = Number(prompt('Введите ваше число'));
let power = Number(prompt('В какую степень возвести?'));
let count = 0;
let result = 0;
while (count < power) {
    result += number * number;
    ++count;
}
alert(result);