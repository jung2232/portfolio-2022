// 풀페이지
$(function(){

	$('#fullpage').fullpage({
		//options here
        anchors: ['section1', 'section2', 'section3', 'section4','section5'], //풀페이지 섹션 번호
        navigation: true, 
        navigationPosition:'right',
        sectionsColor: ['#d8dfff', '#d8dfff', '#d8dfff', '#d8dfff','#d8dfff',], //섹션 1번부터 배경색상

        afterLoad: function(anchorLink, index){
            console.log("현재 섹션 번호는"   + index);
            // if(index == 4){
            //     alert('잘부탁드립니다.')
            // }
        },

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("현재 슬라이드 번호는" + slideIndex);
        
        },
        
	});
});

// 햄버거 메뉴
$(document).ready(function () {
    // hamburger-button 클릭하면 mo-gnb 모바일 메뉴 나오게 함

        $('.hamburger-button').on('click', function (event) {
            event.preventDefault();

            $(this).toggleClass('active'); //햄버거메뉴에 class .active가 붙으면서 모양이 바뀜
            $('.overlay').toggleClass('visible');
            //모바일 메뉴에 .visible class를 붙여줌으로써 visibility: hidden;에서 visible이 되어 등장하게 됨
        });
        $('.menu a').click(function(){
            $('.hamburger-button').removeClass('active');
        });

    //li 클릭하면 #gnb-mo 모바일 메뉴 닫히게 함
    //mobile 메뉴의 ul li 클릭 시 해당 section으로 이동하며, 메뉴를 노출 시켰던 .overlay class가 remove되면서 숨겨지게 됨
    $('.hover-line').click(function () {
        $('.overlay').removeClass('visible');
    });
});


// 스와이퍼
var swiper = new Swiper(".mySwiper", {
    direction: "vertical", 
    autoplay: true, 
    slidesPerView: 1,
    spaceBetween: 30, 
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



//플로팅 이미지
function random(min, max){
    //toFixed
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject (selector, delay, size){
    //gsop문법 => gsap.to(요소, 지속시간초단위, 옵션)
    gsap.to(selector, random(1.5,2.5),{
        y : size,
        repeat : -1, //몇 번 반복할지 설정, -1 무한반복
        yoyo : true, //한 번 재생된 애니메이션을 다시 뒤로 재생
        ease : Power1.easeOut,
        delay : random(0, delay),
    })
}
floatingObject('.floating1', 1, 15);






