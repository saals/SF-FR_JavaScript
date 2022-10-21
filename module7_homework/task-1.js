/*
Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

const showObjectInfo = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`ключ: ${key}, значение: ${obj[key]}`)
    }
  }
}

const student = {status: 'student'}

const user = Object.create(student)
user.name = 'Max'
user.age = 18

showObjectInfo(user)

//
const showObjectInfo1 = obj => {
  Object.keys(obj).forEach(key => console.log(`ключ: ${key}, значение: ${obj[key]}`))
}
showObjectInfo1(user)
