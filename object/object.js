//프로퍼티 합계 구하기
//모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드 작성

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let x in salaries){
    sum += salaries[x];
}

console.log(sum);