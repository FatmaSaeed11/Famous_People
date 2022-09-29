$(function (){ 
$('a').click(function (){
    $('html ,body').animate({
        
        scrollTop: $('#' + $(this).data('value')).offset().top
        
    },1000);
   
    
});
    'use strict';
    $('.post').animate({margin:"15px"},1000);
    
    $('body').hide().fadeIn(1700);
    $('.navbar li').click(function (){
       $(this).addClass('active').siblings().removeClass('active'); 
    });
    
$('.button').click(function(){
    var $val = $('.name').val();
    var $val2 = $('.other').val();
    var $val3 = $('#right').val();
        
    alert('name : ' + $val + '\n' +'email : ' + $val2 + '\n' +'number : ' + $val3);
    
});
	



})(jQuery);



            
