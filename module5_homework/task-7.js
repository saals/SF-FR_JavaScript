/*
Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/

const someArr = [0, 4, 8, 15, -16, 23, 42, '+', '', null, undefined, true, {key: 'value'}, 0, NaN]

const arrNumbers = someArr.filter(item => typeof item === 'number' && !isNaN(item))

// I variant
const evenNumbers = arrNumbers.filter(item => item % 2 === 0 && item !== 0)
const oddNumbers = arrNumbers.filter(item => item % 2 === 1)
const count0 = arrNumbers.length - evenNumbers.length - oddNumbers.length

console.log(`Массив содержит ${evenNumbers.length} четных и ${oddNumbers.length} нечетных элемента. Значений, равных 0: ${count0} шт.`)

// II variant
let countEven = 0
let countOdd = 0
let countZero = 0

arrNumbers.forEach(item => {
  if (item === 0) {
    countZero++
  } else if (item % 2 === 1) {
    countOdd++
  } else countEven++
})

console.log(`Массив содержит ${countEven} четных и ${countOdd} нечетных элемента. Значений, равных 0: ${countZero} шт.`)
