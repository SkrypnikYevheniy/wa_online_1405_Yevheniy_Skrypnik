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
