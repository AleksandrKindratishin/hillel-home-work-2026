// // Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)
//
// let num = 20;
// let stringNum = [];
//
// while (num <= 30) {
//     stringNum.push(num)
//     num += 0.5;
// }
//
// console.log(stringNum.join(' '))


// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів


// const dollarCost = 26;
//
// for (let i = 10; i <= 100; i += 10) {
//     let result = dollarCost * i;
//     console.log(`${i}$ cost ${result} UAH`);
// }


// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N


// let number = +prompt("Enter a number", '1 and >');
//
// for (let i = 1; i <= 100; i++) {
//     if (i ** 2 <= number) {
//         console.log(i);
//     }
// }



// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число,
// більше 1, що не має інших дільників, крім 1 і себе).



let number = +prompt("Enter a number", '>1');
let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} is prime`);
} else {
    console.log(`${number} is not prime`);
}