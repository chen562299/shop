package com.bwf.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.MainClassify;
import com.bwf.bean.Notice;
import com.bwf.mapper.UserMapper;
import com.bwf.util.MybatisUtil;

public class OtherDaoImpl implements OtherDao {
	SqlSession sqls= MybatisUtil.getFactory().openSession();
	UserMapper userp= sqls.getMapper(UserMapper.class);
	@Override
	public List<Notice> selectNotices() {
		
		return userp.selectNotices();
	}
	@Override
	public List<Classify> selectClassify(int mcid) {
		
		return userp.selectClassify(mcid);
	}
	@Override
	public List<Goods> selectGoods() {
		
		return userp.selectGoods();
	}

	@Override
	public List<Goods> selectCGoods(String cid) {
		
		return userp.selectCGoods(cid);
	}
	@Override
	public List<MainClassify> selectMainClassify() {
		
		return userp.selectMainClassify();
	}
	@Override
	public List<Classify> selectClassify1() {
		
		return userp.selectClassify1();
	}

}
