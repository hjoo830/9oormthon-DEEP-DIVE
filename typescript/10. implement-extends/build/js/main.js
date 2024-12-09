"use strict";
class Car {
    constructor() {
        this.mileage = 0;
        this.price = 100;
        this.color = "white";
    }
    drive() {
        return "drive";
    }
    brake() {
        return "brake";
    }
}
class Ford extends Car {
}
// class Ford implements Car {} // error. Car에 가지고 있는 속성과 메서드를 가지고 있어야함
class Ford1 {
    constructor() {
        this.mileage = 1111;
        this.price = 2000;
        this.color = "red";
        this.seats = 1;
        this.tire = 4;
    }
    drive() {
        return "drive!";
    }
    brake() {
        return "brake!";
    }
}
const myFordCar = new Ford();
