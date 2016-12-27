var curIndex = 0,listLen = $(".tabList li").length;
var time = null;

function showPlay(curIndex,showDiv){
		$(".tabList li").eq(curIndex).addClass('curr').siblings().removeClass('curr');
		$(showDiv).eq(curIndex).show().siblings().hide();
	}

time = setInterval(function(){
	if (curIndex<listLen-1) {
		curIndex++;
	}else{
		curIndex = 0;
	}
	
	
	showPlay(curIndex,'.tabBox .show');
	if (curIndex>5) {
		
	}
},2500);



function autoPlay(){
	time = setInterval(function(){
		if (curIndex<listLen-1) {
			curIndex++;
		}else{
			curIndex = 0;
		}
		showPlay(curIndex,'.tabBox .show');
	},2500);
}


function prve(){
	
}

$(function(){

	$(".tabList li").click(function(){
		clearInterval(time);
		var index = $(this).index();
		curIndex = index;
		showPlay(curIndex,".tabBox .show");
	});
	
	$(".tarWrap").hover(function(){
		clearInterval(time);
		console.log('停止');
	},function(){
		autoPlay();
		console.log("开始");
	});
	
	//向上
	$(".prve").bind('click',function(){
		
	});
});