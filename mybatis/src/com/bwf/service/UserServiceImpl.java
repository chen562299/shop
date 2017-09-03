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
	
	
	UserDao userDao=new UserDaoImpl();
	
	
	@Override
	public List<User> getUserAll() {
		
		return   userDao.getUserAll();
		
	}
	
	@Override
	public User getUserById(int id){

		return userDao.getUserById(id);
	}

	@Override
	public boolean getAddUser(User adduser) {
		if(userDao.getAddUser(adduser)>0){
			
			return true;
			}
		return false;
	}

	@Override
	public List<Oder> getSelectUserOder() {
		return userDao.getSelectUserOder();
		
	}
	

}
