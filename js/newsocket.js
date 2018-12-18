$(function(){
	$('.newsocket_header').load('public_header.html');
	$('.newsocket_footer').load('public_footer.html');

	$(window).scroll(function(){
		var aElement = ['ns_c1_lp','ns_c1_l_detial','ns_c3_title','ns_c4_title','ns_c4_detail','ns_c5_detail','ns_c5_p','ns_c5_p1','ns_c7_title',
		'ns_c8_title','ns_c8_pic','ns_c8_detail','ns_c9_desgin','ns_c9_title','ns_c9_detail','ns_c10_title1','ns_c10_title2','ns_c10_desgin',
		'ns_c10_detail','ns_c11_title','ns_c11_desgin','ns_c11_detail','ns_c12_title','ns_c12_detail','ns_c13_pic','ns_c13_title','ns_c13_detail',
		'ns_c14_desgin','ns_c14_title','ns_c14_detail','ns_c15_title','ns_c16_title','ns_c16_detail','ns_c16_footer','ns_c17_title','ns_c17_pic',
		'ns_c18_title','ns_c18_pic','ns_v3_title','ns_v3_detail','ns_c20_title1','ns_c20_title2','ns_c20_desgin'];
		var scrollHei = $(window).scrollTop();
		var elementAbsolute;
		var elementSelfHeight;

		for (var i = 0; i < aElement.length; i++) {
			elementAbsolute = $('.' + aElement[i]).offset().top;
			elementSelfHeight = $('.' + aElement[i]).height();
			if(scrollHei >= elementAbsolute - $(window).height() && scrollHei <= elementAbsolute + elementSelfHeight){
				$('.'+aElement[i]).addClass(aElement[i]+'_show');
			}else {
				$('.'+aElement[i]).removeClass(aElement[i]+'_show');
			}
		}
	})
})