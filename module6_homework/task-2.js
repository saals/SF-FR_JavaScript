/*
Задание 2.
Написать функцию, которая принимает на входе любое число (но не больше 1 000),
определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

function saySimpleOrNot(num) {
  let isSimple = true

  if (num > 1000) {
    console.log('данные неверны')
    return
  } else if (num < 2) {
    isSimple = false
  } else {
    for (let i = 2; i <= num ** 0.5; i++) {
      if (num % i === 0) {
        isSimple = false
        break
      }
    }
  }

  isSimple
    ? console.log(`${num} - простое число`)
    : console.log(`${num} - не является простым числом`)
  return isSimple
}


// test 1
for (let i = -2; i < 14; i++) {
  saySimpleOrNot(i)
}

console.log(saySimpleOrNot(1001))

// test 2
const getRandomNum = function (num1, num2) {
  const max = Math.max(num1, num2)
  const min = Math.min(num1, num2)

  return Math.floor(Math.random() * (max - min + 1) + min)
}

let isSimpleNum
for (let i = 1; i < 4; i++) {
  isSimpleNum = saySimpleOrNot(getRandomNum(14, 100))
  console.log(isSimpleNum)
}

// test 3
const simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
const randomNum = getRandomNum(199, -3)

if (simpleNumbers.includes(randomNum) && saySimpleOrNot(randomNum)) {
  console.log('Correct')
} else if (simpleNumbers.includes(randomNum) && !saySimpleOrNot(randomNum)) {
  console.warn('Что-то не так!!!')
}

if (!simpleNumbers.includes(randomNum) && !saySimpleOrNot(randomNum)) {
  console.log('Correct')
} else if (!simpleNumbers.includes(randomNum) && saySimpleOrNot(randomNum)) {
  console.warn('Что-то не так!!!')
}
