/*
Задание 4.
Напишите функцию, которая принимает два числа.
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число,
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

// I variant
const counter1 = function (fromNum, toNum) {
  setInterval(() => {
    if (fromNum <= toNum) {
      console.log(fromNum++)
    }
  }, 1000)
}
counter1(5, 15)

// II variant
const counter2 = function (fromNum, toNum) {
  const delay = 1000
  const counterId = setInterval(() => console.log(fromNum++), delay)
  setTimeout(() => clearInterval(counterId), (toNum - fromNum + 1) * delay)
}
counter2(5, 15)
