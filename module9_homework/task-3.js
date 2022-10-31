/*
Задание 3.
Напишите код приложения, интерфейс которого представляет собой input и кнопку.
В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10
    — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10
    — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all,
      (сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10,
      где get-параметр limit — это введённое число.)

Пример: если пользователь ввёл 5, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
                                                      (https://picsum.photos/v2/list?limit=5.)
После получения данных вывести ниже картинки на экран.

Подсказка: получение данных из input.
const value = document.querySelector('input').value;
*/
document.querySelector('.task-3').style.display = 'block'
//

const btn = document.querySelector('button')
const list = document.querySelector('.list')

btn.addEventListener('click', function () {
  let url = 'https://picsum.photos/v2/list?limit='

  let value = +document.querySelector('input').value
  if (value < 1 || value > 10 || isNaN(value)) {
    console.log('значение вне диапазона от 1 до 10')
    return
  }
  url = url + value
  useRequest(url, createList)
})

function useRequest(url, cb) {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.onerror = function () {
    console.error('Что за черт!')
  }
  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log('xhr.status = ' + xhr.status)
      return
    }
    const res = JSON.parse(xhr.response)
    console.log(res)
    if (cb) {
      cb(res)
    }
  }
  xhr.send()
}

function createList(data) {
  data.forEach(item => {
    const img = `<img src="${item.url}" alt="photo">`
    list.insertAdjacentHTML('beforeend', img)
  })
}
