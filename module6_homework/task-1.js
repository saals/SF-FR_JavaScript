/*
Задание 1.
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
вызовите функцию, проанализируйте синтаксис.
*/

const someArr = [0, 4, 8, 15, -16, 23, 42, '+', '', null, undefined, true, {key: 'value'}, 0, NaN]

function showArrInfo(arr) {
  const arrNumbers = arr.filter(item => typeof item === 'number' && !isNaN(item))
  let countEven = 0
  let countOdd = 0
  let countZero = 0

  for (const item of arrNumbers) {
    if (item === 0) {
      countZero++
    } else if (item % 2 === 1) {
      countOdd++
    } else countEven++
  }

  console.log(`Массив содержит ${countEven} четных и ${countOdd} нечетных элемента. Значений, равных 0: ${countZero} шт.`)
}

showArrInfo(someArr)
