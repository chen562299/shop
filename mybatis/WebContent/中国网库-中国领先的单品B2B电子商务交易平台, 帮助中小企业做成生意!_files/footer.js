//滚动到相应模块，更变导航样式
$(document).ready(function(e) {
	var topA=$("#endhdd").offset().top;
	//定义数组，储存楼层距离顶部的高度（floorsTop）
	var floorsTop=[];
	function floorsTopF(){
		for(var i=0; i<$(".floors").length;i++){
			floorsTop[i]=($(".floors").eq(i).offset().top)-60;
		}		
	}
	function floorsNavF(){
		var sTop = $(document).scrollTop() + 120; 
		for(var i=0; i<=$("#floorsNav li").length;i++){	
			if(sTop>=floorsTop[i]){
					$("#floorsNav li").removeClass("on");				
					$("#floorsNav li").eq(i).addClass("on");
					
			 } else if(sTop>=floorsTop[i] && sTop<floorsTop[i+1]){	
					$("#floorsNav li").removeClass("on");				
					$("#floorsNav li").eq(i).addClass("on");
					
			 }else if(sTop>=topA){
					$("#floorsNav").hide();
			 }
		}
	}
	$(window).scroll(function(e){
		floorsTopF();
		floorsNavF();
	});
	$("#floorsNav li").each(function(i) {
		$(this).click(function(){
			var num=floorsTop[i];
			$('html, body').animate({scrollTop: num}, 300);
		})
	});
	
	
});