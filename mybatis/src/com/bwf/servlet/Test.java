package com.bwf.servlet;



import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.bwf.bean.Oder;
import com.bwf.bean.User;
import com.bwf.mapper.UserMapper;
import com.bwf.service.UserService;
import com.bwf.service.UserServiceImpl;
import com.bwf.util.MybatisUtil;

public class Test {
	public static void main(String[] args) {
		try {


			UserService userService=new UserServiceImpl();

			List<Oder> oders= userService.getSelectUserOder();
			
			for(Oder oder:oders){
				System.out.println(oder.toString());
				
			}

	
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

	
			
			
			
		}
	}
}
