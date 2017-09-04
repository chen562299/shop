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

@WebFilter(urlPatterns={"*.jsp"})
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
		HttpServletResponse rep = (HttpServletResponse)response;
		
 
	
		//获取请求的url地址
		//System.out.println(req.getRequestURL());
		
			//判断是否需要安全过滤
		if(req.getRequestURL().toString().contains("login.jsp") ||req.getRequestURL().toString().contains("index.jsp")|| req.getRequestURL().toString().contains("bookcenter")){
			//将请求转发到目的地  
			chain.doFilter(request, response);
		}else{
			//判断是否存在用户
			if(req.getSession().getAttribute("user") == null){
				
				String path = req.getContextPath();
			
				rep.sendRedirect(path+"/login.jsp");
				
			}else{
				//将请求转发到目的地  
				chain.doFilter(request, response);
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
