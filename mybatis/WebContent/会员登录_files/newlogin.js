/**
 * Created by wangxin on 2017/7/17.
 */
//判断登录按钮
var verificationDiv = $('#J-verification-div'),
    temp1=verificationDiv.is(":visible");
$('#username,#password,#vcode').on('input propertychange', function() {
    var userVal = $('#username').val(),
        pwVal = $('#password').val(),
        verificationVal = $('#vcode').val();
    if (temp1) {
        if (userVal == '' || pwVal == '' || verificationVal == '') {
            $('#butlogin').hide();
            $('#butlogin_disabled').show();
        }else{
            $('#butlogin').show();
            $('#butlogin_disabled').hide();
        }
    }else {
        if (userVal == '' || pwVal == '') {
            $('#butlogin').hide();
            $('#butlogin_disabled').show();
        }else{
            $('#butlogin').show();
            $('#butlogin_disabled').hide();
        }
    }
});
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function wkappvcode(){
	$('#wkappsm').text("");
    var myDate=new Date();
    var codeValue = "wkAppCheckin_"+myDate.getTime()+"_"+S4()+S4()+S4();
    $('#wkappsm').qrcode({
        width: 154, //宽度
        height:154, //高度
        text: codeValue //任意内容
    });
}
//密码登录和扫码登录切换效果
/*
$('.D-wechat ul li').on('click', function (){
    $(this).removeClass('on').siblings().addClass('on');
    var index = $(this).index();
    $('.D-login-div>div').eq(index).hide().siblings().show();
    $(".J-wx-app").hide();
    $('.J-dpt-app').show();
    wkappvcode();
    //app二维码10s后失效
    var show_code= function () {setTimeout(function(){$('.J-dpt-app').find(".J-code-invalid").show();}, 60000)};
    if($('.D-login-div>div:eq(1)').is(':visible')){
        show_code();
        $(".J-refresh-btn1").click(function () {
            $(this).parent(".J-code-invalid").hide();
            wkappvcode();
            show_code();
        })
    }else{
        $(".J-code-invalid").hide();
        clearTimeout(show_code)
    }
});
*/

$('.D-wechat ul li').on('click', function (){
	$(this).removeClass('on').siblings().addClass('on');
    var index = $(this).index();
    $('.D-login-div>div').eq(index).hide().siblings().show();
    $(".J-wx-app").show();
    $('.J-dpt-app').hide();
});
//点击微信图标，使用微信扫码登录
$('.J-wechat').on('click', function (){
    $('.D-wechat ul li').eq(0).removeClass('on').siblings().addClass('on');
    $('.D-login-div>div').eq(0).hide().siblings().show();
    $(".J-wx-app").show();
    $('.J-dpt-app').hide();
    //微信二维码10s后失效
    var show_code= function () {setTimeout(function(){$(".J-wx-app").find(".J-code-invalid").show();}, 60000)};
    show_code();
    $(".J-refresh-btn2").click(function () {
        $(this).parent(".J-code-invalid").hide();
        show_code();
    })
});

//返回微信二维码登录
$(".J-return").click(function () {
    $(this).parents(".J-sm-after").hide();
    $(".J-sm-before").show();
});
//客服弹框
$(".J-kefu").hover( function () {
    $(".l-S-pop").show();
},function () {
    $(".l-S-pop").hide();
});
$(".J-wechat2_a").click( function () {
    $(".J-wechat2-con").toggle(500);
});
