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

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.MainClassify;
import com.bwf.bean.Notice;
import com.bwf.service.OtherService;
import com.bwf.service.OtherServiceImpl;

/**
 * Servlet Filter implementation class NoticeListener
 */
@WebFilter("/index.jsp")
public class NoticeListener implements Filter {

    /**
     * Default constructor. 
     */
    public NoticeListener() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse res = (HttpServletResponse)response;
		
		OtherService others=new OtherServiceImpl();
		HttpSession session = req.getSession();
		
	
		//加载公告
		List<Notice> notices= others.selectNotices();
		session.setAttribute("notices", notices);
		//加载新品/热卖
		List<Goods> hotGoods=others.selectGoods();
		session.setAttribute("goods", hotGoods);

	
		
		//加载分类
		List<Classify> cassifys1=others.selectClassify1();
		for(Classify c:cassifys1){
			String cid=c.getCid();
			List<Goods> classgoods=others.selectCGoods(cid);
			c.setGoods(classgoods);
		}
		session.setAttribute("cassifys", cassifys1);
		
		
		//加载主要分类
		List<MainClassify> maincassifys=others.selectMainClassify();
		for(MainClassify m:maincassifys){
			int mcid=m.getMcid();
			//加载分类
			List<Classify> cassifys=others.selectClassify(mcid);
			for(Classify c:cassifys){
				String cid=c.getCid();
				List<Goods> classgoods=others.selectCGoods(cid);
				c.setGoods(classgoods);
			}
			m.setClassify(cassifys);
		}
		session.setAttribute("maincassifys", maincassifys);
		
		//过滤回放
		chain.doFilter(request, response);
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
