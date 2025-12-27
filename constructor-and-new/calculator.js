function Calculator() {
    this.read = function(){
        this.first = +prompt("첫 번째 값 :");
        this.second = +prompt("두 번째 값 :");
    }
    this.sum = function(){
        return this.first + this.second;
    }
    this.mul = function(){
        return this.first * this.second;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );