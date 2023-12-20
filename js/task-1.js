// Напишіть функцію, яка приймає два параметри (числа) і повертає їхню суму.

function addNumbers(a, b) {
    return a + b;
}
 
   let result = addNumbers (5, 10);
//    console.log(result); // 15

// Напишіть функцію, яка приймає число і повертає true, якщо воно парне, і false, якщо воно непарне.


function isEven(number) {
    return number % 2 === 0;
}

// console.log(isEven(8));


// Напишіть функцію, яка приймає масив чисел і повертає найбільше число з масиву.

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null; 
      }
    return Math.max(...numbers);
      } 
      
      let maxNumber = findMaxNumber([3, 8, 1, 6]);
        
//    console.log(findMaxNumber([3, 8, 1, 6])); // повинно вивести 8
    
    
    
  
  
  