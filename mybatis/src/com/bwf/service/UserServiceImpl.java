package com.bwf.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.bwf.bean.User;
import com.bwf.mapper.UserMapper;
import com.bwf.util.MybatisUtil;

public class UserServiceImpl implements UserService {
	SqlSession  sqls =MybatisUtil.getFactory().openSession();
	
	UserMapper userMapper= sqls.getMapper(UserMapper.class);
	

	
	
	@Override
	public List<User> getUserAll() {
		
		return   userMapper.getUserAll();
		
	}
	
	@Override
	public User getUserById(int id){

		return userMapper.getUserById(id);
	}

	@Override
	public boolean getAddUser(User adduser) {
		if(userMapper.getAddUser(adduser)>0){
			sqls.commit();
			return true;}
		return false;
	}
	

}
