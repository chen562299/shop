<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
       <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

		<title>个人资料</title>

		<link href="css/personal.css" rel="stylesheet" type="text/css">
		<link href="css/infstyle.css" rel="stylesheet" type="text/css">
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script src="assets/js/amazeui.js" type="text/javascript"></script>
		<script>
		  
		   
		</script>
</head>
<body>
     
           
			<b class="line"></b>
		<div class="center" style="position: relative; left: -170px;">
			<div class="col-main">
				<div class="main-wrap">

					<div class="user-info">
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">信息修改</strong> / <small>Personal&nbsp;information&nbsp;modification</small></div>
						</div>
						<hr/>

						<!--头像 -->
						<div class="user-infoPic">
			<div class="u-level">
									<span class="rank r2">
							             <s class="vip1"></s><a class="classes"  style="position: relative; top:20px; 
							             ">头像</a>
						            </span>
								</div>
							

							<p class="am-form-help">头像</p>

								<div class="filePic">
								<input type="file" class="inputPic" allowexts="gif,jpeg,jpg,png,bmp" accept="image/*">
								<img class="am-circle am-img-thumbnail" src="../images/getAvatar.do.jpg" alt="" />
							</div>
							<div class="info-m">
							
					
								
							</div>
						</div>

						<!--个人信息 -->
						
							<form class="am-form am-form-horizontal" action="informationServlet" method="post">

								

								<div class="am-form-group">
									<label for="user-name" class="am-form-label">姓名</label>
									<div class="am-form-content">
										<input type="text"   id="user-name2" placeholder="name" name="trueName">

									</div>
								</div>

								<div class="am-form-group" >
									<label class="am-form-label">性别</label>
									<div class="am-form-content sex">
										<label class="am-radio-inline">
											<input type="radio" name="sex" value="male" data-am-ucheck> 男
										</label>
										<label class="am-radio-inline">
											<input type="radio" name="sex" value="female" data-am-ucheck> 女
										</label>
										<label class="am-radio-inline">
											<input type="radio" name="sex" value="secret" data-am-ucheck> 保密
										</label>
									</div>
								</div>

								<div class="am-form-group">
									<label for="user-birth" class="am-form-label">生日</label>
									<div class="am-form-content birth">
										<div class="birth-select">
											<input type="date" name="birthDay" >
										</div>
										
										
									</div>
							
								</div>
								<div class="am-form-group">
									<label for="user-phone" class="am-form-label" >电话</label>
									<div class="am-form-content">
										<input id="user-phone" placeholder="telephonenumber" type="tel" name="telephone">

									</div>
								</div>
								<div class="am-form-group">
									<label for="user-email" class="am-form-label" >电子邮件</label>
									<div class="am-form-content">
										<input id="user-email" placeholder="Email" type="email" name="email">

									</div>
								</div>
								
							
								<div class="info-btn">
									<div class="am-btn am-btn-danger"> <button type="submit">保存修改</button></div>
								</div>

							</form>
						

					</div>

				</div>
			</div>
			</div>

		

</body>
</html>