//함수표현식으로 구성된 코드를 화살표 함수로 바꾸기

const ask = (question, yes, no) => {
    if(confirm(question)) yes()
        else no();
};

ask(
    "동의하십니까?",
    () => alert("동의하셨습니다."),
    () => alert("취소 버튼을 누르렸스빈다.")
)