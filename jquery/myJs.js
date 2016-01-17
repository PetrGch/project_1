$(document).ready(function() {

	/*Slider*/
	function slider () {
		var boards = ['SNOWBOARD PROFESSIONAL SERIES', 'SNOWBOARD CLASSIC', 'SNOWBOARD EXTREME SERIES', 'SNOWBOARD MODERN'];
		var centralPic = $('.boards li img:eq(2)').attr('alt');
		for (var i = 0; i < boards.length; i++) {
			if (boards[i] === centralPic) {
					document.getElementById('sliderDisc').innerHTML = boards[i];
			}
		}
	}
	slider();
	$('.boards li:eq(2)').css({'opacity': '1'})
 	$('[src="images/left.png"]').click(function() {
 		$('.boards li:last').after($('.boards li:first').detach());
 		slider();
		$('.boards li:eq(2)').css({'opacity': '1'});
		$('.boards li:eq(2)').prevAll().css({'opacity': '0.5'});
		$('.boards li:eq(2)').nextAll().css({'opacity': '0.5'});
	}); 
 	$('[src="images/right.png"]').click(function() {
 		$('.boards li:first').before($('.boards li:last').detach());
 		slider();
 		$('.boards li:eq(2)').css({'opacity': '1'});
		$('.boards li:eq(2)').prevAll().css({'opacity': '0.5'});
		$('.boards li:eq(2)').nextAll().css({'opacity': '0.5'});
	}); 

/*Search*/
	
 		$('#search').focus(function(){ $('#search').val('') });
   $('#search').blur(function(){ $('#search').val('More information') });


/*walet*/
		
			$('.walet li').hover(function() {
				$(this).children('ul').stop(false, true).fadeIn(500);	
				$(this).children('a').css({'background': '#7bb4d2'});
				$(this).children('a').stop(false, true).animate({width:"180px"},300)
			},function() {
				$(this).children('ul').stop(false, true).fadeOut(500);	
				$(this).children('a').css({'background': 'none'});
				$(this).children('a').stop(false, true).animate({width:"170px"},300)
			});


   
/*
			$('[src*="bag.png"]').data('counter', 0).click(function () {
					
				
				


				
			});
					
*/

});