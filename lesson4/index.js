// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач



// let name = prompt("What is your name?");
//
// alert(`Hello ${name}! How are you?`);







// Дано тризначне число, яке надае користувач, потрибно визначити:
//
//     Чи правда, що всі цифри однакові?
//     Чи є серед цифр цифри однакові?

let userNumber = +prompt("Enter your number");

if (userNumber >= 100 && userNumber <= 999) {
    let userNumberToStr = String(userNumber);

    if (userNumberToStr[0] === userNumberToStr[1] && userNumberToStr[1] === userNumberToStr[2]) {
        alert('All numbers is identical!');
    } else if (userNumberToStr[0] === userNumberToStr[1] || userNumberToStr[0] === userNumberToStr[2] || userNumberToStr[1] === userNumberToStr[2]) {
        alert('Some numbers are identical!');
    } else {
        alert('All numbers different!')
    }
} else {
    alert('Reload page and enter correct number!');
}

