/*Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

class ElectricDevice {
  constructor(name, wattage) {
    this.name = name
    this.wattage = wattage
    this.isPlug = false
  }

  plugIn() {
    if (!this.isPlug) {
      console.log(`${this.name} подключен(а) к электросети`)
      this.isPlug = true
      this._showElectricityConsumption(this.wattage)
    }
  }

  plugOut() {
    if (this.isPlug) {
      console.log(`${this.name} отключен(а) от электросети`)
      this.isPlug = false
      this.wattage = 0
    }
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

//
class Lamp extends ElectricDevice {
  constructor(name, wattage, numberOfLamps = 1) {
    super(name, wattage)
    this.name = name
    this.wattage = wattage * numberOfLamps
    this.numberOfLamps = numberOfLamps
  }

  plugIn() {
    if (!this.isPlug) {
      console.log(`${this.name} подключен(а) к электросети. Светит ламп: ${this.numberOfLamps}шт`)
      this.isPlug = true
      this._showElectricityConsumption(this.wattage)
    }
  }
}

class Computer extends ElectricDevice {
  constructor(name, wattage, hasBattery = false) {
    super(name, wattage)
    this.name = name
    this.wattage = wattage
    this.hasBattery = hasBattery
  }

  reboot() {
    if (this.isPlug) {
      this.plugOut()
      this.plugIn()
      console.log(`${this.name} был перезагружен`)
    }
  }

  turnOnBattery() {
    if (this.hasBattery) {
      this.plugOut()
      console.log(`${this.name} работает от аккумулятора`)
    }
  }
}

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
