package com.bwf.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bwf.bean.User;
import com.bwf.service.UserService;
import com.bwf.service.UserServiceImpl;

/**
 * Servlet Filter implementation class UpDate
 */
@WebFilter(urlPatterns={"/person/*"})
public class PersonUpDate implements Filter {


	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// 强制类型转换   
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse res = (HttpServletResponse)response;
		
		UserService userService=new UserServiceImpl();
		HttpSession session = req.getSession();
		User user =(User) session.getAttribute("user");
		//每次数据的更新
		 user=userService.login(user);
		
		 String str=user.getTelephone();
			//电话号码隐藏
	      String x=str.substring(0,3)+"****"+str.substring(str.length()-4,str.length());
	      
	      user.setTelephone(x);
	      
	  
		 
		 
		session.setAttribute("user", user);
		
		
		
		chain.doFilter(request, response);
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
