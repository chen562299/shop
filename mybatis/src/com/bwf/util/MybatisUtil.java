package com.bwf.util;

import java.io.IOException;
import java.io.InputStream;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class MybatisUtil {
	
	private static SqlSessionFactory factory;
	
	public static SqlSessionFactory  getFactory(){
		if(factory==null){
			try {
				InputStream in= Resources.getResourceAsStream("mybatis.xml");
				
				factory =new SqlSessionFactoryBuilder().build(in);
				
			} catch (IOException e) {
				
				e.printStackTrace();
			}
			
		}
		return factory;
	}
	
	 public static SqlSession getOpenSession(){   
	       return getFactory().openSession();   
	    }
	
}
