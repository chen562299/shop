$(function(){
    /*搜索下拉*/
    $(".comTagselect").live("click",function(){
        var comTagselect = $(".comTagselect").eq(0).text();
        var comTagoptions_a = $(".comTagoptions").find("a");
        for (var i = 0; i < comTagoptions_a.length; i++) {
            option_val = comTagoptions_a.eq(i).text();
            if (comTagselect == option_val) {
                $(".comTagoptions").find("a").eq(i).parent().hide().siblings().show();
            }
        }
        if($(".comTagoptions").display="none"){
            $(".comTagoptions").slideDown("fast");
            $(".comSelect").css({"border-bottom":"2px solid #f5f5f5","border-right":"1px solid #e8e8e8"});
            $(".comTagoptions").css({"border":"1px solid #e8e8e8","border-top":"none"});
            $(".comSelect").css("background","#f5f5f5 url(../../static/imagesv4/sel_ico1.png) no-repeat 58px center");

        }else{
            $(".comTagoptions").slideUp("fast");
            $(".comSelect").css("background","#f5f5f5 url(../../static/imagesv4/sel_ico.png) no-repeat 58px center");

        }
    });

    $(".tabula").live("click",function(){
        $(".comSelect").css("background","#f5f5f5 url(../../static/imagesv4/sel_ico.png) no-repeat 58px center");
        $(".comTagselect").text($(this).text());
        if ($(this).text()=="求购") {
            $(".comSearchConText,.comSearchConText_2").val("请输入求购产品");
        }else if($(this).text()=="供应商"){
            $(".comSearchConText,.comSearchConText_2").val("请输入供应商名称");
        }else if($(this).text()=="货源"){
            $(".comSearchConText,.comSearchConText_2").val("请输入产品名称");
        }
    });

    // 626新增下拉框begin
    /*点击任何地方关闭层*/
    $(document).click(function(event) {
        if ($(event.target).attr("class") != "comTagselect") {
            $(".comTagoptions").slideUp("fast");
            $(".comSelect").css({"border-bottom":"2px solid #f64400","border-right":"none"});
            $(".comSelect").css("background","#f5f5f5 url(../../static/imagesv4/sel_ico.png) no-repeat 58px center");
            $(".search_key_wrap").hide();
        }
    });


    $(".comSearchConText").keyup(function(){

        //$(".search_key_wrap").show();
    });

    // 626新增下拉框end
});


// // 滑动滚动条
// $(window).scroll(function(){
// // 滚动条距离顶部的距离 大于 200px时
//     if($(window).scrollTop() >= 60){
//         $(".header_top").css({'position': 'fixed', 'top': 0,'display':'block'}); // 开始淡入
//     }else{
//         $(".header_top").css({'position': 'relative', 'top': 'auto','display':'none'}); // 如果小于等于 200 淡出
//     }
// });

   
