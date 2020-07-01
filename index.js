/**
 * Do while. Task 8
 * @type {number}
 */
let value = Number(prompt('Введите ваше число'));
for (let i = value; i < 100; i += value) {
    if (i % value === 0) {
        console.log(i);
    }

}