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
			
//			List<User> users =userService.getUserAll();
//			 
//			System.out.println(users.size());
//		
		//	User user=userService.getUserById(2);
			///System.out.println(user.toString());
		
			List<Oder> oders= userService.getSelectUserOder();
			
			for(Oder oder:oders){
				System.out.println(oder.toString());
				
			}
//			User adduser=new User();
//			adduser.setUserName("222");
//			adduser.setUserPsw("张");
//			System.out.println(adduser.toString());
//			if(userService.getAddUser(adduser)){
//				System.out.println("添加成功");
//			}else{
//				System.out.println("添加失败");
//			};
			
			
			
			
			

		
			
			//sqls.close();
			//List<User> users= MybatisUtil.getOpenSession().selectList("my.getUserSize");
			//System.out.println(users.size());
			
			//User user= (User)sqs.selectOne("my.getUserName",1);
			//System.out.println(user.getUserName());
			
			//sqls.close();
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

	
			
			
			
		}
	}
}
