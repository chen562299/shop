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
	


}
