import './h_w_9.scss';


const cart = [
    {
        title: 'macbook',
        price: 2000,
    },
    {
        title: 'macbook',
        price: 2345,
    },
    {
        title: 'macbook',
        price: 345,
    }
];

function total(samePrice) {
    let summa = 0;
    for (let i = 0; i < samePrice.length; i++){
        summa += cart[i].price;
    }
    console.log(summa);
}

total(cart);

function randominteger(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}
console.log(randominteger(10, 25));

let user = {};
user.name = 'Вася';
console.log(user);
user.surname = 'Петров';
console.log(user);
user.name = 'Сергей';
console.log(user);
delete user.name;
console.log(user);

function isEmpty(obj) {
    if (Object.keys(obj).length == 0){
        console.log(true);
    }
    else {
        console.log(false);
    }
}  

isEmpty(user);
isEmpty({});

let salaries = {
    Penya: 500,
    Vasya: 750,
    Pups: 933,
    Teepock: 1111,
    ard: 'dghdng',
}

function calc(target) {
    if (Object.keys(target).length == 0){
        console.log('null');
    }
    else {
        let summ = 0;
        for (let key in target){
            if (isNaN(target[key])){
                continue;
            }
            summ += target[key];
        }
        console.log(summ);
    }
}
calc({});
calc(salaries);

function moreMoney(target) {
    let maxSalaries = 0;
    if (Object.keys(target).length == 0){
        console.log('нет сотрудников');
    }
    else {
        for (let key in target){
            if (isNaN(target[key])){
                continue;
            }
            if (target[key] > maxSalaries){
                maxSalaries = target[key];
            }
        }
        console.log(maxSalaries);
    }
}

moreMoney(salaries);
moreMoney({});

function multiplayNumerik(target) {
    for (let key in target){
        if (isNaN(target[key])){
            continue;
        }
        target[key] *= 2;
        console.log(target[key]);
    }
}

multiplayNumerik(salaries);

console.log(salaries);

let arr = [1, 5, 12, 54, 125];

// function rando(target) {
//     let rand = Math.floor(Math.random() * target.length);
//     console.log(target[rand]);
// }

// rando(arr);

// let mass = [];
// function query(target) {
//     let num = 0;
//     while(num >= 0) {
//         if (isNaN(num) == true || num === null || num === ''){
//             break;
//         }
//         else {
//             num = prompt('Введите число','');
//             target.push(num);
//         }
//     }
//     target.pop();
//     let summArr = target.reduce((sum, current) => {
//         return +sum + +current;
//     });
//     console.log(summArr);
// }

// query(mass);

// function filterRange(ar, a, b) {
//     let filterResult = [];
//     ar.forEach((item, i, arr) => {
//         if (ar[i] <= b && ar[i] >= a) {
//             filterResult.push(ar[i]);
//         }
//     });
//     console.log(filterResult);
// }

// filterRange(arr, 3, 50);

function find(target, value) {
    let indexFind;
    target.forEach((item, i, arr) => {
        if (item === value) {
            indexFind = i;
        }
        else if (isNaN(indexFind)) {
            indexFind = -1;
        }
    });
    console.log(indexFind);
}

find(arr, 22);

function pow(x, n) {
    let result = x;
    for (let i = 0; i < n-1; i++) {
        result *= x;
    }
    console.log(result);
}

pow(3, 15);

let Feb20_2012 = new Date(1977, 1, 8, 3, 12);

console.log(Feb20_2012);

function getWeekDay(x, y, z) {
    let date = new Date(x, y, z);
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    // let WeekDay = date.getDay();
    // week.forEach((item, i, arr) => {
    //     if (i == WeekDay) {
    //         console.log(week[i]);
    //     }
    console.log(week[date.getDay()]);
}

getWeekDay(1977, 1, 8);