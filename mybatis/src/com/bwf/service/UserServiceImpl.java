package com.bwf.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.bwf.bean.Oder;
import com.bwf.bean.User;
import com.bwf.dao.UserDao;
import com.bwf.dao.UserDaoImpl;
import com.bwf.mapper.UserMapper;
import com.bwf.util.MybatisUtil;

public class UserServiceImpl implements UserService {
     UserDao dao= new UserDaoImpl();
	
	@Override
	public List<User> selectUser() {
		
		return dao.selectUser();
	}
	
	//登录账号	
	@Override
	public User login(User user) {
			 
		return dao.selectUserByNameandPsw(user);
	}
		
	//修改密码
	@Override
	public boolean ChangePassword(User user) {
		if(dao.ChangePassword(user)>0){
			return true;
		}
		return false;
	}
	//修改session
	@Override
	public void updateSession(User user) {
		dao.updateSession(user);
		
	}
		//修改会员信息
	public int upDateUser(User user) {
		
		return dao. upDateUser(user);
	}
		//注册
	public boolean register(User user) {
		if(dao.register(user)>0){
			return true;
		}
		return false;
	}

	public int selectByUserName(User user) {
		  int x=dao.selectByUserName(user);
		return x;
	}

}
