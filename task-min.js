
//Task 1

alert('Привіт!');
let age = prompt('Скільки вам років?');


if (age <= 11) {
    alert('Ви дитина!');
} else if (age <= 17) {
    alert('Ви підліток!');
} else if (age <= 59) {
    alert('Ви дорослий!');
} else if (age >= 60 , age <= 100) {
    alert('Ви пенсіонер!');
} else {
    alert('Це не є віком!');
} 



//Task 2


alert('Hi!');
let number = prompt('Write a number between 0-9');

if (number = 0) {
  alert(")");
} else if (number = 1) {
  alert("!");
} else if (number = 2) {
  alert("@");
} else if (number = 3) {
  alert("#");
} else if (number = 4) {
  alert("$");
} else if (number = 5) {
  alert("%");
} else if (number = 6) {
    alert('^');
} else if (number = 7) {
    alert('&');
} else if (number = 8) {
    alert('*');
} else if (number = 9) {
    alert('(');
}
else {
    alert("It's not a number between 0-9!!");
}



//Task 3 

alert('Привіт! Дізнаємось сумму діапазону!');
let startNumber = Number(prompt('Введи початкове значення!'));
let endNumber = Number(prompt('Введи кінцеве значення'));
let sum = 0;

if (isNaN(startNumber) || isNaN(endNumber)) {
    alert('Ви ввели не корректні числа!');
} else if (startNumber > endNumber) {
    alert('Початкове значченя не може бути більшим за кінцеве');
} else {
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }
    alert(`Сумма діапазону від ${startNumber} до ${endNumber} дорівнює ${sum}`);
}


//Task 4

alert('Привіт! Знайдемо дільники');
let firstNumber = Number(prompt('Введи перше число'));
let secondNumber = Number(prompt('Введи друге число'));


while (secondNumber != 0) {
    let remainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = remainder;
}

alert(`Найбільший спільний дільник є ${firstNumber}`);


// Task 5


alert('Дізнаємось всі дільники числа');
let num = Number(prompt('Введи число'));

if (isNaN(num) || num <= 0) {
    alert('Будь ласка, введіть правильне число.');
} else {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    alert(`Дільники числа ${num}: ${divisors.join(",")} `);

} 
findDivisors();