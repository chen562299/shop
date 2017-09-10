<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<script src="js/jquery.js"></script>
<script >
if(self!=top){
	parent.window.location.replace(window.location.href);
}

</script>

<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<title>个人中心</title>

<link href="../assets/css/admin.css" rel="stylesheet" type="text/css">
<link href="../assets/css/amazeui.css" rel="stylesheet" type="text/css">
<link href="../css/personal.css" rel="stylesheet" type="text/css">
<link href="../css/systyle.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
		function iframeLoad()
		{
		    document.getElementById("iframe").height=0;
		    document.getElementById("iframe").height=document.getElementById("iframe").contentWindow.document.body.scrollHeight;
		}
		</script>
</head>

<body>
	<!--头 -->
	<header> <article>
	<div class="mt-logo">
		<!--顶部导航条 -->
		<div class="am-container header">
			<ul class="message-l">
				<div class="topMessage">
					<div class="menu-hd">
						<c:if test="${user!=null }">${user.name }，欢迎您</c:if>
						<c:if test="${user==null }">
						
							<a href="login.jsp" target="_top" class="h"> 亲，请登录 </a>
							<a href="register.jsp" target="_top">免费注册</a>
						</c:if>	
					</div>
				</div>
			</ul>
			<ul class="message-r">
				<div class="topMessage home">
					<div class="menu-hd">
						<a href="#" target="_top" class="h">商城首页</a>
					</div>
				</div>
				<div class="topMessage my-shangcheng">
					<div class="menu-hd MyShangcheng">
						<a href="indexRight.html" target="_top"><i
							class="am-icon-user am-icon-fw"></i>个人中心</a>
					</div>
				</div>
				<div class="topMessage mini-cart">
					<div class="menu-hd">
						<a id="mc-menu-hd" href="logistics.html" target="_top"><i
							class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong
							id="J_MiniCartNum" class="h">0</strong></a>
					</div>
				</div>
				<div class="topMessage favorite">
					<div class="topMessage favorite">
					<div class="menu-hd">
					<c:if test="${user!=null }"><a href="LoginOutServlet" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>安全退出</span></a></c:if>

					</div>
			</ul>
		</div>

		<!--悬浮搜索框-->

		<div class="nav white">
			<div class="logoBig">
				<li><img src="../images/logobig.png" /></li>
			</div>

			<div class="search-bar pr">
				<a name="index_none_header_sysc" href="#"></a>
				<form>
					<input id="searchInput" name="index_none_header_sysc" type="text"
						placeholder="搜索" autocomplete="off"> <input
						id="ai-topsearch" class="submit am-btn" value="搜索" index="1"
						type="submit">
				</form>
			</div>
		</div>

		<div class="clear"></div>
	</div>
	</div>
	</article> </header>
	<div class="nav-table">
		<div class="long-title">
			<span class="all-goods">个人中心</span>
		</div>

	</div>
	<b class="line"></b>
	<!-- 左边 -->
	<div class="center">
		<div class="col-main">
			<div class="main-wrap">
				<div class="wrap-left" style="width: 1150px;">
					<iframe onload="iframeLoad()" id="iframe" scrolling="no"
						rameborder="0" src="information.jsp" name="right" width="100%"
						height="100%"></iframe>
				</div>
			</div>
			<!-- 底页 -->
		<div class="footer ">
			<div class="footer-hd ">
				<p>
					<a>恒望科技</a> <b>|</b> <a href="# ">商城首页</a> <b>|</b> <a>支付宝</a> <b>|</b>
					<a>物流</a>
				</p>
			</div>
			<div class="footer-bd ">
				<p>
					<a>关于 GO购</a> <a>合作伙伴</a> <a>联系我们</a> <a>网站地图</a> <a href="# ">管理登录</a>
				</p>
			</div>
		</div>

		</div>

		<aside class="menu">
		<ul>
			<li class="person active"><a href="#"
				>个人中心</a></li>
			<li class="person"><a >个人资料</a>
				<ul>
					<li><a href="information.jsp" target="right">个人信息</a></li>
					
					<li><a href="../information.jsp" target="right">信息修改</a></li>
					
					<li><a href="../password.jsp" target="right">密码修改</a></li>
					
					<li><a href="logistics.html" target="right">收货地址</a></li>
				</ul></li>
			<li class="person"><a >我的交易</a>
				<ul>
					<li><a href="orderRight.html" target="right">订单管理</a></li>
					<li><a href="changeRight.html" target="right">退款售后</a></li>
				</ul></li>
			<li class="person"><a >我的资产</a>
				<ul>
					<li><a href="couponRight.html" target="right">优惠券 </a></li>
					<li><a href="bonusRight.html" target="right">红包</a></li>
					<li><a href="billRight.html" target="right">账单明细</a></li>
				</ul></li>

			<li class="person"><a href="#">我的小窝</a>
				<ul>
					<li><a href="collectionRight.html" target="right">收藏</a></li>
					<li><a href="footRight.html" target="right">足迹</a></li>
					<li><a href="commentRight.html" target="right">评价</a></li>
					<li><a href="newsRight.html" target="right">消息</a></li>
				</ul></li>

		</ul>

		</aside>
	</div>
</body>

</html>