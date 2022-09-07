const elFooter = document.querySelector('footer'); // js 에 footer 를 변수에 집어 넣음
const elcon_wrap = document.querySelector('#con_wrap');

// #con_wrap의 높이 구하기 - footer 에 fixed 사용 안 할 때

let winH = $(window).height(); // 열려져 있는 화면의 높이
console.log(winH);

// 안 바뀌는 건 const
const headerH = $('header').height(); // header 높이
console.log(headerH);

const footerH = elFooter.offsetHeight; // footer 높이 
// js 의 높이는 offsetHeight 속성에 관한 부분은 () 안들어감 
console.log(`현재 화면 높이 ${winH} / header의 높이 ${headerH} / footer의 높이 ${footerH}`); // `` ${} 문자열과 표현식 

// #con_wrap의 높이는 화면 전체의 세로에서 header, footer 높이를 빼준 값이다
let con_wrap_Height = winH - (headerH + footerH); // = 는 뒤에 있는 값을 앞에 집어 넣는다 (같다라는 뜻 아님!!)
//$('#con_wrap').css({height:con_wrap_Height}); //제이쿼리 방식
console.log(con_wrap_Height);

elcon_wrap.style.height = `${con_wrap_Height}px`; // js 방식 // #con_wrap 높이 지정

// 자바 스크립트 방식으로 
window.addEventListener('resize',function(){
    let winH = $(window).height();
    let con_wrap_Height = winH - (headerH + footerH);  // headerH 와 footerH 는 고정이지만 winH 은 변경되기 때문에 가져옴
    elcon_wrap.style.height = `${con_wrap_Height}px`;
}); 
/* 
문서 전체를 하기 때문에 window 로 
addEventListener 화면 전체에 이벤트
고정인 건 가져올 필요 없음 (headerH, footerH)
*/


// lnb 슬라이드 메뉴

var du = 400; 
var open = 0;  // 0을 open에 할당 // 메뉴가 닫혀 있는 상태(처음)

$('.lnb_btn').click(function(){
    // 조건문
    if(open == 0){ 
        // 비교연산자 : == 일치한다 (타입은 구분 X)
        // 닫혀 있는 상태인지 조건문으로 확인
        $('#wrap').animate({left:274},400); //px 을 생략해도 기본적으로 px 로 생각함
        $('#lnb').animate({left:0},400);
        $('.cover').fadeIn(du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb_active.png', 'alt':'메뉴닫기'});  // .find(img) img 태그를 찾으라는 뜻 // 여기 나오는 {} 는 여러개 나열할 때 사용
        // 변수나 자체적인 함수명(명령어) 외 외부 요소는 '' 를 입력해야 함
        open = '열림';
    } else{
        $('#wrap').animate({left:0},400);
        $('#lnb').animate({left:-274},400);
        $('.cover').fadeOut(du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb.png', 'alt':'메뉴열기'});
        open = '0';
    }
});

