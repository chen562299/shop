package com.bwf.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
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
	public List<Classify> selectClassify() {
		
		return userp.selectClassify();
	}
	@Override
	public List<Goods> selectGoods() {
		
		return userp.selectGoods();
	}
	@Override
	public List<Goods> selectGoodsGaodian() {
		
		return userp.selectGoodsGaodian();
	}

}
