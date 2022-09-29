$(function (){ 
$('.position a').click(function (){
    $('html ,body').animate({
        
        scrollTop: $('#' + $(this).data('value')).offset().top
        
    },1000);
   
    
});
$('body').hide().fadeIn(1500);



$('.button').click(function(){
    var $val = $('.name').val();
    var $val2 = $('.other').val();
    var $val3 = $('#right').val();
        
    alert('name : ' + $val + '\n' +'email : ' + $val2 + '\n' +'number : ' + $val3);
    
});
	
});