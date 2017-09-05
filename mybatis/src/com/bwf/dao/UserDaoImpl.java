package com.bwf.dao;


import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.bwf.bean.User;
import com.bwf.mapper.UserMapper;
import com.bwf.util.MybatisUtil;


public class UserDaoImpl implements UserDao {
	
	SqlSession sqls= MybatisUtil.getFactory().openSession();
	UserMapper userp= sqls.getMapper(UserMapper.class);
	
	@Override
	public List<User> selectUser() {
		
		return userp.selectUser();
	}
	


}
