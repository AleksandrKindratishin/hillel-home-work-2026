// Створити репозиторій із файлом index.html.
//     Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у
// консоль. Використовуючи оператор typeof та console.log

const someString = 'Some string';
console.log(typeof someString);

const someNumber = 24;
console.log(typeof someNumber);

const booleanExample = true;
console.log(typeof booleanExample);

const bigIntExample = 100n;
console.log(typeof bigIntExample);

const infinetyExample = Infinity;
console.log(typeof infinetyExample);

const someSymbol = Symbol('id');
console.log(typeof someSymbol);

const exampleNull = null
console.log(typeof exampleNull);

const someObject = { name: 'Aleksandr' };
console.log(typeof someObject);



// Отримати від користувача 3 рядки та вивести їх у довільному
// порядку однією командою (шаблонні рядки);



// const userStrOne = prompt('Enter your name');
//
// const userStrTwo = prompt('Enter your email');
//
// const userStrThree = prompt('Enter your phone surname');

// console.log(`${userStrOne} ${userStrTwo} ${userStrThree}`);





// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
//
// 10369
//
// 1 0 3 6 9


const myNumber = 10369;

const numberToStr = myNumber.toString()

const result = numberToStr[0] + ' ' + numberToStr[1] + ' ' + numberToStr[2] + ' ' + numberToStr[3] + ' ' + numberToStr[4];

console.log(result)