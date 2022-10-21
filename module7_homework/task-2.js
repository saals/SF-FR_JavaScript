/*
Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

const hasProperty = (str, obj) => str in obj

const student = {status: 'student'}
const user = Object.create(student)
user.name = 'Max'
user.age = 18

console.log(hasProperty('status', user))
console.log(hasProperty('name', user))
console.log(hasProperty('surname', user))
