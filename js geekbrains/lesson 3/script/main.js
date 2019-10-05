// lesson 3

console.log('1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100')
console.log('')

var i = 2
var spisok = []

function prosto(num) {
    if (num < 2) {
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0){
            return false
        }
    }
    return true
}

while (i <= 100){
    if (prosto(i)){
        spisok.push(i)
    }
    i++
}

console.log(spisok)


console.log('')
console.log('')
console.log('3. Практикум. Угадай число (БЕЗ ЦИКЛОВ) - рекурсия')
console.log('Напишем первую игру — «Угадай число». Браузер будет загадывать случайное четырехзначное число, а мы будем отгадывать.')
console.log('Попытки отгадать число будут идти через диалоговое окно — prompt. Браузер будет сообщать в ответ, больше или меньше загаданного наш ответ.')
console.log('')

var num = +Math.floor(Math.random() * 1000)
console.log(num)

function check(s){
    if (!isNaN(s)){
        return s
    } else {
        s = prompt("Ошибка! Введите число")
        check(s)
    }
}

function guessNumber(num){
    x = check(+prompt("Угадай число!"))
    if (x > num){
        alert("Меньше!")
        guessNumber(num)
    } else if (x < num){
        alert("Больше!")
        guessNumber(num)
    } else {
        alert ("Угадал!")
    }
}

guessNumber(num)


console.log('')
console.log('')
console.log('4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:')
console.log('for(…){// здесь пусто}')
console.log('')

var list = []
var i = 0

for (i; list.push(i) <= 9 ; i++){}

console.log(list.join('\n'))


console.log('')
console.log('')
console.log('4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:')
console.log('*')
console.log('**')
console.log('***')
console.log('****')
console.log('*****')

list = []

for (var i=1; i <= 20; i++){
    list.push('*')
    console.log(list.join(''))
}
