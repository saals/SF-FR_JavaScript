/*
Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/

const createEmptyObjWithoutProto = function () {
  /*const obj = {}
  obj.__proto__ = null         // не стоит использовать в коде
  return obj*/

  return Object.create(null)
}

const obj = createEmptyObjWithoutProto()
console.log(obj)
console.log(typeof obj)
console.log(Object.getPrototypeOf(obj))
