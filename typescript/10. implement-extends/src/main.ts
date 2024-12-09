class Car {
  mileage = 0;
  price = 100;
  color = "white";

  drive() {
    return "drive";
  }

  brake() {
    return "brake";
  }
}

interface Part {
  seats: number;
  tire: number;
}

class Ford extends Car {}
// class Ford implements Car {} // error. Car에 가지고 있는 속성과 메서드를 가지고 있어야함
class Ford1 implements Car {
  mileage = 1111;
  price = 2000;
  color = "red";
  seats = 1;
  tire = 4;

  drive() {
    return "drive!";
  }

  brake() {
    return "brake!";
  }
}

const myFordCar = new Ford();
