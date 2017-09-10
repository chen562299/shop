<%@page import="com.bwf.bean.Notice"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<title>首页</title>

<link href="assets/css/amazeui.css" rel="stylesheet" type="text/css" />
<link href="assets/css/admin.css" rel="stylesheet" type="text/css" />

<link href="basic/css/demo.css" rel="stylesheet" type="text/css" />

<link href="css/hmstyle.css" rel="stylesheet" type="text/css" />
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/amazeui.min.js"></script>

</head>
<script >
if(self!=top){
	parent.window.location.replace(window.location.href);
}

</script>
<body>
	<div class="hmtop">
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
						<a href="index.html" target="_top" class="h">商城首页</a>
					</div>
				</div>
				<div class="topMessage my-shangcheng">
					<div class="menu-hd MyShangcheng">
						<a href="person/PersonIndex.jsp" target="_top"><i
							class="am-icon-user am-icon-fw"></i>个人中心</a>
					</div>
				</div>
				<div class="topMessage mini-cart">
					<div class="menu-hd">
						<a id="mc-menu-hd" href="shopcart.html" target="_top"><i
							class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong
							id="J_MiniCartNum" class="h">0</strong></a>
					</div>
				</div>
				<div class="topMessage favorite">
					<div class="menu-hd">
						<c:if test="${user!=null }">
							<a href="LoginOutServlet" target="_top"><i
								class="am-icon-heart am-icon-fw"></i><span>安全退出</span></a>
						</c:if>

					</div>
			</ul>
		</div>

		<!--悬浮搜索框-->

		<div class="nav white">
			<div class="logo">
				<img src="images/logo.png" />
			</div>
			<div class="logoBig">
				<li><img src="images/logobig.png" /></li>
			</div>

			<div class="search-bar pr">
				<a name="index_none_header_sysc" href="#"></a>
				<form action="search.html">
					<input id="searchInput" name="index_none_header_sysc" type="text"
						placeholder="搜索" autocomplete="off"> <input
						id="ai-topsearch" class="submit am-btn" value="搜索" index="1"
						type="submit">
				</form>
			</div>
		</div>

		<div class="clear"></div>
	</div>
	<div class="banner">
		<!--轮播 -->
		<div class="am-slider am-slider-default scoll" data-am-flexslider
			id="demo-slider-0">
			<ul class="am-slides">
				<c:set var="bannerCount" value="0"></c:set>
				<c:forEach var="notice" items="${notices }">
					<c:if test="${bannerCount==4 }">
						<c:set var="bannerCount" value="0"></c:set>
					</c:if>
					<c:set var="bannerCount" value="${bannerCount+1 }"></c:set>
					<li class="banner${bannerCount }"><a><img
							src="images/${notice.noticePhoto } " /></a></li>
				</c:forEach>

			</ul>
		</div>
		<div class="clear"></div>
	</div>

	<div class="shopNav">
		<div class="slideall">

			<div class="long-title">
				
					<span class="all-goods">食品饮料分类</span>
					<script type="text/javascript">
					
					
			$(".long-title").mouseenter(function(){
			
				$("#nav").show();
			});
			$("#nav").mouseout(function(){
				$("#nav").hiden();
			});
			
		
		
			
		 	
			
			
			
			
			</script>
				</div>
				<div class="nav-cont">
					<ul>
						<li class="index"><a href="#">首页</a></li>
						<li class="qc"><a href="#">闪购</a></li>
						<li class="qc"><a href="#">限时抢</a></li>
						<li class="qc"><a href="#">团购</a></li>
						<li class="qc last"><a href="#">大包装</a></li>
					</ul>
					<div class="nav-extra">
						<i class="am-icon-user-secret am-icon-md nav-user"></i><b></b>全部分类
						<i class="am-icon-angle-right" style="padding-left: 10px;"></i>
					</div>
				</div>


				<!--左侧边导航 -->
				<div id="nav" class="navfull" style="display: none;">
					<div class="area clearfix">
						<div class="category-content" id="guide_2">

							<div class="category">
								<ul class="category-list" id="js_climit_li">



									<c:forEach var="maincassify" items="${maincassifys }">
										<li class="appliance js_toggle relative">
											<div class="category-info">
												<h2 class="category-name b-category-name">
													<i></i><a class="ml-22" title="${maincassify.mcname }">${maincassify.mcname }</a>
												</h2>
												<em>&gt;</em>
											</div>
											<div class="menu-item menu-in top">
												<div class="area-in">
													<div class="area-bg">
														<div class="menu-srot">
															<div class="sort-side">
																<c:forEach var="cassify"
																	items="${maincassify.classify }">
																	<dl class="dl-sort">


																		<c:if test="${cassify.goods!='[]' }">
																			<dt>
																				<span title="${cassify.cname }">${cassify.cname }</span>
																			</dt>
																			<dd>
																				<c:forEach var="goodclass" items="${cassify.goods }">
																					<a title="${goodclass.goodsName }" href="#"><span>${goodclass.goodsName }</span></a>



																				</c:forEach>
																			</dd>

																		</c:if>


																	</dl>
																</c:forEach>
															</div>

														</div>
													</div>
												</div>
											</div> <b class="arrow"></b>
										</li>

									</c:forEach>


								</ul>
							</div>
						</div>

					</div>
				</div>

				<!--轮播 -->
				<script type="text/javascript">
				(function() {
					$('.am-slider').flexslider();
				});
				$(document)
						.ready(
								function() {
									$("li")
											.hover(
													function() {
														$(
																".category-content .category-list li.first .menu-in")
																.css("display",
																		"none");
														$(
																".category-content .category-list li.first")
																.removeClass(
																		"hover");
														$(this).addClass(
																"hover");
														$(this)
																.children(
																		"div.menu-in")
																.css("display",
																		"block")
													},
													function() {
														$(this).removeClass(
																"hover")
														$(this).children(
																"div.menu-in")
																.css("display",
																		"none")
													});
								})
			</script>




				<!--走马灯 -->

				<div class="marqueen">
					<span class="marqueen-title">商城头条</span>
					<div class="demo">

						<ul>
							<li class="title-first"><a target="_blank" href="#"> <img
									src="images/TJ2.jpg"></img> <span>[特惠]</span>商城爆品1分秒
							</a></li>
							<li class="title-first"><a target="_blank" href="#"> <span>[公告]</span>商城与广州市签署战略合作协议
									<img src="images/TJ.jpg"></img>
									<p>XXXXXXXXXXXXXXXXXX</p>
							</a></li>

							<div class="mod-vip">
								<c:if test="${user.userName!=null }">
									<div class="m-baseinfo">
										<a href="person/PersonIndex.jsp"> <c:if
												test="${user.userImage==null }">
												<img src="images/getAvatar.do.jpg" />
											</c:if> <c:if test="${user.userImage!=null }">
												<img src="images/${user.userImage }" />
											</c:if>
										</a> <em> Hi,<span class="s-name">${user.name }</span>
										</em>
									</div>
								</c:if>
								<c:if test="${user==null }">
									<div class="member-logout">
										<a class="am-btn-warning btn" href="login.jsp">登录</a>
									</div>
									<br />
									<div class="member-logout">
										<a class="am-btn-warning btn" href="register.jsp">注册</a>
									</div>
								</c:if>
								<div class="member-login">
									<a href="#"><strong>0</strong>待收货</a> <a href="#"><strong>0</strong>待发货</a>
									<a href="#"><strong>0</strong>待付款</a> <a href="#"><strong>0</strong>待评价</a>
								</div>
								<div class="clear"></div>
							</div>

							<li><a target="_blank" href="#"><span>[特惠]</span>洋河年末大促，低至两件五折</a></li>
							<li><a target="_blank" href="#"><span>[公告]</span>华北、华中部分地区配送延迟</a></li>
							<li><a target="_blank" href="#"><span>[特惠]</span>家电狂欢千亿礼券
									买1送1！</a></li>

						</ul>
						<div class="advTip">
							<img src="images/advTip.jpg" />
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
			<script type="text/javascript">
			if ($(window).width() < 640) {
				function autoScroll(obj) {
					$(obj).find("ul").animate({
						marginTop : "-39px"
					}, 500, function() {
						$(this).css({
							marginTop : "0px"
						}).find("li:first").appendTo(this);
					})
				}
				$(function() {
					setInterval('autoScroll(".demo")', 3000);
				})
			}
		</script>
		</div>
		<div class="shopMainbg">
			<div class="shopMain" id="shopmain">

				<!--火热推荐 -->

				<div class="am-g am-g-fixed recommendation">
					<div class="clock am-u-sm-3"">
						<img src="images/2016.png "></img>
						<p>
							新品<br>热卖
						</p>
					</div>
					<c:forEach var="good" items="${goods }">

						<div class="am-u-sm-4 am-u-lg-3 ">
							<div class="info ">
								<h3>${good.goodsName }</h3>
								<h4>${good.goodsDescribe }</h4>
							</div>
							<div class="recommendationMain one">
								<img src="images/${good.goodsPhoto } "></img>
							</div>
						</div>

					</c:forEach>

				</div>

			</div>
			<div class="clear "></div>


			<!-- for 类+商品 -->

			<c:forEach var="cassify" items="${cassifys }">

				<c:if test="${cassify.goods!='[]' }">

					<div class="am-container ">
						<div class="shopTitle ">
							<h4>${cassify.cname }</h4>
							<h3>你是我的优乐美么？不，我是你小鱼干</h3>

							<span class="more "> <a class="more-link " href="# ">更多美味</a>
							</span>
						</div>
					</div>
					<div class="am-g am-g-fixed flood method3 ">
						<ul class="am-thumbnails ">

							<c:forEach var="goodclass" items="${cassify.goods }">

								<li>
									<div class="list ">
										<a href="# "> <img src="images/${goodclass.goodsPhoto }" />
											<div class="pro-title ">${goodclass.goodsName }</div> <span
											class="e-price ">￥${goodclass.goodsPrice }</span>
										</a>
									</div>

								</li>
							</c:forEach>



						</ul>

					</div>
				</c:if>
			</c:forEach>



			<div class="clear "></div>
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




	<script>
		window.jQuery
				|| document
						.write('<script src="basic/js/jquery.min.js "><\/script>');
	</script>
	<script type="text/javascript " src="basic/js/quick_links.js "></script>
</body>
</html>
