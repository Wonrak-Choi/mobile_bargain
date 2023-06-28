$('#myBtn').on('click',myFunction);
// EventListener
function myFunction(){
    var dots = $('#dots');
    var moreButton =$('#more');
    var btnText = $('#myBtn');
    var result = $('#dots').css('display');
    console.log(result);
    // display가 none이라면
    if(result == 'none'){
        dots.css({display: 'inline'});
        btnText.text('+MORE');
        moreButton.css({display:'none'});
    }else{//display가 none이 아니라면
        dots.css({display:'none'});
        btnText.text('-CLOSE');
        moreButton.css({display:'inline'})
    }
}
// CSS 속성명에 변수를 안주면 분기가가능 디폴드값이옴