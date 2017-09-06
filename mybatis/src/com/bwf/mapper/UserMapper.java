package com.bwf.mapper;
import java.util.List;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.Notice;
import com.bwf.bean.User;

public interface UserMapper {
		
	public List<User> selectUser();

	public List<Notice> selectNotices();

	public List<Classify> selectClassify();

	public List<Goods> selectGoods();

	public List<Goods> selectGoodsGaodian();
	//登录账号
	public User selectUserByNameandPsw(User user);
	//修改密码
	public int ChangePassword(User user);
	//修改session
	public void updateSession(User user);

	
	public int register(User user);//用户注册
	public int selectByUserName(User user);//验证用户名是否重复
	public int upDateUser(User user);//保存用户基本信息
	
}
