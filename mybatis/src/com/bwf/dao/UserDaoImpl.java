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
	
	//登录
		@Override
		public User selectUserByNameandPsw(User user) {

			
			user = userp.selectUserByNameandPsw(user);
			
			return user;
			
		}
		//修改密码
		@Override
		public int ChangePassword(User user ) {

			
			int result= userp.ChangePassword(user);
			
			sqls.commit();
			
			return result;
		}
		//修改session
		@Override
		public void updateSession(User user) {
			userp.updateSession(user);
			sqls.commit();
		}
		//修改会员信息
		@Override
		public int upDateUser(User user) {
			userp.upDateUser(user);
			sqls.commit();
			return 0;
		}
		//注册会员
		@Override
		public int register(User user) {
			int x=userp.register(user);
			sqls.commit();
			return x;
		}
		//查询会员帐号
		@Override
		public int selectByUserName(User user) {
			int x=userp.selectByUserName(user);
			return x;
		}

}
