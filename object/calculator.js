let calculator = {
    sum(){
        return this.first + this.second;
    },
    mul : function(){
        return this.first * this.second;
    },
    read(){
        this.first = +prompt("첫 번째 값 :");
        this.second = +prompt("두 번째 값 :");
    }
    
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());