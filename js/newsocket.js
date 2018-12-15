$(function(){
	$('.newsocket_header').load('public_header.html');
	$('.newsocket_footer').load('public_footer.html');

	var lpHei = $('.ns_c1_lp').offset().top;
	var lpdetial = $('.ns_c1_l_detial').offset().top;

	$(window).scroll(function(){
		var scrollHei = $(window).scrollTop();
		if(scrollHei >= lpHei - $(window).height()){
			$('.ns_c1_lp').addClass('ns_c1_lp_show');
		}else {
			$('.ns_c1_lp').removeClass('ns_c1_lp_show');
			
		}
		if(scrollHei >= lpdetial - $(window).height()){
			$('.ns_c1_l_detial').addClass('ns_c1_l_detial_show');
		}else{
			$('.ns_c1_l_detial').removeClass('ns_c1_l_detial_show');
		}
	})
})