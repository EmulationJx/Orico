$(function(){
	$('.headerpage').load('public_header.html?rnd='+Math.random());
	/**
	 * get height
	 */
	var imgDiv = $('.public_img').height();
	$('.home_banner').css({
		height: imgDiv+'px'
	});
	$('.banner_imgcontent').css({
		height: imgDiv+'px'
	});
	var tabContent = $('.public_tabbox').innerHeight();
	var tabConDiv = $('.tab_control').innerHeight();
	var tabBox = parseInt(tabContent) + parseInt(tabConDiv);
	$('.tab_outbox').css({
		height: tabBox+'px'
	});
	var newsA = $('.news_githeia').height();
	$('.news_twobox').css({
		height: newsA+'px'
	});
	var logoBannerHeight = $('.logober_pbbox').height();
	$('.logo_bercontent').css({
		height: logoBannerHeight+'px'
	})
	$(window).resize(function(){
		imgDiv = $('.public_img').height();
		$('.home_banner').css({
			height: imgDiv+'px'
		});
		$('.banner_imgcontent').css({
			height: imgDiv+'px'
		});
		tabContent = $('.public_tabbox').innerHeight();
		tabConDiv = $('.tab_control').innerHeight();
		tabBox = parseInt(tabContent) + parseInt(tabConDiv);
		$('.tab_outbox').css({
			height: tabBox+'px'
		});
		newsA = $('.news_githeia').height();
		$('.news_twobox').css({
			height: newsA+'px'
		});
		logoBannerHeight = $('.logober_pbbox').height();
		$('.logo_bercontent').css({
			height: logoBannerHeight+'px'
		})
	});

	/**
	 *git offsetheight 
	 */
	var scrollNewTop = true;
	$(window).scroll(function(event) {
		var newsTwoOffsetHeight = $('.news_twobox').offset().top;
		var onewsList = $('.news_twobox').children('a');
		if($(window).scrollTop() + $('.news_outbox').outerHeight(true) >= newsTwoOffsetHeight && scrollNewTop){
			scrollNewTop = false;
			$(onewsList[0]).addClass('news_abnoe');
			$(onewsList[1]).addClass('news_abtwo');
			$(onewsList[2]).addClass('news_abthree');
		}
	});
	
	/*
	 * banner
	 */
	var oBanImg = $('.banner_imgcontent').find('img');
	var oBanRec = $('.banner_rect').children('span');
	var imgTime;
	var count = 0;
	var aRecid = '';
	var recid  = '';

	var bannerImgRun = function(){
		count++;
		for (var i = 0; i < oBanImg.length; i++) {
			$(oBanImg[i]).css({
				display: 'none'
			});
			$(oBanRec[i]).removeClass('public_rectrun');

		}
		$(oBanImg[count]).css({
			display : 'block'
		});
		$(oBanRec[count]).addClass('public_rectrun');
		if(count == oBanImg.length-1){
			count = -1;
		}
	}

	clearInterval(imgTime);
	imgTime = setInterval(bannerImgRun,5000);

	$(oBanRec).click(function(){
		clearInterval(imgTime);
		imgTime = setInterval(bannerImgRun,5000);
		recid = $(this).attr('id');
		aRecid = recid.split('-');
		count = parseInt(aRecid[1]);
		for (var i = 0; i < oBanImg.length; i++) {
			$(oBanImg[i]).css({
				display: 'none'
			});
			$(oBanRec[i]).removeClass('public_rectrun');
		}
		$(oBanImg[count]).css({
			display : 'block'
		});
		$(oBanRec[count]).addClass('public_rectrun');
		if(count == oBanImg.length-1){
			count = -1;
		}
	})

	/*
	 * tab changed
	 */
	var oTabP = $('.tab_control').find('p');
	var tStrId = '';
	$('.tab_control>p').click(function(){
		for (var i = 0; i < oTabP.length; i++) {
			$(oTabP[i]).removeClass('active_tab');
		}
		$('.tab_content0').css({
				display : 'none'
		});
		$('.tab_content1').css({
			display : 'none'
		});
		$('.tab_content2').css({
			display : 'none'
		});
		$(this).addClass('active_tab');
		tStrId = $(this).attr('id').toString().split('-')[1];
		if($('.tab_content0').attr('class').match(tStrId)){
			$('.tab_content0').css({
				display : 'block'
			});
		}else if($('.tab_content1').attr('class').match(tStrId)){
			$('.tab_content1').css({
				display : 'block'
			});
		}else if($('.tab_content2').attr('class').match(tStrId)){
			$('.tab_content2').css({
				display : 'block'
			});
		}
	});

	/*
	 *logo circlepointer
	 */
	var oLogoSpan = $('.logo_scircle').children('span');
	var oLsCount = 0;
	var oLogoTime;
	$(oLogoSpan[0]).addClass('logo_circleactive');
	var oLgoRun = function(){
		oLsCount++;
		for (var i = 0; i < oLogoSpan.length; i++) {
			$(oLogoSpan[i]).removeClass('logo_circleactive');
		}
		$(oLogoSpan[oLsCount]).addClass('logo_circleactive');
		if(oLsCount == oLogoSpan.length-1){
			oLsCount = -1;
		}
	}
	clearInterval(oLogoTime);
	oLogoTime = setInterval(oLgoRun,5000);

	$('.logo_scircle>span').click(function(event) {
		clearInterval(oLogoTime);
		$('.logo_banboxone').removeClass('logo_banboxone1');
		$('.logo_banboxtwo').removeClass('logo_banboxtwo2');
		$('.logo_banboxthree').removeClass('logo_banboxthree3');
		if($(this).attr('id').match('1')){
			for (var i = 0; i < oLogoSpan.length; i++) {
				$(oLogoSpan[i]).removeClass('logo_circleactive');
			}
			$(oLogoSpan[0]).addClass('logo_circleactive');
			$('.logo_banboxone').animate({
				left : '0'
			});
			$('.logo_banboxtwo').animate({
				left : '100%'
			});
			$('.logo_banboxthree').animate({
				left : '200%'
			})
		}else if($(this).attr('id').match('2')){
			for (var i = 0; i < oLogoSpan.length; i++) {
				$(oLogoSpan[i]).removeClass('logo_circleactive');
			}
			$(oLogoSpan[1]).addClass('logo_circleactive');
			$('.logo_banboxone').animate({
				left : '-100%'
			});
			$('.logo_banboxtwo').animate({
				left : '0'
			});
			$('.logo_banboxthree').animate({
				left : '100%'
			})
		}else if($(this).attr('id').match('3')){
			for (var i = 0; i < oLogoSpan.length; i++) {
				$(oLogoSpan[i]).removeClass('logo_circleactive');
			}
			$(oLogoSpan[2]).addClass('logo_circleactive');
			$('.logo_banboxone').animate({
				left : '-200%'
			});
			$('.logo_banboxtwo').animate({
				left : '-100%'
			});
			$('.logo_banboxthree').animate({
				left : '0'
			})
		}
	});

	$('.footerpage').load('public_footer.html?rnd='+Math.random());
});