class Apple {
    constructor(weight,price) {
        this.RedApple = weight*price;
    }
}

console.log(new Apple(4,3).RedApple);
// expected output: 12

class GreenApple extends Apple{
    constructor(money) {
        super(money,money);
        this.name = "GreenApple";
    }
}