package com.bwf.mapper;
import java.util.List;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.MainClassify;
import com.bwf.bean.Notice;
import com.bwf.bean.User;

public interface UserMapper {
	//查找用户
	public List<User> selectUser();
	//查看滚动图标
	public List<Notice> selectNotices();
	//查看分类10个
	public List<Classify> selectClassify(int mcid);
	//查看最后3个 新品/热卖 
	public List<Goods> selectGoods();

	//登录账号
	public User selectUserByNameandPsw(User user);
	//修改密码
	public int ChangePassword(User user);
	//修改session
	public void updateSession(User user);

	public int register(User user);//用户注册
	public int selectByUserName(User user);//验证用户名是否重复
	public int upDateUser(User user);//保存用户基本信息
	
	//根据类名查商品
	public List<Goods> selectCGoods(String cid);
	//查询主要分类
	public List<MainClassify> selectMainClassify();
	public List<Classify> selectClassify1();
	
}
