
//Fade in dashboard box
$(document).ready(function(){
	 $('.box').hide().fadeIn(2000);

    $('#btn2').click(function () {
       
    		$('#login').css('display','block');
    		$('#sgin').css('display','none');
    		$(this).css('background','#792121');
    		$('#btn1').css('background','#2a4452');

    	
    });
    $('#btn1').click(function () {
    		$('#login').css('display','none');
    		$('#sgin').css('display','block');

    		$(this).css('background','#792121');
    		$('#btn2').css('background','#2a4452');
    	
    });

 
 });


//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
	});


var but = document.getElementById('ss');
var myName;
var myVal = document.querySelector('input');
myName = myVal.value;
but.onclick = function () {
    
	window.open('../nav/mohamed/search.html');
}

var but2 = document.getElementById('ll');
var myName2;
var myVal2 = document.querySelector('input');
myName2 = myVal2.value;
but2.onclick = function () {
    
    window.open('../nav/mohamed/search.html');
}




