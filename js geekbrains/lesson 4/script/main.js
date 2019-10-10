//lesson 4

console.log('1. Написать функцию, преобразующую число в объект.')
console.log('Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.')
console.log('Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.')
console.log('Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.')
console.log('')

function createNum (num) {
    if (num.length > 3) {
        console.log('Число больше 999')
        return []
    } else if (num.length > 2){
        return {
            'единицы': +num[2],
            'десятки': +num[1],
            'сотни':   +num[0]
        }
    } else if (num.length > 1){
        return {
            'единицы': +num[1],
            'десятки': +num[0],
            'сотни':   0
        }
    } else if (num.length > 0){
        return {
            'единицы': +num[0],
            'десятки': 0,
            'сотни':   0
        }
    }
}

var a = createNum(prompt('Введите число:'))
console.log(a)


console.log('')
console.log('')
console.log('2. Реализовать собственный каталог товаров')
console.log('')

const POS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const THINGS = ['Pencil', 'Pen', 'Notebool', 'Classbook', 'Straightedge', 'Schoolbag', 'Pencil case', 'Album', 'School uniform', 'Paints']
const PRICES = [20, 34, 20, 10, 25, 30, 18, 24, 56, 71]

let magaz = {
    catalog: [],
    cart: [],
    sum: 0,

    createCatalog: function() {
        for (let i = 0; i < THINGS.length; i++) {
            this.catalog.push (this._createProduct (THINGS[i], PRICES[i], POS[i]))
        }
    },

    _createProduct: function (name, price, id) {
        return {
            name: name,
            id: id,
            price: price
        }
    },

    calcSum: function () {
        for (let pos of this.catalog) {
            this.sum += pos.price
        }
    }
}

magaz.createCatalog()

console.log(magaz)

