//Task 1 

function guessNumber() {
  let min = 0; // Початкове значення мінімального діапазону
  let max = 100; // Початкове значення максимального діапазону
  let guess;
  let response;

  alert("Загадайте число від 0 до 100, а я спробую його відгадати.");


  while (min <= max) {
 
    guess = Math.floor((min + max) / 2);
    response = prompt(
      `Ваше число > ${guess}, < ${guess} або == ${guess}? Введіть '>', '<' або '=='`
    );

   
    if (response === "==") {
      alert(`Ваше число ${guess}. Я вгадав!`);
      break; 
    } else if (response === ">") {
      min = guess + 1; 
    } else if (response === "<") {
      max = guess - 1; 
    } else {
      alert("Будь ласка, введіть правильну відповідь: '>', '<' або '=='.");
    }
  }
}


guessNumber();


//Task 2//
function printMultiplicationTable() {

  for (let i = 2; i <= 9; i++) {
    console.log(`Таблиця множення для ${i}:`);

    
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }

    
    console.log("");
  }
}


printMultiplicationTable();


//Task 3 
function getNextDate(day, month, year) {
  
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  
  day++;

  
  if (day > daysInMonth[month - 1]) {
    day = 1;
    month++;

   
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  return `${day}.${month}.${year}`;
}

function isLeapYear(year) {
 
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


let day = parseInt(prompt("Введіть день:"));
let month = parseInt(prompt("Введіть місяць:"));
let year = parseInt(prompt("Введіть рік:"));


if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
  let nextDate = getNextDate(day, month, year);
  alert(`Наступна дата: ${nextDate}`);
} else {
  alert("Будь ласка, введіть правильні значення дня, місяця та року.");
}
