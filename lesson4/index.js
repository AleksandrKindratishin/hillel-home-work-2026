// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач



// let name = prompt("What is your name?");
//
// alert(`Hello ${name}! How are you?`);







// Дано тризначне число, яке надае користувач, потрибно визначити:
//
//     Чи правда, що всі цифри однакові?
//     Чи є серед цифр цифри однакові?

// let userNumber = +prompt("Enter your number");
//
// if (userNumber >= 100 && userNumber <= 999) {
//     let userNumberToStr = String(userNumber);
//
//     if (userNumberToStr[0] === userNumberToStr[1] && userNumberToStr[1] === userNumberToStr[2]) {
//         alert('All numbers is identical!');
//     } else if (userNumberToStr[0] === userNumberToStr[1] || userNumberToStr[0] === userNumberToStr[2] || userNumberToStr[1] === userNumberToStr[2]) {
//         alert('Some numbers are identical!');
//     } else {
//         alert('All numbers different!')
//     }
// } else {
//     alert('Reload page and enter correct number!');
// }
//





// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
//     запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
//     При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
//     його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце
// точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
//     Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту,
//     то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
//
// Все це має бути відображено в одному вікні (алерті).
//
//     Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не
// захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .



// const yearOfBirdth = +prompt('Enter your year of birdth');
// if (!yearOfBirdth) {
//     alert('It is a pity that you did not want to enter your date of birdth(')
//     throw new Error('Birdth is undefined')

// }


// const userBirdth = new Date().getFullYear() - yearOfBirdth;
//
// const userSity = prompt('Enter your sity');
// if (!userSity) {
//         alert('It is a pity that you did not want to enter your sity(')
//         throw new Error('City is undefined')
// }
//
// const userFavoriteSport = prompt('Enter your favorite Sport');
// if (!userFavoriteSport) {
//         alert('It is a pity that you did not want to enter your favorite sport(')
//         throw new Error('User Sport is undefined')
//
// }
//
// let cityMessage;
//
// if (userSity === 'Kyiv') {
//     cityMessage = 'you live in capital of Ukraine';
// } else if (userSity === 'Washington') {
//     cityMessage = 'you live in capital of USA';
// } else if (userSity === 'London') {
//     cityMessage = 'you live in capital of United Kingdom';
// } else {
//     cityMessage = `you live in ${userSity}`;
// }
//
// let sportMessage;
//
// if (userFavoriteSport === 'Football') {
//     sportMessage = 'Cool! Do ypu want be new Messi?';
// } else if (userFavoriteSport === 'MMA') {
//     sportMessage = 'Cool! Do ypu want be new Anderson Silva?'
// } else if (userFavoriteSport === 'WWE') {
//     sportMessage = 'Cool! Do ypu want be new Rendy Orton?'
// } else {
//     sportMessage = `Cooll! I like ${userFavoriteSport} to!`;
// }
//
// alert(`You old is ${userBirdth} and ${cityMessage}, ${sportMessage}`);




// Переписати код нижче з використанням конструкції switch…case


    // let numOrStr = prompt('input number or string');
    // console.log(numOrStr)
    //
    //
    // if (numOrStr === null) {
    //     console.log('ви скасували')
    // } else if (numOrStr.trim() === '') {
    //     console.log('Empty String');
    // } else if (isNaN(+numOrStr)) {
    //     console.log(' number is Ba_NaN')
    // } else {
    //     console.log('OK!')
    // }


let numOrStr = prompt('input number or string')
console.log(numOrStr);

switch (true) {
    case null:
        console.log('Вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty string');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_Nan');
        break
    default:
        console.log('OK')
}