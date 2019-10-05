// lesson 1

console.log("Урок 1. Основы языка JavaScript\n")
console.log("")
console.log("")


console.log("Задача 1: Перевод градусов из Цельсия в Фаренгейт.")

var grad_C = prompt("Какую температуру желаете перевести?")
var grad_F = (9/5)*grad_C + 32
console.log(grad_C + "°C = " + grad_F + "°F")
console.log("")

console.log("Задача 2. Работа с переменными.")
var admin
var name = "Василий"

admin = name
console.log(admin)
console.log("")

console.log("Задача 4. Чему будет равно JS-выражение 1000 + '108'?")
console.log("1000 + '108' будет равно ", 1000 + "108", " потому что JS приводит число 1000 к строковому типу и конкатенирует строки")
