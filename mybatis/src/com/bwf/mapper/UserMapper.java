package com.bwf.mapper;

import java.util.List;

import com.bwf.bean.User;

public interface UserMapper {
		
	public List<User> getUserAll();

	public User getUserById(int id);

	public int getAddUser(User adduser);

}
