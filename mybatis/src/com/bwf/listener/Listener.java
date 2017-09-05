package com.bwf.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.bwf.util.MybatisUtil;

/**
 * Application Lifecycle Listener implementation class Listener
 *
 */
@WebListener
public class Listener implements ServletContextListener {

   
    public void contextDestroyed(ServletContextEvent arg0)  { 
         // TODO Auto-generated method stub
    }


    //做一些初始化的内容添加工作、设置一些基本的内容、比如一些参数或者是一些固定的对象等等
    public void contextInitialized(ServletContextEvent arg0)  { 
         //创建工厂
    	MybatisUtil.getFactory();
    	
    	
    }
	
}
