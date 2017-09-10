package com.bwf.filter;

import java.io.IOException;
import java.util.List;

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

import com.bwf.bean.Notice;
import com.bwf.bean.User;
import com.bwf.service.OtherService;
import com.bwf.service.OtherServiceImpl;
import com.bwf.service.UserService;
import com.bwf.service.UserServiceImpl;
import com.sun.net.httpserver.Filter.Chain;

@WebFilter(urlPatterns={"/person/*"})
public class LoginFilter implements Filter {

    /**
     * Default constructor. 
     */
    public LoginFilter() {
        // TODO Auto-generated constructor stub
    }

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
		
		//路径获取
		String path = req.getContextPath();
		String URL = req.getRequestURL().toString();
 
		
		//获取请求的url地址
		//System.out.println(req.getRequestURL());
		
			//判断是否需要安全过滤
		if(req.getRequestURL().toString().contains("login.jsp") 
				||req.getRequestURL().toString().contains("introduction.jsp")
				||req.getRequestURL().toString().contains("index.jsp")
				|| req.getRequestURL().toString().contains("bookcenter")
				||req.getRequestURL().toString().contains("register.jsp")
				){
			//将请求转发到目的地  
			chain.doFilter(request, response);
		}else {
			HttpSession session = req.getSession();
			User user = (User) session.getAttribute("user");
			
			// 判断是否登录账户
			if (session.getAttribute("user") != null) {
				
				String id = session.getId();
				
				//是否其他地方登陆
				if (user.getSession().equals(id)) {
				
					//判断成功
	
					chain.doFilter(request, response);
				} else {
					session.removeAttribute("user");
					res.sendRedirect(path + "/" + "login.jsp");
				}
			} else {
				session.removeAttribute("user");
				res.sendRedirect(path + "/" + "login.jsp");
			}
		}

	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
