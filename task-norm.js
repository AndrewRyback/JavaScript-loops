//Task 1 

function isPalindrome(number) {
 
  let str = number.toString();

  
  let reversedStr = str.split("").reverse().join("");

  
  if (str === reversedStr) {
    return true; 
  } else {
    return false; 
  }
}

 
let num = prompt('Введіть число');
let number = parseInt(num);


if (!isNaN(number)) {
    if (isPalindrome(number)) {
        alert(`${number} є паліндромом.`);
    } else {
        alert(`${number} не є паліндромом.`);
    }
} else {
    alert("Будь ласка, введіть правильне число.");
}
//Task 2

    
function calculateDiscount() {
 
  let purchaseAmount = prompt("Введіть суму вашої покупки:");

  
  let amount = parseFloat(purchaseAmount);

  
  if (isNaN(amount) || amount <= 0) {
    alert("Будь ласка, введіть коректну суму.");
    return;
  }

  
  let discount = 0;

  if (amount >= 200 && amount < 300) {
    discount = 3; 
  } else if (amount >= 300 && amount < 500) {
    discount = 5; 
  } else if (amount >= 500) {
    discount = 7; 
  }

  
  let discountAmount = amount * (discount / 100);
  let finalAmount = amount - discountAmount;

  
  alert(
    `Сума до оплати зі знижкою: ${finalAmount.toFixed(
      2
    )} грн. (Знижка: ${discount}%)`
  );
}


calculateDiscount();


// Task 3 


function collectAndAnalyzeNumbers() {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let evenCount = 0;
  let oddCount = 0;


  for (let i = 0; i < 10; i++) {
    let number = parseFloat(prompt(`Введіть число ${i + 1} із 10:`));

   
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

   
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

 
  alert(`Введені числа включають:
    - Додатні: ${positiveCount}
    - Від’ємні: ${negativeCount}
    - Нулі: ${zeroCount}
    - Парні: ${evenCount}
    - Непарні: ${oddCount}`);
}


collectAndAnalyzeNumbers();


// Task 4


let weekday = 7
let nextDay; 

do {
  switch (weekday) {
    case 1:
      nextDay = confirm("Понеділок. Хочеш побачити наступний день?");
      break;
    case 2:
      nextDay = confirm("Вівторок. Хочеш побачити наступний день?");
      break;
    case 3:
      nextDay = confirm("Середа. Хочеш побачити наступний день?");
      break;
    case 4:
      nextDay = confirm("Четвер. Хочеш побачити наступний день?");
      break;
    case 5:
      nextDay = confirm("Пʼятниця. Хочеш побачити наступний день?");
      break;
    case 6:
      nextDay = confirm("Субота. Хочеш побачити наступний день?");
      break;
    case 7:
      nextDay = confirm("Неділя. Хочеш побачити наступний день?");
      break;
  }

  if (nextDay) {
    weekday = weekday + 1;
    if (weekday > 7) {
      weekday = 1;
    }
  }
} while (nextDay);