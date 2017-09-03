package com.bwf.service;

import java.util.List;

import com.bwf.bean.Oder;
import com.bwf.bean.User;



public interface UserService {
	
	public List<User> getUserAll();
	
	public User getUserById(int id);

	public boolean getAddUser(User adduser);

	public List<Oder> getSelectUserOder();
}
