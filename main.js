'use strict';

class First {
    hello() {
        console.log('Привет! Я - метод родителя!');
    }
}

class Second extends First {
    hello() {
        super.hello();
        this.hello2();
    }
    hello2() {
        console.log('А я - наследуемый метод!');
    }
}

const obj = new Second();

obj.hello();
