"use strict";
//Задача №1
const text = prompt("Are you user?", "hello");
alert(text);
// console.log (hello);

//Задача №2
const firstNumber = +prompt("Первое число?", 1);
const secondNumber = +prompt("Второе число?", 2);
alert(firstNumber + secondNumber);
// console.log(firstNumber + secondNumber)

//Задача №3
const userName = prompt("what is your name?", "");
const userAge = prompt("What is your age", "");
if (userAge >= 18) {
  alert("hello");
} else userAge < 18;
{
  alert `Goodbye ${userName}`;
}

//Задача №4
const ok = confirm("Хотите вввести название блока?");
if (ok) {
  const nameBlock = prompt("Введите название блока", "");
  if (nameBlock) {
    const okey = confirm("Хотите ввести название элемента");
    if (okey) {
      const nameElement = prompt("Введите название элемента", "");
      if (nameElement) {
        const yes = confirm("Хотите ввести название модификатора");
        if (yes) {
          const nameModificator = prompt("Введите название модификатора", "");
          alert(nameBlock + " " + nameElement + " " + nameModificator);
          console.log(nameBlock + " " + nameElement + " " + nameModificator);
        } else {
          alert(nameBlock + " " + nameElement);
          console.log(nameBlock + " " + nameElement);
        }
      }
    } else {
      alert(nameBlock);
      console.log(nameBlock);
    }
  }
} else {
  alert("элементу не присвоен класс");
}

//Задача №5
const firstN = prompt("введите первое число", '');
const secondN = prompt("введите второе число", '');
const result = prompt("выберите одно из следующих действий: plus, div, minus, mult", '');
if( result === "div"){
console.log(+firstN / +secondN)
}
if( result === "plus"){
  console.log(+firstN + +secondN)
}
if(result === "minus"){
  console.log(+firstN - +secondN)
}
if(result === "mult"){
  console.log(+firstN * +secondN)
}

