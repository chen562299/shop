package com.bwf.servlet;



import java.util.List;



import com.bwf.bean.Oder;
import com.bwf.bean.User;
import com.bwf.service.UserService;
import com.bwf.service.UserServiceImpl;


public class Test {
	public static void main(String[] args) {
		UserService userser=new UserServiceImpl();
		
		 User user=userser.selectUser();
	}
}
