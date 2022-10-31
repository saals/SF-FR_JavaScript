/*
Задание 4.
Напишите код приложения, который содержит в себе 2 инпута и кнопку,, при нажатии происходит следующее:

Если число не совпадает от 100 до 500
    — выводить ниже текст «число вне диапазона от 100 до 500»
Если число попадает в диапазон от 100 до 500
    — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all, где get-параметр 320 и 240 — это введённые числа..
                                        ( https://loremflickr.com/320/240 )
      (сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.)

Пример: если пользователь ввёл 320 и 240, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
                                                             ( https://picsum.photos/150/200. )
После получения данных вывести ниже картинку на экран.

Подсказка: получение данных из input.
const value = document.querySelector('input').value;
*/
document.querySelector('.task-4').style.display = 'block'
const task3 = document.querySelector('.task-3')
task3.parentNode.removeChild(task3)
//

const btn = document.querySelector('button')
const list = document.querySelector('.list')

btn.addEventListener('click', async () => {
  let url = 'https://picsum.photos'
  const inputs = document.querySelectorAll('input')

  for (const input of inputs) {
    if (+input.value < 100 || +input.value > 500 || isNaN(+input.value)) {
      console.log('число вне диапазона от 100 до 500')
      return
    } else {
      url += `/${input.value}`
    }
  }

  const res = await useRequest(url)
  list.innerHTML = `<img src="${res}" alt="photo">`
})

function useRequest(url) {
  return fetch(url)
    .then(response => {
      return response.url
    })
    .catch(err => console.log(err))
}
