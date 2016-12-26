///图片用0.jpg,1/jpg,2.jpg....格式命名
var len = $(".list i").length;
var i = 0;

$(".list i").click(function(){
	var index = $(this).index();
	$(this).addClass('curr').siblings().removeClass('curr');		
	$(".cont").css({"background":"url(images/"+index+".jpg) no-repeat center 0"});
});
	
 var time = setInterval(function(){
	if ( i < len-1) {
		i++;
	}else{
		i = 0;
	}
	show(i);
	//console.log(i)
},1000)
 
 function show(i){
 	$(".cont").css({"background":"url(images/"+i+".jpg) no-repeat center 0"});
	$(".list i").eq(i).addClass('curr').siblings().removeClass('curr');
 }