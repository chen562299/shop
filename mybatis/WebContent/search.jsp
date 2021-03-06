<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<title>搜索页面</title>

<link href="assets/css/amazeui.css" rel="stylesheet" type="text/css" />
<link href="assets/css/admin.css" rel="stylesheet" type="text/css" />

<link href="basic/css/demo.css" rel="stylesheet" type="text/css" />

<link href="css/seastyle.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="basic/js/jquery-1.7.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</head>

<body>

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
					<a href="person/index.html" target="_top"><i
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
					<a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a>
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
	<b class="line"></b>
	<div class="search">
		<div class="search-list">
			<div class="nav-table">
				<div class="long-title">
					<span class="all-goods">全部分类</span>
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
			</div>


			<div class="am-g am-g-fixed">
				<div class="am-u-sm-12 am-u-md-12">
					<div class="theme-popover">
						<div class="searchAbout">
							
						</div>
						<ul class="select">
							
							<div class="clear"></div>
							<li class="select-result">
								<dl>
									<dt>已选</dt>
									<dd class="select-no"></dd>
									<p class="eliminateCriteria">清除</p>
								</dl>
							</li>
							<div class="clear"></div>
						
							<li class="select-list">
								<dl id="select2">
									<dt class="am-badge am-round">分类</dt>
									<div class="dd-conent">
										<dd class="select-all selected">
											<a href="#">全部</a>
										</dd>
										
										<c:forEach var="cassify" items="${cassifys }">
										<dd>
											<a href="#">${cassify.cname }</a>
										</dd>
										
										</c:forEach>
									
									</div>
								</dl>
							</li>
							<li class="select-list">
								<dl id="select3">
									<dt class="am-badge am-round">选购热点</dt>
									<div class="dd-conent">
										
										<dd>
											<a href="#">是</a>
										</dd>
										<dd>
											<a href="#">否</a>
										</dd>
									</div>
								</dl>
							</li>

						</ul>
						<div class="clear"></div>
					</div>
					<div class="search-content">
						<div class="sort">
							<li class="first"><a title="综合">综合排序</a></li>
							<li><a title="销量">销量排序</a></li>
							<li><a title="价格">价格优先</a></li>
							<li class="big"><a title="评价" href="#">评价为主</a></li>
						</div>
						<div class="clear"></div>

						<ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 boxes">
							<li>
								<div class="i-pic limit">
									<img src="images/imgsearch1.jpg" />
									<p class="title fl">【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							<li>
								<div class="i-pic limit">

									<img src="images/imgsearch1.jpg" />
									<p class="title fl">【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮</p>
									<p class="price fl">
										<b>¥</b> <strong>56.90</strong>
									</p>
									<p class="number fl">
										销量<span>1110</span>
									</p>
								</div>
							</li>
							
						
						</ul>
					</div>
					
					
					<div class="search-side">

						
						<!-- 右边经典搭配 -->
						
						<div class="side-title">经典搭配</div>

						<li>
							<div class="i-pic check">
								<img src="images/cp.jpg" />
								<p class="check-title">萨拉米 1+1小鸡腿</p>
								<p class="price fl">
									<b>¥</b> <strong>29.90</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic check">
								<img src="images/cp2.jpg" />
								<p class="check-title">ZEK 原味海苔</p>
								<p class="price fl">
									<b>¥</b> <strong>8.90</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						

					</div>
					
					<div class="clear"></div>
					
					
					<!--分页 -->
					<ul class="am-pagination am-pagination-right">
						
						<li class="am-active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
					
					</ul>

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

		<script>
			window.jQuery || document.write('<script src="basic/js/jquery-1.9.min.js"><\/script>');
		</script>
		<script type="text/javascript" src="basic/js/quick_links.js"></script>

		<div class="theme-popover-mask"></div>
</body>

</html>