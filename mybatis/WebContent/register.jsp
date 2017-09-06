<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head lang="en">
		<meta charset="UTF-8">
		<title>注册</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="format-detection" content="telephone=no">
		<meta name="renderer" content="webkit">
		<meta http-equiv="Cache-Control" content="no-siteapp" />

		<link rel="stylesheet" href="assets/css/amazeui.min.css" />
		<link href="css/dlstyle.css" rel="stylesheet" type="text/css">
		<script src="js/jquery.min.js"></script>
		<script src="js/amazeui.min.js"></script>
		<script >
		    //判断用户名是否存在
		    $(function(){
		    	var userNameIfTrue = false
		        var passwordIfTrue = true
		        var passwordRepeatIfTrue = true
		        var name=true
		    	var userName = function(){
		    		$.ajax({
		    			url:"RegisterServlet",
		    			dataType:"text",
		    			data:{userNameAjax:$(".userName").val()},
		    		    success:function(result){
		    		    	if(result=="yes"){
		    		    		$("#user").remove();
		    		    		userNameIfTrue = false
		    		    		$("#userName").after("<a style='color:red' id='user'>用户名已存在</a>");
		    		    		
		    		    	}else{
		    		    		userNameIfTrue = true
		    		    	}
		    		    				    		    				    		    	
		    		    }
		    		})
				}
			
		    	//判断密码的长度
		    	var password = function(){
		    		
		    		if($(".password").val().length!=6){
		    		
		    			$("#pass").remove();
		    			passwordIfTrue = false
		    			$("#passwordDiv").after("<a style='color:red' id='pass'>密码长度为6位</a>");
		    			
		    		}
		    					    				    		
		    	}
		    
		    	//判断密码是否一致
		    	var passwordRepeat = function(){
		    		
		    		if($(".passwordRepeat").val()!=$(".password").val()){
		    		
		    			$("#passw").remove();
		    			passwordRepeatIfTrue = false
		    			$("#passwordRepeatDiv").after("<a style='color:red' id='passw'>密码不一致</a>");
		    			
		    		}
		    				    				    		
		    	}
		    	//判断name
		    	function(){
		    		if($(".name").val()==null){
		    			$("#name1").remove();
		    			name=false
		    			$("#Name").after("<a style='color:red' id='name1'>姓名不为空</a>");
		    			
		    		}
		    	}
		    	//消除提醒语句
		    	$(".")
		    	$(".userName").click(function(){
		    		
		    		$("#user").remove();
		    	})
		    	
		    	$(".password").click(function(){
		    		passwordIfTrue = true
		    		$("#pass").remove();
		    	})
		    	
		    	$(".passwordRepeat").click(function(){
		    		passwordRepeatIfTrue = true
		    		$("#passw").remove();
		    	})
		    	
		    	//判断是否提交
		         	$("#sub").click(function(){
		    		
		    		userName();
		    		password();
		    		passwordRepeat();
		    		name();
		    		if(userNameIfTrue==false||passwordIfTrue==false||passwordRepeatIfTrue==false){
		    			return false;
		    		}
		    	})
		    	
		    	
		    })
		</script>
</head>
<body>
     <div class="login-boxtitle">
			<a href="home/demo.html"><img alt="" src="images/logobig.png" /></a>
		</div>

		<div class="res-banner">
			<div class="res-main">
				<div class="login-banner-bg"><span></span><img src="images/big.jpg" /></div>
				<div class="login-box">

						<div class="am-tabs" id="doc-my-tabs">
							<ul class="am-tabs-nav am-nav am-nav-tabs am-nav-justify">
								<li class="am-active"><a href="">快速注册</a></li>
								
							</ul>
                            <form method="post" action="RegisterServlet">
							<div class="am-tabs-bd">
								<div class="am-tab-panel am-active">
									
								 		
								 		
								 		
								 		
								 		
								 		
							   <div class="user-email" id="userName">
										<label for="email"><i class="am-icon-envelope-o"></i></label>
										<input type="text" id="email" class="userName" name="userName"  placeholder="请输入用户账号">
                               </div>					
                             			
                 <div class="user-pass" id="passwordDiv">
								    <label for="password"><i class="am-icon-lock"></i></label>
								    <input type="password" v name="password" id="password" class="password" placeholder="设置密码（6位）">
                 </div>										
                 <div class="user-pass" id="passwordRepeatDiv">
								    <label for="passwordRepeat"><i class="am-icon-lock"></i></label>
								    <input type="password" name="confirmPassword" class="passwordRepeat" id="passwordRepeat" placeholder="确认密码">
                 </div>	
                 		
                
                 
								 
										<div class="am-cf">
											<input type="submit" name="" value="注册" class="am-btn am-btn-primary am-btn-sm am-fl" id="sub">
										</div>
					<a href="login.jsp" target="_top" style="margin-left: 110px; " class="h"> 返回登录 </a>
								</div>
                       </form>
								

								<script>
									$(function() {
									    $('#doc-my-tabs').tabs();
									  })
								</script>

							</div>
						</div>

				</div>
			</div>
			
					<div class="footer ">
						<div class="footer-hd ">
							<p>
								<a href="# ">恒望科技</a>
								<b>|</b>
								<a href="# ">商城首页</a>
								<b>|</b>
								<a href="# ">支付宝</a>
								<b>|</b>
								<a href="# ">物流</a>
							</p>
						</div>
						<div class="footer-bd ">
							<p>
								<a href="# ">关于恒望</a>
								<a href="# ">合作伙伴</a>
								<a href="# ">联系我们</a>
								<a href="# ">网站地图</a>
								<em><a href="http://www.5imoban.net/" target="_blank" title="html静态模板">我爱模板网</a></em>
							</p>
						</div>
					</div>
	</body>

</html>