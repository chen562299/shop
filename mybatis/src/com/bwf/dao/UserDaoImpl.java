package com.bwf.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.bwf.bean.User;
import com.bwf.mapper.UserMapper;
import com.bwf.util.MybatisUtil;

public class UserDaoImpl implements UserDao {
	
	SqlSession  sqls =MybatisUtil.getFactory().openSession();
	
	UserMapper userMapper= sqls.getMapper(UserMapper.class);
	
	
	@Override
	public List<User> getUserAll() {
		
		return userMapper.getUserAll();
	}

	@Override
	public User getUserById(int id) {
		
		return userMapper.getUserById(id);
	}

	@Override
	public int getAddUser(User adduser) {
		
		return userMapper.getAddUser(adduser);
	}

}
