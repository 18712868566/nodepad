var curIndex = 0,listLen = $(".tabList li").length;
var time = null;

function showPlay(curIndex,showDiv){
		$(".tabList li").eq(curIndex).addClass('curr').siblings().removeClass('curr');
		$(showDiv).eq(curIndex).stop().animate(true,true).fadeIn('fast').siblings().stop().animate(true,true).fadeOut('fast')
	}

//重置定时器
function autoPlay(){
	time = setInterval(function(){
		(curIndex<listLen-1)? curIndex++ : curIndex = 0;
		showPlay(curIndex,'.tabBox .show');
	},2500);
}

//设置定时器
time = setInterval(function(){
	(curIndex<listLen-1)? curIndex++ : curIndex = 0;
	showPlay(curIndex,'.tabBox .show');
	},2500);

//向前一个
function prve(){
		clearInterval(time);
		(curIndex == 0)? curIndex = listLen-1 : curIndex --;
		showPlay(curIndex,'.tabBox .show');
	}

//向后一个
function next(){
		clearInterval(time);
		(curIndex<listLen-1)? curIndex++ : curIndex = 0;
		showPlay(curIndex,'.tabBox .show');
	}
$(function(){

	$(".tabList li").hover(function(){
		clearInterval(time);
		var index = $(this).index();
		curIndex = index;
		showPlay(curIndex,".tabBox .show");
	});
	
	$(".tarWrap").hover(function(){
		clearInterval(time);
	},function(){
		autoPlay();
	});
	
	//向前一个
	$(".prve").bind('click',prve);
	
	//向后一个
	$(".next").bind('click',next)
});