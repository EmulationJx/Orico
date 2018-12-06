$(document).ready(function(){
	/**
	 * country dragdown
	 */
	$("#country_arrow").mouseover(function(){
		$('.country_select').show();
		$('#country_name').removeClass('country_name_leave');
		$('#country_name').addClass('country_name_enter');
		$(".arrow_down").removeClass('arrow_rotate_leave');
		$(".arrow_down").addClass('arrow_rotate_enter');
	});
	$("#country_arrow").mouseout(function(){
		$('.country_select').hide();
		$('#country_name').removeClass('country_name_enter');
		$('#country_name').addClass('country_name_leave');
		$(".arrow_down").removeClass('arrow_rotate_enter');
		$(".arrow_down").addClass('arrow_rotate_leave');
	});

	/**
	 * addholder and close button
	 */
	var addStatus = false;
	$('.addholder_outbox').click(function() {
		if(addStatus){
			$('.addholder_close').css({
					opacity : '0',
					transition : 'all 0.3s'
				})
			$('.addholder_content').slideUp('slow');
			addStatus = false;
		}else{
			$('.addholder_content').slideDown('slow',function(){
				$('.addholder_close').css({
					opacity : '1',
					transition : 'all 1s'
				})
			});
			addStatus = true;
		}
	});
	$('.addholder_close').click(function(){
		$(this).css({
					opacity : '0',
					transition : 'all 0.3s'
		});
		$('.addholder_content').slideUp('slow');
		addStatus = false;
	})

	/**
	 * nav menu
	 */
	$('.li_container').find('li').mouseover(function(el){
		var str = $(this).find('i').attr('class');
		var strId = $(this).attr('id');
		if(!str.match('active_circle')){
			$(this).find('i').show('fast');
			event.stopPropagation();
		}
		if(strId.match('menu_computer')){
			$('.computer_box').show();
		}
	});
	$('.li_container').find('li').mouseout(function(el){
		var str = $(this).find('i').attr('class');
		var strId = $(this).attr('id');
		if(!str.match('active_circle')){
			$(this).find('i').hide('fast');
		}
		if(strId.match('menu_computer')){
			$('.computer_box').hide();
		}
	});
	var oNavLi = $('.li_container').find('li');
	$('.li_container').find('li').click(function(){
		for (var i = 0; i < oNavLi.length; i++) {
			$(oNavLi[i]).find('i').removeClass('active_circle');
			$(oNavLi[i]).find('i').hide('fast');
		};
		$(this).find('i').addClass('active_circle');
	})

})