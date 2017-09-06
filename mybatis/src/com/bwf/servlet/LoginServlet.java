package com.bwf.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bwf.bean.User;
import com.bwf.service.UserService;
import com.bwf.service.UserServiceImpl;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
       
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		//获取数据
		String userName = request.getParameter("userName");
		String userPsw = request.getParameter("userPsw");
		String gougou =request.getParameter("gougou");
		String code = request.getParameter("code");
		
		//获取session 获取输入的验证码
		HttpSession session =request.getSession();
		String yanzhengma = (String) session.getAttribute("yanzhengma");
		
		//判断输入获取的验证吗（即用户输入的）是否和 获取到的系统随机生成的验证码一致
		if(code.equalsIgnoreCase(yanzhengma)){
			//一致就通过
			
			UserService userService = new UserServiceImpl();
			User user =new User();
			user.setUserName(userName);
			user.setUserPsw(userPsw);
			
			 user=userService.login(user);
			
			//判断用户是否登录成功 如果不为null 则登录成功
			if(user !=null){
				//获取现在的sessionid
				String id=session.getId();
				//登录成功，修改session，以便验证最后一次登录
				user.setSession(id);
				userService.updateSession(user);
				
				session.setAttribute("user", user);
				
				if(null!=gougou){
					Cookie cookie =new Cookie("nameCookie", userName);
					
					cookie.setMaxAge(60*60*24);
					
					response.addCookie(cookie);
				}else {
					Cookie[] cookies=request.getCookies();
					if(cookies!=null){
						for(Cookie cookie:cookies){
							cookie.setMaxAge(0);
							response.addCookie(cookie);
						}
					}
					
					
				}
				
				response.sendRedirect("index.jsp");	
			}
			else{
				request.setAttribute("userError", "输入的账号或者密码错误,请重新输入");
				request.getRequestDispatcher("login.jsp").forward(request, response);				
			}	
		}
		else{
			//验证码不一样不通过(request 是一次请求)
			request.setAttribute("yanzhengmaError", "验证码输入错入，请重新输入");
			request.getRequestDispatcher("login.jsp").forward(request, response);
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
