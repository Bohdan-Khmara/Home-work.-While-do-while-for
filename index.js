/**
 * DO WHILE. Task 4
 * @type {number}
 */
let firstNumber = Number(prompt('Введите ваше первое число'));
let secondNumber = Number(prompt('Введите ваше второе число'));
let count = 1;
let divider1 = 0;
let divider2 = 0;
if (firstNumber > secondNumber) {
    while (count < firstNumber) {
        if (firstNumber % count === 0 && secondNumber % count === 0) {
            divider1 = firstNumber / count;
            divider2 = secondNumber / count;
            console.log(divider1, divider2);
            ++count;
        } else  {
            ++count;
        }
    }
} else {
    while (count < secondNumber) {
        if (firstNumber % count === 0 && secondNumber % count === 0) {
            divider1 = firstNumber / count;
            divider2 = secondNumber / count;
            console.log(divider1, divider2);
            ++count;
        }else {
            ++count;
        }

    }
}

