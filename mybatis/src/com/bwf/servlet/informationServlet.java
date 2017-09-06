package com.bwf.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bwf.bean.User;
import com.bwf.service.UserServiceImpl;

/**
 * Servlet implementation class information
 */
@WebServlet("/informationServlet")
public class informationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public informationServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    //保存用户基本信息
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		   
		   request.setCharacterEncoding("utf-8");
		   String telephone = request.getParameter("telephone");
		   String trueName= request.getParameter("trueName");
		   String sex= request.getParameter("sex");
		   String birthDay= request.getParameter("birthDay");
		   String email= request.getParameter("email");
		   HttpSession session=request.getSession();
		   User user=(User)session.getAttribute("user");
		 
		   if(""!=telephone){
		   user.setTelephone(telephone);
		   }
		   if(""!=trueName){
		   user.setName(trueName);}
		   
		   if(null!=sex){
		   user.setSex(sex);}
		   
		   if(birthDay!=""){
		   user.setBirthday(birthDay);}
		   
		   if(email!=""){
		   user.setEmail(email);}
		   
		   int number=new UserServiceImpl().upDateUser(user);
		   if(number>=1) {
			   System.out.print("修改成功");
		   }
		   response.sendRedirect("PersonIndex"); 
		   
		   
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
