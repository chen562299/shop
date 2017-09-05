package com.bwf.mapper;
import java.util.List;

import com.bwf.bean.Notice;
import com.bwf.bean.User;

public interface UserMapper {
		
	public List<User> selectUser();

	public List<Notice> selectNotices();

}
