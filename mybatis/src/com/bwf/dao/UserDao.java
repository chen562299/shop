package com.bwf.dao;

import java.util.List;

import com.bwf.bean.Oder;
import com.bwf.bean.User;

public interface UserDao {
	
	public List<User> selectUser();
	//登录账号
	public User selectUserByNameandPsw(User user);
	//修改密码
	public int ChangePassword(User user);
	//修改session
	public void updateSession(User user);
	//修改信息
	public int upDateUser(User user);
	
	//注册会员
	public int register(User user);
	
	//查询用户
	public int selectByUserName(User user);
}
