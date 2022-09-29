$(function (){

	'use strict';
	// window sizing
	$('header').height($(window).height());

	$(window).resize(function(){

		$('header').height($(window).height());
	
	});

	// active class
	$('.links li').click(function(){

		$(this).addClass('active').siblings().removeClass('active');
	});



	// navigating

	$('.links li a').click(function () {
		
		$('html ,body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top

		},1000);

	});
	var logOut = document.getElementById('out');
	logOut.onclick =function (){
		// window.location = '../../sign/finder.html' 	;
		
		window.location ='../../sign/finder.html';
	} 
		// other sites
	var albert = '../aisha/albert/albert.html',
		issac  = '../aisha/issac/issac.html',
		steve  = '../fatma/steve.html',
		bill   = '../fatma/bill.html',
		cris   = '../khaled/cris/criss.html',
		messi  = '../khaled/messi/messi.html',
		anglo  = '../hoda/michelangelo/michelangelo.html',
		davinci= '../hoda/Davinci/davinci.html';

	//serch input
	var srCh = document.getElementById('sb');
	var srBar = document.getElementById('bar1');
	srBar.onmouseenter = function () {
		$('.sld').slideDown();
	
	}

	srBar.onmouseleave = function () {
		$('.sld').slideUp();
	
	}

	srCh.onclick = function () {
    
    if (srBar.value ==='albert'){
    	window.open(albert);
    }

    else if (srBar.value==='issac') {

        	window.open(issac);
    }
    else if (srBar.value==='steve') {

        	window.open(steve);
    }
    else if (srBar.value==='bill') {

        	window.open(bill);
    }
        else if (srBar.value==='cris') {

        	window.open(cris);
    }
        else if (srBar.value==='messi') {

        	window.open(messi);
    }
        else if (srBar.value==='anglo') {

        	window.open(anglo);
    }


        else if (srBar.value==='davinci') {

        	window.open(davinci);
    }
    }





    $('#Container').mixItUp();
    
    
    
    $('.shuffle li').click(function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
    });

    $('.over').click(function () {
    	    if ($(this).parent().data('value') ==='albert'){
    	window.open(albert);
    }

    else if ($(this).parent().data('value')==='issac') {

        	window.open(issac);
    }
    else if ($(this).parent().data('value')==='steve') {

        	window.open(steve);
    }
    else if ($(this).parent().data('value')==='bill') {

        	window.open(bill);
    }
        else if ($(this).parent().data('value')==='cris') {

        	window.open(cris);
    }
        else if ($(this).parent().data('value')==='messi') {

        	window.open(messi);
    }
        else if ($(this).parent().data('value')==='anglo') {

        	window.open(anglo);
    }
        else if ($(this).parent().data('value')==='davinci') {

        	window.open(davinci);
    }

    });
    
});