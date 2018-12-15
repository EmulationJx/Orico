$(function(){
	$('.newsocket_header').load('public_header.html');
	$('.newsocket_footer').load('public_footer.html');

	var lpHei = $('.ns_c1_lp').offset().top;
	var lpdetial = $('.ns_c1_l_detial').offset().top;
	var c3TitleHei = $('.ns_c3_title').offset().top;

	var selfLpHei = $('.ns_c1_lp').height();
	var selfLpdetial = $('.ns_c1_l_detial').height();
	var selfC3TitleHei = $('.ns_c3_title').height();

	$(window).scroll(function(){
		var scrollHei = $(window).scrollTop();
		if(scrollHei >= lpHei - $(window).height() && scrollHei <= lpHei + selfLpHei){
			$('.ns_c1_lp').addClass('ns_c1_lp_show');
		}else {
			$('.ns_c1_lp').removeClass('ns_c1_lp_show');
		}

		if(scrollHei >= lpdetial - $(window).height() && scrollHei <= lpdetial + selfLpdetial ){
			$('.ns_c1_l_detial').addClass('ns_c1_l_detial_show');
		}else{
			$('.ns_c1_l_detial').removeClass('ns_c1_l_detial_show');
		}

		if(scrollHei >= c3TitleHei - $(window).height() && scrollHei <= c3TitleHei + selfC3TitleHei ){
			$('.ns_c3_title').addClass('ns_c3_title_show');
		}else{
			$('.ns_c3_title').removeClass('ns_c3_title_show');
		}
	})
})