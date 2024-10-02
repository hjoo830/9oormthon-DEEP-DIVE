// 상품 클래스를 정의
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// 기본 고객 클래스
class Customer {
  constructor(name) {
    this.name = name;
  }

  // 주문 생성 메서드
  createOrder(products) {
    return new Order(this, products);
  }
}

// VIP 고객 클래스는 Customer 클래스를 상속받음
class VIPCustomer extends Customer {
  constructor(name, discountRate) {
    super(name);
    this.discountRate = discountRate;
  }

  // VIP 고객은 할인을 받을 수 있음
  createOrder(products) {
    const order = super.createOrder(products);
    order.applyDiscount(this.discountRate);
    return order;
  }
}

// 주문 클래스
class Order {
  #totalAmount = 0; // 프라이빗 필드로 캡슐화

  constructor(customer, products) {
    this.customer = customer;
    this.products = products;
    this.#totalAmount = this.calculateTotal();
  }

  // 총 주문 금액을 계산하는 메서드
  calculateTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  // 할인을 적용하는 메서드
  applyDiscount(discountRate) {
    this.#totalAmount *= 1 - discountRate;
  }

  // 주문 상세 정보를 출력하는 메서드
  printOrderDetails() {
    console.log(`고객: ${this.customer.name}`);
    console.log(`주문한 상품:`);
    this.products.forEach((product) => {
      console.log(`- ${product.name}: ${product.price.toLocaleString()}원`);
    });
    console.log(`총 금액: ${this.#totalAmount.toLocaleString()}원\n`);
  }

  // 총 금액을 외부에서 접근하기 위한 getter
  getTotalAmount() {
    return this.#totalAmount;
  }
}

// 상품 생성
const product1 = new Product("키보드", 100000);
const product2 = new Product("마우스", 30000);

// 일반 고객과 VIP 고객 생성
const regularCustomer = new Customer("황효주");
const vipCustomer = new VIPCustomer("빌게이츠", 0.1); // 10% 할인

// 일반 고객이 주문하는 경우
const regularOrder = regularCustomer.createOrder([product1, product2]);
regularOrder.printOrderDetails();

// VIP 고객이 주문하는 경우
const vipOrder = vipCustomer.createOrder([product1, product2]);
vipOrder.printOrderDetails();
