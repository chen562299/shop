package com.bwf.dao;

import java.util.List;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.MainClassify;
import com.bwf.bean.Notice;

public interface OtherDao {
	public List<Notice> selectNotices();

	public List<Classify> selectClassify(int mcid);

	public List<Goods> selectGoods();



	public List<Goods> selectCGoods(String cid);

	public List<MainClassify> selectMainClassify();

	public List<Classify> selectClassify1();
}
