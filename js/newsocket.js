$(function(){
	$('.newsocket_header').load('public_header.html');
	$('.newsocket_footer').load('public_footer.html');

	var lpHei = $('.ns_c1_lp').offset().top;
	var lpdetial = $('.ns_c1_l_detial').offset().top;
	var c3TitleHei = $('.ns_c3_title').offset().top;
	var c4TitleHei = $('.ns_c4_title').offset().top;
	var c4DetailHei = $('.ns_c4_detail').offset().top;
	var c5DetailHei = $('.ns_c5_detail').offset().top;
	var c5P = $('.ns_c5_p').offset().top;
	var c5P1 = $('.ns_c5_p1').offset().top;
	var c7Title = $('.ns_c7_title').offset().top;

	var selfLpHei = $('.ns_c1_lp').height();
	var selfLpdetial = $('.ns_c1_l_detial').height();
	var selfC3TitleHei = $('.ns_c3_title').height();
	var selfC4TitleHei = $('.ns_c4_title').height();
	var selfC4DetailHei = $('.ns_c4_detail').height();
	var selfC5DetailHei = $('.ns_c5_detail').height();
	var selfC5p = $('.ns_c5_p').height();
	var selfC5p1 = $('.ns_c5_p1').height();
	var selfC7Title = $('.ns_c7_title').offset().top;

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

		if(scrollHei >= c4TitleHei - $(window).height() && scrollHei <= c4TitleHei + selfC4TitleHei ){
			$('.ns_c4_title').addClass('ns_c4_title_show');
		}else{
			$('.ns_c4_title').removeClass('ns_c4_title_show');
		}

		if(scrollHei >= c4DetailHei - $(window).height() && scrollHei <= c4DetailHei + selfC4DetailHei ){
			$('.ns_c4_detail').addClass('ns_c4_detail_show');
		}else{
			$('.ns_c4_detail').removeClass('ns_c4_detail_show ');
		}

		if(scrollHei >= c5DetailHei - $(window).height() && scrollHei <= c5DetailHei + selfC5DetailHei ){
			$('.ns_c5_detail').addClass('ns_c5_detail_show');
		}else{
			$('.ns_c5_detail').removeClass('ns_c5_detail_show');
		}

		if(scrollHei >= c5P - $(window).height() && scrollHei <= c5P + selfC5p ){
			$('.ns_c5_p').addClass('ns_c5_p_show');
		}else{
			$('.ns_c5_p').removeClass('ns_c5_p_show');
		}

		if(scrollHei >= c5P1 - $(window).height() && scrollHei <= c5P1 + selfC5p1 ){
			$('.ns_c5_p1').addClass('ns_c5_p1_show');
		}else{
			$('.ns_c5_p1').removeClass('ns_c5_p1_show');
		}

		if(scrollHei >= c7Title - $(window).height() && scrollHei <= c7Title + selfC7Title ){
			$('.ns_c7_title').addClass('ns_c7_title_show');
		}else{
			$('.ns_c7_title').removeClass('ns_c7_title_show');
		}
	})
})