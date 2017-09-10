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
		<div class="center" >
			<div class="col-main">
				<div class="main-wrap">

					<div class="user-info">
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">个人信息</strong> / <small>Personal&nbsp;information</small></div>
						</div>
						<hr/>
			
						<!--头像 -->
						<div class="user-infoPic">
							<div class="filePic">
							<p class="am-form-help">头像</p>
								<img class="am-circle am-img-thumbnail" src="../images/${user.userImage }" alt="" />
							</div>

						

						</div>

						<!--个人信息 -->
						
								

								<div class="am-form-group">
									<label for="user-name" class="am-form-label" >姓名:${user.name }</label>
									
								</div>

								<div class="am-form-group">
									<label class="am-form-label">性别:
								<c:if test="${user.sex=='male' }">男</c:if>
								<c:if test="${user.sex=='female' }">女</c:if>
								<c:if test="${user.sex=='secret' }">保密</c:if>
										</label>
									
									</div>
								</div>

								<div class="am-form-group">
									<label for="user-birth" class="am-form-label">生日:
									${user.birthday }</label>
						
							
								</div>
								<div class="am-form-group">
									<label for="user-phone" class="am-form-label">电话:${user.telephone }</label>
								</div>
								<div class="am-form-group">
									<label for="user-email" class="am-form-label">电子邮件:${user.email }</label>
								
								</div>
				

							
						

					</div>

				</div>
			</div>
			</div>

		

</body>
</html>