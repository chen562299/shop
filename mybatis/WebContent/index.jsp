<%@page import="com.bwf.bean.User"%>
<%@page import="java.util.List"%>
<%@page import="com.bwf.service.UserServiceImpl"%>
<%@page import="com.bwf.mapper.UserMapper"%>
<%@page import="com.bwf.service.UserService"%>
<%@page import="com.bwf.util.MybatisUtil"%>
<%@page import="org.apache.ibatis.session.SqlSession"%>
<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="css/pintuer.css">
<link rel="stylesheet" href="css/admin.css">
<script src="js/jquery.js"></script>
<script src="js/pintuer.js"></script>
</head>
<body>
<%
SqlSession sqls=MybatisUtil.getFactory().openSession();
UserMapper userMapper= sqls.getMapper(UserMapper.class);

UserService userService=new UserServiceImpl();
List<User> users =userService.getUserAll();
 session =request.getSession();
session.setAttribute("users",users); %>


<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 用户列表</strong></div>
 
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">ID</th>
      <th width="15%">用户名称</th>
      <th width="10%">操作</th>
    </tr>
   <c:forEach var="user" items="${users }">
    <tr>
      <td>${user.userName }</td>
      <td>${user.userPsw }</td>
      <td><div class="button-group"> <a class="button border-main" href="showUser.jsp"><span class="icon-edit"></span> 查看详情</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,2)"><span class="icon-trash-o"></span> 删除</a> </div></td>
    </tr>
   </c:forEach>
  </table>
</div>
<script type="text/javascript">
function del(id,mid){
	if(confirm("您确定要删除吗?")){			
		
	}
}
</script>

</body>
</html>