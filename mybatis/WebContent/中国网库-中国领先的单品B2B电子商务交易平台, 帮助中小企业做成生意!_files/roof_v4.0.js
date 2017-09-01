
$(function(){
	//head滑过出现下拉框
		$(".topMuneList").hover(function(){
			$(this).addClass("snMenuHover");
			$(this).find("div.show1").show();
			$(this).find("div.show2").show();
		},function(){
			$(this).removeClass("snMenuHover");
			$(this).find("div.show1").hide();
			$(this).find("div.show2").hide();
		})	
		
		$("#cartTitle").hover(function(){
			$("#products").show();
		},function(){
			$("#products").hide();
		})	
		$("#products").hover(function(){
			$("#products").show();
		},function(){
			$("#products").hide();
		});
		
		//top用户名滑过显示下拉框
		$("#user").hover(function(){
			$(this).addClass("z-hov");
		},function(){
			$(this).removeClass("z-hov");
		})
		


		//我的网库-二维码
        var $aBtn = $(".J-phoneLibrary"),
            $code = $(".J-show-code");

        $aBtn.hover(function () {
            $code.removeClass("wk_hide").addClass("wk_show");
            $aBtn.find(".i-san").addClass("i-san1");
        }, function () {
            $code.removeClass("wk_show").addClass("wk_hide");
            $aBtn.find(".i-san").removeClass("i-san1");
        });
        $code.hover(function () {
            $aBtn.addClass("now");
            $(this).removeClass("wk_hide").addClass("wk_show");
            $aBtn.find(".i-san").addClass("i-san1");
        }, function () {
            $aBtn.removeClass("now");
            $(this).removeClass("wk_show").addClass("wk_hide");
            $aBtn.find(".i-san").removeClass("i-san1");
        });

});
