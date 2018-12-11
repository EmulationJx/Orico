$(function(){
	/* get public header */
	$('.computer_headerpage').load('public_header.html');

	/* pagination  */
	var aContril = $('.pager_control a').innerHeight();
	$('.pager_control').css({
		height: aContril + 'px'
	});

	$(window).resize(function(){
		aContril = $('.pager_control a').innerHeight();
		$('.pager_control').css({
			height: aContril + 'px'
		});
	})

	var oPagerBtn = $('.pager_control').find('a');
	var current = 2;
	$('.pager_control > a').click(function(){
		for (var i = 0; i < oPagerBtn.length; i++) {
			$(oPagerBtn[i]).css({
				color : '#999'
			});
		}
		if(parseInt($(this).text()) >= 1 && parseInt($(this).text()) <= 22 ){
			$(this).css({
				color: '#0ECCF2'
			});
			current = parseInt($(this).text()) + 1;
		}
		if(parseInt($(this).text()) >1){
			$(oPagerBtn[0]).css({
					display : 'inline-block'
			});
			$(oPagerBtn[1]).css({
					display : 'inline-block'
			});
			for (var x = 2; x < oPagerBtn.length-2; x++) {
				$(oPagerBtn[x]).css({
					display : 'none'
				});
			}
			if(parseInt($(this).text()) == 1 || parseInt($(this).text()) == 2){
				for (var j = 1; j <= 11; j++) {
					$(oPagerBtn[j]).css({
						display : 'inline-block'
					});
				}
			}else {
				for (var j = parseInt($(this).text())-1; j < parseInt($(this).text())+9; j++) {
					$(oPagerBtn[j]).css({
						display : 'inline-block'
					});
				}
			}
		}
		var str = '';
		if($(this).attr('id')){
			str = $(this).attr('id');
			var arr = str.split('-');
			if(parseInt(arr[1]) == 0){
				$(oPagerBtn[0]).css({
					display : 'none'
				});
				$(oPagerBtn[1]).css({
					display : 'none'
				});
				for (var i = 0; i < oPagerBtn.length; i++) {
					$(oPagerBtn[i]).css({
						color : '#999'
					});
				}
				$(oPagerBtn[2]).css({
					color : '#0ECCF2'
				});
				for (var j = 2; j < oPagerBtn.length-2; j++) {
					$(oPagerBtn[j]).css({
						display : 'none'
					});
				}
				for (var x = 2; x < 12; x++) {
					$(oPagerBtn[x]).css({
						display : 'inline-block'
					});
				}
			}else if(parseInt(arr[1]) == 1){
				if(current > 2 ){
					current -= 1;
					$(oPagerBtn[current]).css({
						color : '#0ECCF2'
					});
					for (var i = 2; i < oPagerBtn.length-2; i++) {
						$(oPagerBtn[i]).css({
							display : 'none'
						});
					}
					if(current > 4){
						for (var j = current-2; j < current+8; j++) {
							$(oPagerBtn[j]).css({
								display : 'inline-block'
							});
						}
					}else{
						for (var y = current; y < current+10;y++) {
							$(oPagerBtn[y]).css({
								display : 'inline-block'
							});
						}
					}
					if(current == 2){
						$(oPagerBtn[0]).css({
							display : 'none'
							});
						$(oPagerBtn[1]).css({
							display : 'none'
						});
					}
				}else{
					$(oPagerBtn[2]).css({
						color : '#0ECCF2'
					});	
				}	
			}else if(parseInt(arr[1]) == 2){
				// ++
			}else if(parseInt(arr[1]) == 3){
				// to end 
			}
		}
	});

	/* get public footer */
	$('.computer_footerpage').load('public_footer.html');
});