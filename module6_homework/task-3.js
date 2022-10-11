/*
Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function externalFunc(num1) {
  return function (num2) {
    return num2 + num1
  }
}

const innerFunc = externalFunc(23)
const result = innerFunc(42)
console.log(result)
