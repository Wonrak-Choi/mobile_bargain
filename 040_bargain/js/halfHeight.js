var bw = $(window).width();
var bh = $(window).height();
$('#wrap').css({height:bh});
// 브라우저 높이의 반값 구하기
// 유튜브 영상을 적용시키세요
// 캡처, 넘버링
var halfHeight = bh/2;
$('.youtube').css({marginTop:halfHeight});
console.log(bw,bh,halfHeight);