/*
Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
*/

function ElectricDevice(name, wattage) {
  this.name = name
  this.wattage = wattage
  this.isPlug = false
}

ElectricDevice.prototype.plugIn = function () {
  if (!this.isPlug) {
    console.log(`${this.name} подключен(а) к электросети`)
    this.isPlug = true
    this._showElectricityConsumption(this.wattage)
  }
}
ElectricDevice.prototype.plugOut = function () {
  if (this.isPlug) {
    console.log(`${this.name} отключен(а) от электросети`)
    this.isPlug = false
    this.wattage = 0
  }
}
ElectricDevice.prototype._showElectricityConsumption = (function () {
  let counter = 0
  return function (wattage = 0) {
    setInterval(() => {
      if (this.isPlug) {
        console.clear()
        console.log(`"накрутило" на счетчике ${(counter += wattage / 3600).toFixed(2)} Вт*сек`)
      }
    }, 1000)
  }
})()

// светильники
function Lamp(name, wattage, numberOfLamps = 1) {
  this.name = name
  this.wattage = wattage * numberOfLamps
  this.numberOfLamps = numberOfLamps
}

Lamp.prototype = new ElectricDevice()
Lamp.prototype.plugIn = function () {
  if (!this.isPlug) {
    console.log(`${this.name} подключен(а) к электросети. Светит ламп: ${this.numberOfLamps}шт`)
    this.isPlug = true
    this._showElectricityConsumption(this.wattage)
  }
}

// компы
function Computer(name, wattage, hasBattery = false) {
  this.name = name
  this.wattage = wattage
  this.hasBattery = hasBattery
}

Computer.prototype = new ElectricDevice()
Computer.prototype.reboot = function () {
  if (this.isPlug) {
    this.plugOut()
    this.plugIn()
    console.log(`${this.name} был перезагружен`)
  }
}
Computer.prototype.turnOnBattery = function () {
  if (this.hasBattery) {
    this.plugOut()
    console.log(`${this.name} работает от аккумулятора`)
  }
}

// все, что нажито непосильным трудом
const wallLamp = new Lamp('Бра', 72)
const floorLamp = new Lamp('Торшер', 60, 3)
const computer = new Computer('ПК', 720)
const notebook = new Computer('Ноут', 360, true)

console.log(wallLamp, floorLamp, computer, notebook)

// floorLamp.plugIn()    // 0.05 wt*sec если вкл
floorLamp.plugIn()
// floorLamp.plugOut()
floorLamp.plugOut()
// floorLamp.plugIn()
// floorLamp.plugIn()
floorLamp.plugOut()
// floorLamp.plugOut()

// computer.plugIn()    // 0.2 wt*sec если вкл
computer.plugIn()
// computer.plugOut()
computer.plugOut()
// computer.plugIn()
computer.plugIn()
// computer.plugOut()
// computer.plugOut()
computer.reboot()
// computer.reboot()

// notebook.plugIn()    // 0.1 wt*sec если вкл
notebook.plugIn()
// notebook.plugOut()
// notebook.plugOut()
// notebook.plugIn()
// notebook.plugIn()
// notebook.plugOut()
// notebook.plugOut()
notebook.turnOnBattery()
// notebook.plugIn()
// notebook.reboot()
notebook.reboot()

// wallLamp.plugIn()    // 0.02 wt*sec если вкл
wallLamp.plugIn()
wallLamp.plugOut()
wallLamp.plugOut()
wallLamp.plugIn()
wallLamp.plugIn()
// wallLamp.plugOut()
// wallLamp.plugOut()

// debugger
