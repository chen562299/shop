package com.bwf.dao;

import java.util.List;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.Notice;

public interface OtherDao {
	public List<Notice> selectNotices();

	public List<Classify> selectClassify();

	public List<Goods> selectGoods();

	public List<Goods> selectGoodsGaodian();
}
