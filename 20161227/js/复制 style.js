var curIndex = 0,listLen = $(".tabList li");


function showPlay(index,showDiv){
		$(".tabList li").eq(index).addClass('curr').siblings().removeClass('curr');
		$(showDiv).eq(index).show().siblings().hide();
	}

function scrroll(){
	var oEle = $(".tabList ul");
	oEle.stop().animate({
		"position":"absolute",
		"top":"-115px",
	});
	console.log(oEle.offset().top);
	}

$(function(){
	
	$(".tabList li").click(function(){
		var index = $(this).index();
		 showPlay(index,".tabBox .show");
	});

	$(".prve").click(scrroll);
});