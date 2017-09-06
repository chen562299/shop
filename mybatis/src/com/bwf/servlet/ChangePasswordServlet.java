package com.bwf.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bwf.bean.User;
import com.bwf.service.UserService;
import com.bwf.service.UserServiceImpl;

/**
 * Servlet implementation class ChangePasswordServlet
 */
@WebServlet("/ChangePasswordServlet")
public class ChangePasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangePasswordServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String pwd = request.getParameter("mpass");		
		String newpass = request.getParameter("newpass");		
		String renewpass =request.getParameter("renewpass");
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		UserService userService = new UserServiceImpl();
		
		if(!(user.getUserPsw().equals(pwd))){
			
			request.setAttribute("userError", "密码输入错误，请重新输入");
			
			request.getRequestDispatcher("password.jsp").forward(request, response);
		}
		else{
			if(newpass.equals(renewpass)){
				user.setUserPsw(renewpass);				
				if(userService.ChangePassword(user)){
					System.out.println("user.getUserPsw()"+ user.getUid());
					System.out.println(newpass);
					
					response.sendRedirect("chenggong.jsp");
					
				}
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
