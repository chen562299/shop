package com.bwf.bean;

public class User {
	
	private String userName;
	
	private String userPsw;
   
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPsw() {
		return userPsw;
	}

	public void setUserPsw(String userPsw) {
		this.userPsw = userPsw;
	}

	@Override
	public String toString() {
		return "User [userName=" + userName + ", userPsw=" + userPsw + "]";
	}


	

}
