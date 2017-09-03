package com.bwf.dao;

import java.util.List;

import com.bwf.bean.User;

public interface UserDao {
	
	public List<User> getUserAll();

	public User getUserById(int id);

	public int getAddUser(User adduser);
}
