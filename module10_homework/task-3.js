/*
Задание 3.
1. Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.

2. Добавить в чат механизм отправки гео-локации.
При клике на кнопку «Гео-локация» необходимо отправить данные серверу  // какие данные?
и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией.
Сообщение, которое отправит обратно эхо-сервер, не выводить.
*/

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input')
  const btnMsg = document.querySelector('.j-btn-msg')
  const btnGeo = document.querySelector('.j-btn-geo')
  const field = document.querySelector('.field')

// CHAT
  const wsUrl = 'wss://echo-ws-service.herokuapp.com'
  const websocket = new WebSocket(wsUrl)

  websocket.onopen = function (evt) {
    input.removeAttribute('disabled')
    btnMsg.removeAttribute('disabled')
    btnGeo.removeAttribute('disabled')
  }
  websocket.onerror = function (evt) {
    showMessage('Сервер не отвечает')
  }
  websocket.onclose = function (evt) {
    showMessage('Сервер закрылся. Перезагрузите страницу.')
    input.setAttribute('disabled', '')
    btnMsg.setAttribute('disabled', '')
    btnGeo.setAttribute('disabled', '')
  }

  btnMsg.addEventListener('click', () => {
    if (!websocket.onmessage) {
      websocket.onmessage = function (evt) {
        const msg = `Все говорят "${evt.data}", а ты купи слона!`
        showMessage(msg)
      }
    }

    let value = input.value.trim()
    if (value) {
      showMessage(value)
      websocket.send(value)
      input.value = ''
    }
  })

// GEO
  const error = () => {
    showMessage('Невозможно получить ваше местоположение')
  }
  const success = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    websocket.onmessage = null
    websocket.send(`${latitude}/${longitude}`)

    showMapLink(latitude, longitude)
  }

  btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
      showMessage('Geolocation не поддерживается вашим браузером')
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  })

// services
  function showMessage(message) {
    const p = document.createElement('p')
    p.textContent = message
    field.insertAdjacentElement('beforeend', p)
  }

  function showMapLink(latitude, longitude) {
    const a = document.createElement('a')
    a.setAttribute('target', '_blank')
    a.href = `https://www.openstreetmap.org/#map=15/${latitude}/${longitude}`
    a.textContent = 'Ссылка на карту'
    field.insertAdjacentElement('beforeend', a)
  }
})
