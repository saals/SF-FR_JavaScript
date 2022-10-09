/*
Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

let str = 'Hello'

// I variant
let reverseStr1 = str.split('').reverse().join('')
console.log(reverseStr1)

// II variant
let reverseStr2 = ''
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr2 += str[i]
}
console.log(reverseStr2)
