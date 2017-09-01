$(function(){
    var slideIndex = 0, interval;
    var slideBox = $('#slideHeadTab');
    var cellNums = slideBox.children('li').length - 1;
    var cellWidth = slideBox.children('li').width();
    slideBox.width(cellNums * cellWidth);
    function interFunc () {
        interval = setTimeout(function () {
            slideIndex++;
            slideIndex = slideIndex === cellNums ? 0 : slideIndex;
            tabAuto(slideIndex);
            interFunc();
        }, 3000);
    }
    interFunc();
    slideBox.closest('.bd').siblings('.prev').on('click', function () {
        slideIndex = slideIndex === 0 ? cellNums - 1 : slideIndex - 1;
        tabAuto(slideIndex);
    });
    slideBox.closest('.bd').siblings('.next').on('click', function () {
        slideIndex = slideIndex === cellNums - 1 ? 0 : slideIndex + 1;
        tabAuto(slideIndex);
    });
    function tabAuto (index) {
        slideBox.stop().animate({'left': -slideIndex * cellWidth});
        slideBox.closest('.bd').siblings('.hd').find('li').eq(slideIndex).addClass('on').siblings().removeClass('on');
    }
    slideBox.closest('.bd').siblings('.hd').find('li').on('hover', function () {
        slideIndex = $(this).index();
        tabAuto(slideIndex);
    });
    $('#slideBox').hover(function () {
        clearTimeout(interval);
    }, function () {
        interFunc();
    })


// banner
    var slideBoxDown = $('#slideBox_down');
    var slideBoxDownNum = 0;
    slideBoxDownLi = slideBoxDown.find('ul').children('li');
    slideBoxDown.find('ul').width(slideBoxDownLi.eq(0).width() * slideBoxDownLi.length);
    slideBoxDown.find('.prev').on('click', function () {
        slideBoxDownNum = slideBoxDownNum === 0 ? slideBoxDownLi.length - 1 : slideBoxDownNum - 1;
        slideBoxDown.find('ul').animate({'left': -slideBoxDownNum * slideBoxDownLi.eq(0).width()});
    });
    slideBoxDown.find('.next').on('click', function () {
        slideBoxDownNum = slideBoxDownNum ===  slideBoxDownLi.length - 1 ? 0 : slideBoxDownNum + 1;
        slideBoxDown.find('ul').animate({'left': -slideBoxDownNum * slideBoxDownLi.eq(0).width()});
    });
    // banner下产品 end
})

$(function() {
  var $mainNav  = $(".J-mainNav"),
    $li_index = $mainNav.find(".m_zl li"),
    $float_layer = $(".float-layer"),
    $content = $float_layer.find(".text-content"),
    i  = 0;

  function navToggle(par1, par2) {
    $float_layer.removeClass(par1).addClass(par2);
  }

  $mainNav.mouseenter(function() {
    navToggle("hide", "show");
    $float_layer.animate({
      left:180
    }, 200);
  });
  $mainNav.mouseleave(function() {
    navToggle("show", "hide");
    $float_layer.css("left",170);
  });

  $li_index.mouseover(function() {
    i = $(this).index();
    $content.eq(i).removeClass("hide").addClass("show").siblings().addClass("hide").removeClass("show");
  });

    $content.mouseenter(function() {
        i = $(this).index();
        $li_index.eq(i).addClass("fd-clrhover");
    });
    $($float_layer.find(".text-content"),$mainNav.find(".m_zl li")).mouseleave(function() {
        i = $(this).index();
        $li_index.eq(i).removeClass("fd-clrhover");

    });

//左侧分类nav end
	$(".slideTxtBox .hd ul li").hover(function(){
		var liInd = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".slideTxtBox .bd ul").eq(liInd).show().siblings().hide();
	});

//买卖家切换
	var setName
	$(".ind-o2o-lf-con").hover(function () {
		clearInterval(setName)
	},function () {
		setName=setInterval(function () {
			$(".ind-o2o-lf-con ul").animate({marginTop:"-38px"},2000,function () {
				$(".ind-o2o-lf-con ul").css("margin-top","0").find("li:first").appendTo(".ind-o2o-lf-con ul")
			})
		},2000)
	}).trigger("mouseleave")

	// 预约列表 end
	$(".imgbox a,.zxzt_list a").hover(function() {
		$(this).find(".btnplay").show();
	}, function() {
		$(this).find(".btnplay").hide();
	});
	$(".paominggb").click(function() {
		$(".paoming_pop").hide();
	});
	$(".zuantipm").click(function() {
		$(".paoming_pop").css("top", 330).show();
	});
	$(".vishipm").click(function() {
		$(".paoming_pop").css("top", 600).show();
	});
	// 电商微视
});


// 手机号验证
function isPhone(phone){
    var re = /^1[3|4|5|8|7][0-9]\d{8}$/;
    if (re.test(phone)) {
        return true;
    } else {
        re2 = /^0\d{2,3}-?\d{7,8}$/;
        if(re2.test(phone)){
            return true;
        }else{
            return false;
        }
    }
}


//找现货 找金融
$(function() {
    // 找现货提交
    $(".tel-bottom-submit").click(function(){
        $phone = $("#find-goods-form-telephone").val();
        if ($(".contact-person").val()=='联系人') {
            $(".contact-person").css("outline","1px solid #f60");
        }else if(!isNaN($(".contact-person").val())){
            $(".contact-person").css("outline","1px solid #f60");
        }else if($phone == '联系电话'){
            $("#find-goods-form-telephone").css("outline","1px solid #f60");
        }else if(!isPhone($phone)){
            $("#find-goods-form-telephone").css("outline","1px solid #f60");
        }else if($(".company-name").val()=='公司名称'){
            $(".company-name").css("outline","1px solid #f60");
        }else if($(".buy_content").val()=='采购内容'){
            $(".buy_content").css("outline","1px solid #f60");
        }else{

            $.ajax({
                cache: true,
                type: "POST",
                url:"/bangWZ/saveBangWZ",
                data:"procureRequirements="+$(".buy_content").val()+"&linkMan="+$(".contact-person").val()+"&linkMobile="+$("#find-goods-form-telephone").val()+"&companyName="+$(".company-name").val(),
                async: false,
                error: function(request) {
                    alert("小秘书没有收到你的采购需求，请重新发送!");
                },
                success: function(data) {
                    if(data.statusCode == 106){
                        $(".find-goods-success").show(200);
                    }else{
                        alert("小秘书没有收到你的采购需求，请重新发送!");
                    }
                }
            });

        }
    });

    $(".find-goods-success-close").click(function(){
        $(".find-goods-success").hide(100);
    });

    $(".form_input_div input").focus(function(){
        $(this).css("outline","1px solid #999");

    });
    $(".form_input_div input").blur(function(){
        $(this).css("outline","none");
    });





    //鼠标移入找现货
    $(".goods").mouseenter(function(){

        $(".common-find-goods-form,.common-find-goods-tel").show(800);
        $(".goods").removeClass("find-off");
        $(".goods h2").css("border-bottom","2px solid #fff");
        $(".bottom_box").removeClass("find-bottom-off");

        //更换金融样式
        $(".common-find-fiance-con").css("float","right");
        $(".common-find-fiance-con .common-find-tip").css({"background":"#fff","color":"#f60"});
        $(".common-find-fiance-con h2").css("border-bottom","2px solid #f60");
        $(".find-fiance-form").hide(300);

    });


    // 鼠标移入金融
    $(".common-find-fiance-con").mouseenter(function(){
        $(".common-find-fiance-con h2").css("border-bottom","2px solid #fff");
        $(".common-find-fiance-con .common-find-tip").css({"background":"#ff6600","color":"#fff"});
        $(".find-fiance-form").hide();
        $(".gylrz").show();
        $(".common-find-fiance-con").css("float","left");

        //更换找现货样式
        $(".common-find-goods-form,.common-find-goods-tel").hide(800);
        $(".goods").addClass("find-off");
        $(".goods h2").css("border-bottom","2px solid #ff6600");
        $(".bottom_box").addClass("find-bottom-off");

    });

    //找金融里面的切换

    //点击供应链融资
    $(".gylrz_span").click(function(){
        $(".gylrz").show();
        $(".esd_form,.yezhudai_form").hide();
    });

    $(".eshangdai").click(function(){
        $(".esd_form").show();
        $(".gylrz,.yezhudai_form").hide();

    });

    $(".yezhudai").click(function(){
        $(".yezhudai_form").show();
        $(".gylrz,.esd_form").hide();

    });



    // gylrz 供应链融资 金融form提交
    $(".gylrz-bottom-submit").click(function(){
        $phone = $(".gylrz-tel").val();

        if ($(".gylrz-up-name").val() == '应收账款企业') {
            $(".gylrz-up-name").addClass("input_error");
        }else if($(".gylrz-regmoney").val()=='注册资本'){
            $(".gylrz-regmoney").addClass("input_error");
        }else if(isNaN($(".gylrz-regmoney").val())){
            $(".gylrz-regmoney").addClass("input_error");
        }else if($phone == '联系电话'){
            $(".gylrz-tel").addClass("input_error");
        }else if(!isPhone($phone)){
            $(".gylrz-tel").addClass("input_error");
        }else if($(".gylrz-name").val()=='企业名称'){
            $(".gylrz-name").addClass("input_error");
        }else if($(".gylrz-down-name").val()=='应付账款企业'){
            $(".gylrz-down-name").addClass("input_error");
        }else if($(".gylrz-address").val()=='注册地址'){
            $(".gylrz-address").addClass("input_error");
        }else if($(".gylrz-turnover").val()=='年营业额'){
            $(".gylrz-turnover").addClass("input_error");
        }else if(isNaN($(".gylrz-turnover").val())){
            $(".gylrz-turnover").addClass("input_error");
        }else if($(".gylrz-quota").val()=='申请额度'){
            $(".gylrz-quota").addClass("input_error");
        }else if(isNaN($(".gylrz-quota").val())){
            $(".gylrz-quota").addClass("input_error");
        }else if($(".gylrz-rigister-time").val()=='注册时间'||$(".gylrz-rigister-time").val()==''){
            $(".gylrz-rigister-time").addClass("input_error");
        }else if($(".gylrz-legal").val()=='法人姓名'){
            $(".gylrz-legal").addClass("input_error");
        }else{

            var dataTypesObject = $("[dataTypes='content']");
            var dataTypesObjectLength = dataTypesObject.length;
            var applyContent = "[";
            var tempjson = "";
            for ( var i = 0; i < dataTypesObjectLength; i++) {
                var thisobject = dataTypesObject[i];
                var thisvalue = $(thisobject).val();
                var temp = '{"dataTypeName":"' + $(thisobject).attr("dataTypeName") + '","dataTypeZHName":"'
                    + $(thisobject).attr("dataTypeZHName") + '","dataValues":"' + $(thisobject).val() + '"}';
                console.log(thisobject);
                console.log("----------------------------------------------");
                console.log(temp);
                if (i > 0) {
                    tempjson = tempjson + "," + temp;
                } else {
                    tempjson = tempjson + temp;
                }

            }
            applyContent = applyContent + tempjson + "]";
            var data = {
                applyContent : applyContent,
                fromType : $("input[name='fromType']").val(),
                applicationType : 0,
                juridicalLinkway : $("input[name='juridicalLinkway']").val(),
                applyLoanCorname : $("input[name='applyLoanCorname']").val(),
                juridicalPerson : $("input[name='juridicalPerson']").val(),
                tmpToken : $("input[name='tmpToken']").val()
            }
            var domain = document.domain;
            var jinrongURL1 = "http://jinrong.99114.com/weixinPostFormJsonp";
            if (domain.indexOf("99114.net") >= 0) {
                jinrongURL1 ="http://jinrong.99114.cn/weixinPostFormJsonp";
            }
            else if(domain.indexOf("99114.cn") >= 0){
                jinrongURL1="http://jinrong.99114.cn/weixinPostFormJsonp";
            }
            $.ajax({
                url : jinrongURL1,
                async : true,
                data :data,
                dataType : "jsonp",
                type : "get",
                jsonp : "jsonpCallback",
               // contentType : "application/x-www-form-urlencoded; charset=utf-8",
                scriptCharset: 'utf-8',
                success: function(data){
                    var dadad=eval(data);
                    console.log(data);
                    console.log(dadad);
                    if(dadad.code==200){
                        $(".find-goods-success").show(200);
                    }else if(dadad.code==300){
                        alert("重复提交");
                        window.location.reload();
                    }else if(dadad.code==500){
                        alert("网络异常！");
                    }else{
                        alert("网络异常！");
                    }
                },
                error : function(a, b, c) {
                    console.log(a);
                    console.log(b);
                    console.log(c);
                }
            });

        }
    });



    // esd E商贷 金融form提交
    $(".esd-bottom-submit").click(function(){
        $phone = $(".esd-tel").val();

        if ($(".esd-name").val() == '企业名称') {
            $(".esd-name").addClass("input_error");
        }else if(!isNaN($(".esd-name").val())){
            $(".esd-name").addClass("input_error");
        }else if($(".esd-regmoney").val()=='注册资本'){
            $(".esd-regmoney").addClass("input_error");
        }else if(isNaN($(".esd-regmoney").val())){
            $(".esd-regmoney").addClass("input_error");
        }else if($phone == '联系电话'){
            $(".esd-tel").addClass("input_error");
        }else if(!isPhone($phone)){
            $(".esd-tel").addClass("input_error");
        }else if($(".esd-quota").val()=='申请额度'){
            $(".esd-quota").addClass("input_error");
        }else if($(".esd-address").val()=='注册地址'){
            $(".esd-address").addClass("input_error");
        }else if($(".esd-way").val()=='贷款用途'){
            $(".esd-way").addClass("input_error");
        }else if($(".esd-rigister-time").val()=='注册时间'||$(".esd-rigister-time").val()==''){
            $(".esd-rigister-time").addClass("input_error");
        }else if($(".esd-legal").val()=='法人姓名'){
            $(".esd-legal").addClass("input_error");
        }else{

            var dataTypesObject = $("[dataTypes='content1']");
            var dataTypesObjectLength = dataTypesObject.length;
            var applyContent = "[";
            var tempjson = "";
            for ( var i = 0; i < dataTypesObjectLength; i++) {
                var thisobject = dataTypesObject[i];
                var thisvalue = $(thisobject).val();
                var temp = '{"dataTypeName":"' + $(thisobject).attr("dataTypeName") + '","dataTypeZHName":"'
                    + $(thisobject).attr("dataTypeZHName") + '","dataValues":"' + $(thisobject).val() + '"}';
                console.log(thisobject);
                console.log("----------------------------------------------");
                console.log(temp);
                if (i > 0) {
                    tempjson = tempjson + "," + temp;
                } else {
                    tempjson = tempjson + temp;
                }

            }
            applyContent = applyContent + tempjson + "]";
            var data = {
                applyContent : applyContent,
                fromType : $("input[name='fromType']").val(),
                applicationType : 1,
                juridicalLinkway : $(".esd-tel").val(),
                applyLoanCorname : $(".esd-name").val(),
                juridicalPerson : $(".esd-legal").val(),
                tmpToken : $("input[name='tmpToken']").val()
            }
            var domain = document.domain;
            var jinrongURL = "http://jinrong.99114.com/weixinPostFormJsonp";
            if (domain.indexOf("99114.net") >= 0) {
                jinrongURL ="http://jinrong.99114.cn/weixinPostFormJsonp";
            }
            else if(domain.indexOf("99114.cn") >= 0){
                jinrongURL="http://jinrong.99114.cn/weixinPostFormJsonp";
            }
            $.ajax({
                url : jinrongURL,
                async : true,
                data :data,
                dataType : "jsonp",
                type : "get",
                jsonp : "jsonpCallback",
                //contentType : "application/x-www-form-urlencoded; charset=utf-8",
                scriptCharset: 'utf-8',
                success: function(data){
                    var dadad=eval(data);
                    console.log(data);
                    console.log(dadad);
                    if(dadad.code==200){
                        $(".find-goods-success").show(200);
                    }else if(dadad.code==300){
                        alert("重复提交");
                        window.location.reload();
                    }else if(dadad.code==500){
                        alert("网络异常！");
                    }else{
                        alert("网络异常！");
                    }
                },
                error : function(a, b, c) {
                    console.log(a);
                    console.log(b);
                    console.log(c);
                }
            });

        }
    });


    // yezhudai 业主贷 金融form提交
    $(".yezhudai-bottom-submit").click(function(){
        $phone = $(".yezhudai-tel").val();

        if ($(".yezhudai-name").val() == '企业名称') {
            $(".yezhudai-name").addClass("input_error");
        }else if(!isNaN($(".yezhudai-name").val())){
            $(".yezhudai-name").addClass("input_error");
        }else if($(".yezhudai-regmoney").val()=='注册资本'){
            $(".yezhudai-regmoney").addClass("input_error");
        }else if(isNaN($(".yezhudai-regmoney").val())){
            $(".yezhudai-regmoney").addClass("input_error");
        }else if($phone == '联系电话'){
            $(".yezhudai-tel").addClass("input_error");
        }else if(!isPhone($phone)){
            $(".yezhudai-tel").addClass("input_error");
        }else if($(".yezhudai-quota").val()=='申请额度'){
            $(".yezhudai-quota").addClass("input_error");
        }else if(isNaN($(".yezhudai-quota").val())){
            $(".yezhudai-quota").addClass("input_error");
        }else if($(".yezhudai-address").val()=='注册地址'){
            $(".yezhudai-address").addClass("input_error");
        }else if($(".yezhudai-way").val()=='贷款用途'){
            $(".yezhudai-way").addClass("input_error");
        }else if($(".yezhudai-rigister-time").val()=='注册时间'||$(".yezhudai-rigister-time").val()==''){
            $(".yezhudai-rigister-time").addClass("input_error");
        }else if($(".yezhudai-legal").val()=='法人姓名'){
            $(".yezhudai-legal").addClass("input_error");
        }else{
            var dataTypesObject = $("[dataTypes='content2']");
            var dataTypesObjectLength = dataTypesObject.length;
            var applyContent = "[";
            var tempjson = "";
            for ( var i = 0; i < dataTypesObjectLength; i++) {
                var thisobject = dataTypesObject[i];
                var thisvalue = $(thisobject).val();
                var temp = '{"dataTypeName":"' + $(thisobject).attr("dataTypeName") + '","dataTypeZHName":"'
                    + $(thisobject).attr("dataTypeZHName") + '","dataValues":"' + $(thisobject).val() + '"}';
                console.log(thisobject);
                console.log("----------------------------------------------");
                console.log(temp);
                if (i > 0) {
                    tempjson = tempjson + "," + temp;
                } else {
                    tempjson = tempjson + temp;
                }

            }
            applyContent = applyContent + tempjson + "]";
            var data = {
                applyContent : applyContent,
                fromType : $("input[name='fromType']").val(),
                applicationType : 2,
                juridicalLinkway :$(".yezhudai-tel").val(),
                applyLoanCorname :$(".yezhudai-name").val() ,
                juridicalPerson : $(".yezhudai-legal").val(),
                tmpToken : $("input[name='tmpToken']").val()
            }
            var domain = document.domain;
            var jinrongURL2 = "http://jinrong.99114.com/weixinPostFormJsonp";
            if (domain.indexOf("99114.net") >= 0) {
                jinrongURL2 ="http://jinrong.99114.cn/weixinPostFormJsonp";
            }
            else if(domain.indexOf("99114.cn") >= 0){
                jinrongURL2="http://jinrong.99114.cn/weixinPostFormJsonp";
            }
            $.ajax({
                url : jinrongURL2,
                async : true,
                data :data,
                dataType : "jsonp",
                type : "get",
                jsonp : "jsonpCallback",
                //contentType : "application/x-www-form-urlencoded; charset=utf-8",
                scriptCharset: 'utf-8',
                success: function(data){
                    var dadad=eval(data);
                    console.log(data);
                    console.log(dadad);
                    if(dadad.code==200){
                        $(".find-goods-success").show(200);
                    }else if(dadad.code==300){
                        alert("重复提交");
                        window.location.reload();
                    }else if(dadad.code==500){
                        alert("网络异常！");
                    }else{
                        alert("网络异常！");
                    }
                },
                error : function(a, b, c) {
                    console.log(a);
                    console.log(b);
                    console.log(c);
                }
            });

        }
    });

    //金融里面的输入框变化
    $(".fiance_input").blur(function(){
        $(this).removeClass("input_error outshow");
    });
    $(".fiance_input").focus(function(){
        $(this).removeClass("input_error").addClass("outshow");
    });
});





// 直达号
$(function(){
    function set_position(d, e, c) {
        var ContBoxOSLeft = $(".hyhy_center").offset().left - 2;
        var ContMOL = ContBoxOSLeft + 277;
        var tipsWhalf = d / 2;
        if (c < ContBoxOSLeft + 250) {
            if (c - ContBoxOSLeft < tipsWhalf) {
                $(".show_tips_company").css("left", ContBoxOSLeft - 4)
            } else {
                if (ContBoxOSLeft + 250 - c <= tipsWhalf) {
                    $(".show_tips_company").css("left", c + e - d + 2)
                } else {
                    $(".show_tips_company").css("left", c - (d - e) / 2)
                }
            }
        } else {
            if (c - ContMOL < tipsWhalf) {
                $(".show_tips_company").css("left", ContMOL - 4)
            } else {
                if (ContMOL + 250 - c < tipsWhalf) {
                    $(".show_tips_company").css("left", c + e - d + 2)
                } else {
                    $(".show_tips_company").css("left", c - (d - e) / 2)
                }
            }
        }
    }


    $('.hyhy_center_type p a').mouseover(function() {
        var Awidth = $(this).outerWidth() + 6, // b=a.w
            AOffSetTop = $(this).offset().top - 2, // c=a.offset.top
            AOffSetLeft = $(this).offset().left - 4;// a=a.offset.left
        // 当能都获取到交易网的值时显示
        var oldHtml = $(this).html();
        var oldHref = $(this).attr("href");
        var data = $(this).attr("data");
        var dataurl = $(this).attr("dataUrl");
        if (data && dataurl) {
            $(".show_tips a").html(oldHtml).attr("href", oldHref);
            $(".show_tips_a").attr("href", dataurl);
            $(".show_tips_a span").html(data);
            $(".show_tips").css({
                width : Awidth,
                top : AOffSetTop,
                left : AOffSetLeft
            });
            $(".show_tips_company").css("top", AOffSetTop + 22);// c+20
            set_position($(".show_tips_company").outerWidth(), Awidth, AOffSetLeft)
        } else {
            $(".show_tips a").html('');
            $(".show_tips_a span").html('');
            $(".show_tips_company,.show_tips").hide();
        }
    });

    $(".show_tips_company,.show_tips,.hyhy_center_type p a,.hyhy_center_type p a").hover(function() {

        if ($('.show_tips_company').find('span').html() != '') {
            $(".show_tips_company,.show_tips").show();
        }
    }, function() {
        $(".show_tips_company,.show_tips").hide();
    });
});

//2f 底部点击更多 wj
$(function (){
	$(".homePage_hyhy_more").toggle(function (){
		$(".more_ul").slideDown(500);
		$(this).children("span").text("收起更多行业");
		$(this).children("i").css({"background":"url(../../static/fodder/hyhy_more_top.png)"});
	},function(){
		$(".more_ul").slideUp(300);
		$(this).children("span").text("展开更多行业");
		$(this).children("i").css({"background":"url(../../static/fodder/hyhy_more_bottom.png)"});

	})
})
//2f  wj end

//3f wj
$(function(){
    var slideShow = $(".slideShow");
    slideShow.each(function(i, el){
        new SlideShow( $(el) );
    });
    function SlideShow( $container ){
        var self = this;
        this.ul = $container.find("ul");
        this.showNumber = $container.find(".showNav span");
        this.oneWidth = $container.find("ul li").eq(0).width(); //获取每个图片的宽度
        this.timer = null;
        this.iNow = 0;  //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
        this.showNumber.on("click",function(){   //为每个按钮绑定一个点击事件
            if (!self.timer){
                $(this).addClass("active").siblings().removeClass("active"); //点击变色
                var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
                self.iNow = index;
                self.ul.animate({"left": -self.oneWidth*self.iNow},300);
                self.setTimer();
            }
        });
        this.$next = $container.find(".wktx_next");
        this.$next.click(function(){
            if (!self.timer){
                self.iNow++;
                if( self.iNow > self.showNumber.length-1){
                    self.iNow = 0;
                }
                self.showNumber.eq(self.iNow).trigger("click");
                self.setTimer();
            }
        });
        this.$prev = $container.find(".wktx_prev");
        this.$prev.click(function(){
            if (!self.timer){
                self.iNow--;
                if(self.iNow > self.showNumber.length-1){
                    self.iNow = 0;
                }
                self.showNumber.eq(self.iNow).trigger("click");
                self.setTimer();
            }
       });
    }
    SlideShow.prototype.setTimer = function(){
        var self = this;
        this.timer = setTimeout(function(){
            clearTimeout(self.timer);
            self.timer = null;
        }, 350);
    }
})
//3f  wj end

$(function(){
    $(".ind-o2o-ztyg-con video").addClass('pause');
    $('.ind-o2o-ztyg-con video').click(function() {
        if ($(this).hasClass('pause')) {
            $(this).trigger("play");
            $(this).removeClass('pause');
            $(this).addClass('play');
        } else {
            $(this).trigger("pause");
            $(this).removeClass('play');
            $(this).addClass('pause');
        }
    });
});
//右侧返回顶部 wj
$(function (){
    $(".l-service").mouseenter(function(){
        $(".l-S-pop").stop().animate({right: '0'}, 200);
    });

    $(".l-service").mouseleave(function(){
        $(".l-S-pop").stop().animate({right: '-360px'},200);
    });

	//返回顶部
	$(".l-top ,.top_banner").click(function (){
	$("html,body").animate({scrollTop: 0},500)})

	//一定高度显示导航
	var height = 700;
  //var height02 =6200;
	var left_nav = $(".f-floating");
	sTop = 0;

	$(window).scroll(function (){
		sTop = $(document).scrollTop();
		toToggle();
	})

	function toToggle(){
		if (sTop > height ) {
      left_nav.slideDown(300);
    }else{
      left_nav.slideUp(600);
    }
	}




	$(".l-AD").toggle(function (){
		$(".fudong-animate").slideDown(300);
		$(this).slideUp(300);
	},function (){
		$(".fudong-animate").slideUp(300);
		$(this).slideDown(300);
	})

	//点击叉号，关闭广告
	$(".animate-wrap i").click(function (){
		$(".fudong-animate").slideUp(300);
		$(".l-AD").slideDown(300);
	})
	//返回顶部三角
	// $(".bottom_san").velocity({top:26},{loop:true,duration:500,easing:"linear"});
	// 	},function(){
	// 	    $(".bottom_san").velocity('stop');
	// 	    $(".bottom_san").velocity({top:28}).velocity('finish');
})


// /* map wuxiao */
// $(function(){
//     $(".ind-o2o-map").css({'position': 'relative', 'overflow': 'visible'});
//
//     var mapDom = document.getElementById("map");
//     var myChart = echarts.init(mapDom);
//     var labelPos = [[114.502461, 38.045474], [117.000923, 36.675807], [123.429096, 41.796767], [127.942464, 46.756967],
//         [125.3245, 43.886841], [103.823557, 36.058039], [113.665412, 34.757975], [118.767413, 32.041544],[114.298572, 30.584355]
//         ,[112.982279, 28.19409], [115.892151, 28.676493], [120.153576, 30.287459], [113.280637, 23.125178], [102.712251, 25.040609]
//         ,[119.306239, 26.075302],[110.33119, 20.031971],[112.549248, 37.857014],[104.065735, 30.659462]
//         ,[108.948024, 34.263161],[106.713478, 26.578343],[117.283042, 31.86119],[106.504962, 29.533155],[116.405285, 39.904989],
//         [117.190182, 39.125596],[121.472644, 31.231706], [108.320004, 22.82402],[111.670801, 40.818311],[86.617733, 40.792818]
//         ,[106.278179, 38.46637],[95.778916, 35.623178],[90.132212, 30.660361],[121.509062, 25.044332],[114.173355, 22.320048]];
//     var bigAreaCode = [null,12,4,3,30,16,null,1,7,null,9,2,10,null,11,null,null,17,
//         null,18,8,170,23,13,null,null,5,160,null,null,null,null,null]; //若接口数据有变化这个数组也要变
//     //如北京对应的value是22，接口中北京的bigAreaId是23，则bigAreaCode[22]为23，该区域没有展厅则为null
//     var $map = $("#map");
//     var $mapWrap = $("#mapWrap");
//     var $infoBoard = $("#infoBoard");
//     var mouseOverCache = [-1, -1];
//     var $infoBoardName = $infoBoard.find(".name");
//     var $infoBoardAddress = $infoBoard.find(".address");
//     var $infoBoardContact = $infoBoard.find(".contact");
//     var $infoBoardA = $infoBoard.find("a");
//     $.preloadImages = function(){
//         for (var i = 0; i < arguments.length; i++){
//             $("<img />").attr("src", arguments[i]);
//         }
//     }
//     var optionMap = {
//         tooltip: {
//             trigger: 'item',
//             enterable: false,
//             alwaysShowContent: false,
//             backgroundColor: 'rgba(50,50,50,0)',
//             borderWidth: 0,
//             padding: 0,
//             position: function (point, params, dom, rect, size){
//                 return [point[0]-350, point[1]-110];
//             },
//             formatter: function(params, ticket, callback){
//                 var seriesModel = myChart.getModel().getSeriesByIndex(0);
//                 var coordSys = seriesModel.coordinateSystem;
//                 var point = coordSys.dataToPoint( [labelPos[params.value][0], labelPos[params.value][1]] );
//                 var coord = {x: 0, y: 0};
//                 coord.x = parseInt(point[0]).toFixed(1);
//                 coord.y = parseInt(point[1]).toFixed(1);
//                 var posStr = 'left: ' + (coord.x - 9) + 'px; top:' + (coord.y - 13.5) + 'px;';
//                 $map.children('img').remove();
//                 var $tooltip = $('<img src="../../static/imagesv4/pin.png" style="position: absolute;' + posStr + ' display: block;pointer-events: none;" />');
//                 $map.append($tooltip);
//                 if ( bigAreaCode[params.value] !== null ){
//                     $infoBoard.removeClass('DPN');
//                     mouseOverCache.unshift($.inArray(bigAreaCode[params.value], exbAreaCache));
//                     mouseOverCache.pop();
//                     if ( mouseOverCache[0] !== mouseOverCache[1] ){
//                         var obj = exbData[ $.inArray(bigAreaCode[params.value], exbAreaCache) ];
//                         $infoBoardName.html( obj.name );
//                         $infoBoardAddress.html( '地址：' + obj.position );
//                         $infoBoardContact.html( '联系电话：' + obj.tel);
//                         $infoBoardA.attr('href', './o2oGoods/toO2OGoodsDetail/' + obj.hrefID );
//                         // $infoBoard.css('background-image', 'url(' + obj.bg + ')' );
//                     }
//                 } else {
//                     $infoBoard.addClass('DPN');
//                 }
//                 return '<div class="boardProxy"></div>';
//             }
//         },
//         backgroundColor: '#fff',
//         series: [
//             {
//                 name: '中国',
//                 type: 'map',
//                 map: 'china',
//                 itemStyle: {
//                     normal: {
//                         areaColor: '#E7DECD',
//                         borderColor: '#FBF6FC',
//                         borderWidth: '2',
//                         cursor: 'move'
//                     },
//                     emphasis: {
//                         areaColor: '#D9C7A1'
//                     }
//                 },
//                 zoom: 1.2,
//                 label: {
//                     normal: {
//                         show: true,
//                         textStyle: {
//                             color: "#000",
//                             fontSize: 14
//                         }
//                     },
//                     emphasis: {
//                         show: false
//                     }
//                 },
//                 roam: 'move',
//                 silent: false,
//                 data: [
//                     {
//                         name: '河北',
//                         value: 0
//                     }, {
//                         name: '山东',
//                         value: 1
//                     }, {
//                         name: '辽宁',
//                         value: 2
//                     }, {
//                         name: '黑龙江',
//                         value: 3
//                     }, {
//                         name: '吉林',
//                         value: 4
//                     }, {
//                         name: '甘肃',
//                         value: 5
//                     }, {
//                         name: '河南',
//                         value: 6
//                     }, {
//                         name: '江苏',
//                         value: 7
//                     }, {
//                         name: '湖北',
//                         value: 8
//                     }, {
//                         name: '湖南',
//                         value: 9
//                     }, {
//                         name: '江西',
//                         value: 10
//                     }, {
//                         name: '浙江',
//                         value: 11
//                     }, {
//                         name: '广东',
//                         value: 12
//                     }, {
//                         name: '云南',
//                         value: 13
//                     }, {
//                         name: '福建',
//                         value: 14
//                     }, {
//                         name: '海南',
//                         value: 15
//                     }, {
//                         name: '山西',
//                         value: 16
//                     }, {
//                         name: '四川',
//                         value: 17
//                     }, {
//                         name: '陕西',
//                         value: 18
//                     }, {
//                         name: '贵州',
//                         value: 19
//                     }, {
//                         name: '安徽',
//                         value: 20
//                     }, {
//                         name: '重庆',
//                         value: 21
//                     }, {
//                         name: '北京',
//                         value: 22
//                     }, {
//                         name: '天津',
//                         value: 23
//                     }, {
//                         name: '上海',
//                         value: 24
//                     }, {
//                         name: '广西',
//                         value: 25
//                     }, {
//                         name: '内蒙古',
//                         value: 26
//                     }, {
//                         name: '新疆',
//                         value: 27
//                     }, {
//                         name: '宁夏',
//                         value: 28
//                     }, {
//                         name: '青海',
//                         value: 29
//                     }, {
//                         name: '西藏',
//                         value: 30
//                     }, {
//                         name: '台湾',
//                         value: 31
//                     }, {
//                         name: '香港',
//                         value: 32
//                     }, {
//                         name: '南海诸岛',
//                         value: null,
//                         itemStyle: {
//                             normal: {
//                                 opacity: 0,
//                                 label: {
//                                     show: false
//                                 }
//                             }
//                         }
//                     }
//                 ]
//             }
//         ]
//     };
//     function setMap(){
//         myChart.setOption(optionMap);
//         var $proxyBoard = $("#map > div:first-child + div");
//         function mapMousemove(){
//             if ($proxyBoard.position().top < 2000){
//                 $infoBoard.css({
//                     'top': $proxyBoard.position().top-100,
//                     'left': $proxyBoard.position().left-150,
//                     'display': $proxyBoard.get(0).style.display
//                 });
//             } else {
//                 $infoBoard.css({'display': 'none'});
//                 $map.children('img').remove();
//             }
//         }
//         $map.mousemove(function(){
//             mapMousemove();
//         });
//         $(".ind-o2o-map").mouseleave(function(e){
//             $infoBoard.css({'display': 'none'});
//             $map.children('img').remove();
//         });
//     }
//
// //get exhibition data
//     var exbData = [];
//     var exbAreaCache = [];
//     jQuery.support.cors = true;  // wx0630
//     $.ajax({
//         type: "get",
//         dataType: "json",
//         contentType: "application/json; charset=utf-8",
//         url: "http://hdpexhibition-api.99114.com/hdpExhibition/getExhibitionName?wossAccount=superadmin" ,
//         error: function (data){
//             console.log("something went wrong")
//         },
//         success: function (data){
//             if(data){
//                 var length = data.respBody.length;
//                 for( var i=0; i< length; i++){
//                     var item = data.respBody[i];
//                     if ( $.inArray(item.bigAreaId, exbAreaCache) < 0 ){
//                         exbAreaCache.push(item.bigAreaId);
//                         exbData.push({
//                             name: item.name,
//                             position: item.position,
//                             bg: item.exhibitionImgUrl,
//                             hrefID: item.id,
//                             // area: item.bigAreaId,
//                             tel: item.telephone
//                         });
//                         // $.preloadImages( item.bg );
//                     }
//                 }
//                 setMap();
//             }
//         }
//     });
// }); // map end




