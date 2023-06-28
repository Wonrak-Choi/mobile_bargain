$(function(){
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    console.log("브라우저 너비 :"+browserWidth);
    console.log("브라우저 높이 :"+browserHeight);
    $('#wrap').css({height:'calHeight'});

    // DOM 객체에 동적 높이값 적용
    $('#wrap').css({height:browserHeight});
})