$(function(){
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
	window.onresize = function(){
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
	};

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
});