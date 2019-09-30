// lesson 2

console.log("1. Дан код:")
console.log('')

console.log('var a = 1, b = 1, c, d')
console.log('c = ++a; alert(c);      c = 2, потому что сначала увеличиваем а, затем сохраняем в c')
console.log('d = b++; alert(d);      d = 1, потому что сначала передаем значение b в переменную d, потом увеличиваем b')
console.log('c = (2+ ++a); alert(c); c = 5, потому что сначала а (которая равна 2 из предыдущего вычисления) увеличиваем на единицу, а за тем 3 + 2')
console.log('d = (2+ b++);           d = 4, потому что b = 2 после предыдущего вычисления, 2 + 2 = 4, а b теперь будет равно 3')
console.log('alert(a);               a = 3, потомоу что a увеличилась на единицу в прошлом вычислении')
console.log('alert(b);               b = 3, после предыдущего вычисления')

console.log('')
console.log('')


console.log('2. Чему будет равен x в примере ниже?')
console.log('')

var a = 2;
var x = 1 + (a *= 2);

console.log(x)       //x = 1+(2*2) = 5

console.log('')
console.log('')


console.log('3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:')
console.log('если a и b положительные, вывести их разность;')
console.log('если а и b отрицательные, вывести их произведение;')
console.log('если а и b разных знаков, вывести их сумму;')
console.log('ноль можно считать положительным числом.')
console.log('')


function check(s){
    if (!isNaN(s)){
        return s
    } else {
        s = prompt("Ошибка! Введите число")
        check(s)
    }
}

var a = prompt("Введите первое число")
a = +check(a)

var b = prompt("Введите второе число")
b = +check(b)

if (a >= 0 && b >= 0){
    console.log(a - b)
} else if (a < 0 && b < 0){
    console.log(a * b)
} else {
    console.log(a + b)
}

console.log('')
console.log('')


console.log('4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. (НИКАКИХ ЦИКЛОВ)')
console.log('')


var a = +prompt('Введите число от 0 до 15 включительно')
if (check(a) && a >= 0 && a <= 15) {
    switch (a) {
        case 0: console.log('0')
        case 1: console.log('1')
        case 2: console.log('2')
        case 3: console.log('3')
        case 4: console.log('4')
        case 5: console.log('5')
        case 6: console.log('6')
        case 7: console.log('7')
        case 8: console.log('8')
        case 9: console.log('9')
        case 10: console.log('10')
        case 11: console.log('11')
        case 12: console.log('12')
        case 13: console.log('13')
        case 14: console.log('14')
        case 15: console.log('15')
        break
    }
} else {
    console.log("Число вне диапазона")
}

console.log('')
console.log('')


console.log('5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.')
console.log('')


function plus(a, b) {
    return a+b
}

function minus(a, b) {
    return a-b
}

function multi(a, b){
    return a*b
}

function div(a, b) {
    if (b != 0) {
        return a/b
    } else {
        console.log('На ноль делить нельзя!')
    }
}

console.log('')
console.log('')


console.log('6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),')
console.log('где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций ')
console.log('(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).')
console.log('')


function mathOperation(a, b, operation) {
    a = check(a)
    b = check(b)
    switch (operation) {
        case plus:
            return plus(a, b)
            break
        case minus:
            return minus(a, b)
            break
        case multi:
            return multi(a, b)
            break
        case div:
            return div(a, b)
            break
    }
}

console.log(mathOperation(1, 4, plus))    // 1 + 4 = 5
console.log(mathOperation(6, 5, minus))   // 6 - 5 = 1
console.log(mathOperation(20, 2, multi))  // 20 * 2 = 40
console.log(mathOperation(10, 5, div))    // 10 / 5 = 2


console.log('')
console.log('')


console.log('7. *Сравнить null и 0. Попробуйте объяснить результат.')
console.log('')


console.log('0 - это цифра ноль. Тип данных "number". Обладает методами и свойствами этого типа данных')
console.log('Null - это свой собственный тип данных "null". Это ничего, не ноль и не что-то. Неизменен, не имеет свойств и методов. Его присваивают к объектам, значение которых не определено, либо когда объест больше не нужен. Он отправляется к сборщику мусора.')
typeof null  //"object"
typeof 0     // "number"


console.log('')
console.log('')

console.log('8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.')
console.log('')


function power(val, pow) {
     if (pow < 0){
        console.log('Степень должна быть больше 0')
    }else if (pow == 0) {
        return 1
    } else if (pow == 1) {
        return val
    } else if (pow > 1) {
        return val * power(val, pow-1)
    }
}

console.log(power(3, 5))   // 3 ** 5 = 243
console.log(power(2, 1))   // 2 ** 1 = 2
console.log(power(4, 0))   // 4 ** 0 = 1
console.log(power(7, -4))  // -4 < 0
console.log(power(6, 3))   // 6 ** 3 = 216