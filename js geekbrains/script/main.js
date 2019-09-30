// lesson 2

console.log("1. Дан код:")

console.log('var a = 1, b = 1, c, d')
console.log('c = ++a; alert(c);      c = 2, потому что сначала увеличиваем а, затем сохраняем в c')
console.log('d = b++; alert(d);      d = 1, потому что сначала передаем значение b в переменную d, потом увеличиваем b')
console.log('c = (2+ ++a); alert(c); c = 5, потому что сначала а (которая равна 2 из предыдущего вычисления) увеличиваем на единицу, а за тем 3 + 2')
console.log('d = (2+ b++);           d = 4, потому что b = 2 после предыдущего вычисления, 2 + 2 = 4, а b теперь будет равно 3')
console.log('alert(a);               a = 3, потомоу что a увеличилась на единицу в прошлом вычислении')
console.log('alert(b);               b = 3, после предыдущего вычисления')



/* lesson 1

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
*/