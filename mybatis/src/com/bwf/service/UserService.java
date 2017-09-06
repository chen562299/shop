package com.bwf.service;

import java.util.List;

import com.bwf.bean.Oder;
import com.bwf.bean.User;



public interface UserService {

	public List<User> selectUser();
	//登录账号	
	public User login(User user);
			
	//修改密码
	public boolean ChangePassword(User user);
	
	//修改session
	public void updateSession(User user);

}
