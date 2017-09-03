package com.bwf.bean;

public class User extends Oder{

	private int userId;
	private String userName;
	private String userPsw;
	private String  userImage;
	private String session;
	


	public String getUserImage() {
		return userImage;
	}


	public void setUserImage(String userImage) {
		this.userImage = userImage;
	}


	public String getSession() {
		return session;
	}


	public void setSession(String session) {
		this.session = session;
	}

	public int getUserId() {
		return userId;
	}
	

	public void setUserId(int userId) {
		this.userId = userId;
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


	




	

}
