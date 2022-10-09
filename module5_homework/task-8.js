/*
Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

const someMap = new Map([['alex', 'name'], [48, 'age'], [true, 1]])

someMap.set('e', 2.718281828)

for (const key of someMap.keys()) {
  console.log(`Ключ — ${key}, значение — ${someMap.get(key)}`)
}

// или так:
for (const [key, value] of someMap) {
  console.log(`Ключ — ${key}, значение — ${value}`)
}
