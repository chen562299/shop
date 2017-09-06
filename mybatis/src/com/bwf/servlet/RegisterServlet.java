package com.bwf.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bwf.bean.User;
import com.bwf.service.UserServiceImpl;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
  //用户注册
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		String name=request.getParameter("name");
		String userNameAjax=request.getParameter("userNameAjax");
	    String userName=request.getParameter("userName");
		String password=request.getParameter("password");
		String confirmPassword=request.getParameter("confirmPassword");
		
		
		//用户注册
	    if(userNameAjax!=null) {
	    	//验证用户名是否重复
	    	User user=new User();
	    	user.setUserName(userNameAjax);
	    	int count=new UserServiceImpl().selectByUserName(user);
	    	if(count>=1) {
	    		response.getWriter().write("yes");
	    		
	    	}else {
	    		response.getWriter().write("no");
	    	}
	    	
	    	
		      
	    }else {
	    	
	    	 User user=new User();
		       user.setName(name);
			   user.setUserName(userName);
		       user.setUserPsw(password);
			   boolean bool=new UserServiceImpl().register(user); 
		       if(bool) {
			        response.sendRedirect("chenggong.html");
		       }
	    	  
	    }	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
