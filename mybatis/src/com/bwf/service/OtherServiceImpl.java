package com.bwf.service;

import java.util.List;

import com.bwf.bean.Notice;
import com.bwf.dao.OtherDao;
import com.bwf.dao.OtherDaoImpl;
import com.bwf.dao.UserDao;
import com.bwf.dao.UserDaoImpl;

public class OtherServiceImpl implements OtherService {
	OtherDao dao= new OtherDaoImpl();
	@Override
	public List<Notice> selectNotices() {
		
		return dao.selectNotices();
	}

}
