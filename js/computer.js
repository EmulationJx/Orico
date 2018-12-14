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

	/* create pager content Element*/
	var oPagerContent = $('.pager_content_innerbox');

	/* get json data */
	var getData;
	var getPagerNumber = 0;
	$.get('computerdata.json',function(data,status){
		getData = JSON.parse(data);
		computer_stroage = getData.computer.computer_stroage_01;
		getPagerNumber = computer_stroage.length;
		for (var i = 0; i < computer_stroage.length; i++) {
			oPagerContent.append('<div class="pagercontent-innerbox"><a href="javascript:void(0)"><img src=' + computer_stroage[i].image_ul + '></img><p class="pager_bp">' + computer_stroage[i].title + '</p><p class="pager_bp">' + computer_stroage[i].detail + '</p></a></div>');
		}
	});

	/* create pager control Element */
	var oPagerControl = $('.pager_control');
	oPagerControl.append("<a class='pagerupall' href='javascript:void(0)' id='a-0'><<</a>");
	oPagerControl.append("<a class='pagerup' href='javascript:void(0)' id='a-1'><< 上一页</a>");
	/* get ajax data show pager number */
	for (var i = 1; i <= 22; i++) {
		oPagerControl.append("<a href='javascript:void(0)'>" + i + "</a>");
	}
	oPagerControl.append("<a class='pagerdown' href='javascript:void(0)' id='a-2'>下一页 >></a>");
	oPagerControl.append("<a class='pagerdownall' href='javascript:void(0)' id='a-3'>>></a>");

	/* init show tag */
	var oPagerBtn = $('.pager_control').find('a');
	for (var x = 0; x < 2; x++) {
		$(oPagerBtn[x]).css({
			display : 'none'
		});
	}
	for (var i = 12; i < oPagerBtn.length-2; i++) {
		$(oPagerBtn[i]).css({
			display : 'none'
		});
	}
	$(oPagerBtn[2]).css({
		color: '#0ECCF2'
	});

	/* init current*/
	var current = 2;
	$('.pager_control > a').click(function(){
		/* if is not repeat click */
		if($(this).text() != current-1) {

			/* shwo down downall */
			$(oPagerBtn[oPagerBtn.length-2]).css({
				display : 'inline-block'
			});
			$(oPagerBtn[oPagerBtn.length-1]).css({
				display : 'inline-block'
			});

			/* click all button color no */
			for (var i = 0; i < oPagerBtn.length; i++) {
				$(oPagerBtn[i]).css({
					color : '#999'
				});
			}

			/* control click btn color and goto */
			if(parseInt($(this).text()) > 2 && parseInt($(this).text()) < oPagerBtn.length-4 ){
				if(parseInt($(this).text()) > 2 && parseInt($(this).text()) < oPagerBtn.length-11){
					$(this).css({
						color: '#0ECCF2'
					});
					/* record current site */
					current = parseInt($(this).text()) + 1;

					/* >1 show up upall */
					$(oPagerBtn[0]).css({
							display : 'inline-block'
					});
					$(oPagerBtn[1]).css({
							display : 'inline-block'
					});
					/* pager btn show and hide*/
					for (var i = 2; i < oPagerBtn.length-2; i++) {
						$(oPagerBtn[i]).css({
							display : 'none'
						});
					}
					for (var i = current-2; i < current+8; i++) {
						$(oPagerBtn[i]).css({
							display : 'inline-block'
						});
					}
				}else{
					$(this).css({
						color: '#0ECCF2'
					});
					/* record current site */
					current = parseInt($(this).text()) + 1;

					/* >1 show up upall */
					$(oPagerBtn[0]).css({
							display : 'inline-block'
					});
					$(oPagerBtn[1]).css({
							display : 'inline-block'
					});
					/* pager btn show and hide*/
					for (var i = 2; i < oPagerBtn.length-2; i++) {
						$(oPagerBtn[i]).css({
							display : 'none'
						});
					}
					for (var i = oPagerBtn.length-12; i < oPagerBtn.length-2; i++) {
						$(oPagerBtn[i]).css({
							display : 'inline-block'
						});
					}
				}
			}else {
				/* click one pager btn */
				if(parseInt($(this).text()) == 1){
					$(oPagerBtn[0]).css({
						display : 'none'
					});
					$(oPagerBtn[1]).css({
						display : 'none'
					});
					$(oPagerBtn[2]).css({
						color : '#0ECCF2'
					})
					current = 2;
				/* click two pager btn */
				}else if(parseInt($(this).text()) == 2){
					$(oPagerBtn[0]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[1]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[3]).css({
						color : '#0ECCF2'
					})
					current = 3;
				/* click end paer btn */
				}else if(parseInt($(this).text()) == parseInt($(oPagerBtn[oPagerBtn.length-3]).text())){
					$(oPagerBtn[oPagerBtn.length-2]).css({
						display : 'none'
					});
					$(oPagerBtn[oPagerBtn.length-1]).css({
						display : 'none'
					});
					$(oPagerBtn[0]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[1]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[oPagerBtn.length - 3]).css({
						color : '#0ECCF2'
					})
					current = oPagerBtn.length - 3;
				}
			}

			/* if click up upall down downall */
			var str = '';
			if($(this).attr('id')){
				str = $(this).attr('id');
				var arr = str.split('-');

				/* click upall */
				if(parseInt(arr[1]) == 0){
					current = 2;
					$(oPagerBtn[0]).css({
						display : 'none'
					});
					$(oPagerBtn[1]).css({
						display : 'none'
					});
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
					$(oPagerBtn[oPagerBtn.length-2]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[oPagerBtn.length-1]).css({
						display : 'inline-block'
					});
				}
				/* click up */
				else if(parseInt(arr[1]) == 1){
					if(current >= 2){
						current -= 1;
						$(oPagerBtn[current]).css({
							color : '#0ECCF2'
						});
						if(current == 2){
							$(oPagerBtn[0]).css({
								display : 'none'
					 			});
					 		$(oPagerBtn[1]).css({
					 			display : 'none'
					 		});
						}
						if(current >= 1 && current <= 3){
							for (var i = 2; i < oPagerBtn.length-2; i++) {
						 		$(oPagerBtn[i]).css({
						 			display : 'none'
						 		});
						 	}
						 	for (var j = 2; j <= 11; j++) {
						 		$(oPagerBtn[j]).css({
						 			display : 'inline-block'
						 		});
						 	}
						}else if(current >=  oPagerBtn.length -10 && current <= oPagerBtn.length - 3){
							for (var i = 2; i < oPagerBtn.length-2; i++) {
						 		$(oPagerBtn[i]).css({
						 			display : 'none'
						 		});
						 	}
						 	for (var j = oPagerBtn.length-12; j < oPagerBtn.length-2; j++) {
								$(oPagerBtn[j]).css({
									display : 'inline-block'
								});
							}

						}else{
							for (var i = 2; i < oPagerBtn.length-2; i++) {
						 		$(oPagerBtn[i]).css({
						 			display : 'none'
						 		});
						 	}
						 	for (var j = current - 2; j < current + 8 ; j++) {
						 		$(oPagerBtn[j]).css({
						 			display : 'inline-block'
						 		});
						 	}
						}
					}	
				}
				/* click down */
				else if(parseInt(arr[1]) == 2){
					if(current <= oPagerBtn.length-4){
						current += 1;
						$(oPagerBtn[current]).css({
							color : '#0ECCF2'
						});
						if(current > 2){
							$(oPagerBtn[0]).css({
								display : 'inline-block'
					 			});
					 		$(oPagerBtn[1]).css({
					 			display : 'inline-block'
					 		});
						}
						if(current == oPagerBtn.length-3){
							$(oPagerBtn[oPagerBtn.length - 2]).css({
								display : 'none'
					 			});
					 		$(oPagerBtn[oPagerBtn.length - 1]).css({
					 			display : 'none'
					 		});
						}
						if(current >= 1 && current <= 3){
							for (var i = 2; i < oPagerBtn.length-2; i++) {
						 		$(oPagerBtn[i]).css({
						 			display : 'none'
						 		});
						 	}
						 	for (var j = 2; j <= 11; j++) {
						 		$(oPagerBtn[j]).css({
						 			display : 'inline-block'
						 		});
						 	}
						}else if(current >=  oPagerBtn.length -10 && current <= oPagerBtn.length - 3){
							for (var i = 2; i < oPagerBtn.length-2; i++) {
						 		$(oPagerBtn[i]).css({
						 			display : 'none'
						 		});
						 	}
						 	for (var j = oPagerBtn.length-12; j < oPagerBtn.length-2; j++) {
								$(oPagerBtn[j]).css({
									display : 'inline-block'
								});
							}

						}else{
							for (var i = 2; i < oPagerBtn.length-2; i++) {
						 		$(oPagerBtn[i]).css({
						 			display : 'none'
						 		});
						 	}
						 	for (var j = current - 2; j < current + 8 ; j++) {
						 		$(oPagerBtn[j]).css({
						 			display : 'inline-block'
						 		});
						 	}
						}
					}
				}
				/* click downall */
				else if(parseInt(arr[1]) == 3){
					current = oPagerBtn.length-3;
					$(oPagerBtn[0]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[1]).css({
						display : 'inline-block'
					});
					$(oPagerBtn[oPagerBtn.length-1]).css({
						display : 'none'
					});
					$(oPagerBtn[oPagerBtn.length-2]).css({
						display : 'none'
					});
					for (var j = 2; j < oPagerBtn.length-2; j++) {
						$(oPagerBtn[j]).css({
							display : 'none'
						});
					}
					for (var j = oPagerBtn.length-12; j < oPagerBtn.length-2; j++) {
						$(oPagerBtn[j]).css({
							display : 'inline-block'
						});
					}
					$(oPagerBtn[oPagerBtn.length-3]).css({
						color : '#0ECCF2'
					});
				}
			}
		// alert($(oPagerBtn[current]).text());
		}	
	});

	/* get public footer */
	$('.computer_footerpage').load('public_footer.html');
});