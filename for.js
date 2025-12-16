//for 반복문을 이용하여 짝수 출력하기

let sum = 0;

for(let i = 2; i <= 10; i++){
    if(i%2 === 0){
        sum += i;
    } 
}

console.log(sum);