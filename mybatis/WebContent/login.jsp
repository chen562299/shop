<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html>

<html>

	<head lang="en">
		<meta charset="UTF-8">
		<title>登录</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="format-detection" content="telephone=no">
		<meta name="renderer" content="webkit">
		<meta http-equiv="Cache-Control" content="no-siteapp" />

		<link rel="stylesheet" href="assets/css/amazeui.css" />
		<link href="css/dlstyle.css" rel="stylesheet" type="text/css">
		<link href="css/My.css" rel="stylesheet" type="text/css">
	</head>

	<body>

	<div class="login-boxtitle">
		<a href="home.html"><img alt="logo" src="images/logobig.png" /></a>
	</div>

	<div class="login-banner">
		<div class="login-main">
			<div class="login-banner-bg">
				<span></span><img src="images/big.jpg" />
			</div>
			
			<div class="login-box">

		<form action="LoginServlet" method="post">
				<h3 class="title">登录商城</h3>

				<div class="clear"></div>

				<div class="login-form">
         
					<div class="user-name">
						<label for="user"><i class="am-icon-user"></i></label> <input
							type="text" name="userName" id="user" placeholder="邮箱/手机/用户名" value="${cookie.nameCookie.value }">
					</div>
					<div class="user-pass">
						<label for="password"><i class="am-icon-lock"></i></label> <input
							type="password" name="userPsw" id="password" placeholder="请输入密码" >
					</div>
					<div class="verification">
					
					<label for="code"><i class="am-icon-code-fork"></i></label>
						<input type="text" class="in_class" name="code"
							placeholder="填写右侧的验证码" data-validate="required:请填写右侧的验证码" /> <img
							src="ImageServlet" alt="111" width="100px" height="32px"
							class="passcode" style="height: 43px; cursor: pointer;"
							onclick="this.src=this.src+'?'">
					</div>
					

					
					

				</div>
 						<c:if test="${cookie.nameCookie.value }">
 							
 						</c:if>
			<input  style="height: 15px; width: 15px; z-index: 2px;" id="sdsd1" name="gougou"
						type="checkbox" value="1" checked="checked"> <span style="margin-left: 20px;">记住密码</span>
				<div class="am-cf">
				
					<input type="submit" name="" value="登 录"
						class="am-btn am-btn-primary am-btn-sm">
				</div>
				
				
					
				</form>
				<font style="color: red;"> ${userError} </font>
				<font style="color: red;"> ${yanzhengmaError} </font>
			
			    	
				
	<div class="login-links">    <!--  <label id="remember-me">
				    <input id="remember-me" name="gougou"
						type="checkbox">记住密码</label> -->
	
					 <a href="register.jsp" class="zcnext am-fr am-btn-default">注册</a> <br />
				</div>
				</div>
		</div>
	</div>


	<div class="footer ">
		<div class="footer-hd ">
			<p>
				<a href="# ">恒望科技</a> <b>|</b> <a href="# ">商城首页</a> <b>|</b> <a
					href="# ">支付宝</a> <b>|</b> <a href="# ">物流</a>
			</p>
		</div>
		<div class="footer-bd ">
			<p>
				<a href="# ">关于恒望</a> <a href="# ">合作伙伴</a> <a href="# ">联系我们</a> <a
					href="# ">网站地图</a> <em><a href="http://www.5imoban.net/"
					target="_blank" title="html静态模板">我爱模板网</a></em>
			</p>
		</div>
	</div>
</body>

</html>