package com.bwf.bean;

public class User {
	
	private String userName;
	
	private String userPsw;
   
	private int id;
	
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


	public String getClassId() {
		return classId;
	}


	public void setClassId(String classId) {
		this.classId = classId;
	}

	private String  classId;

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
		return "User [userName=" + userName + ", userPsw=" + userPsw + ", id=" + id + ", userImage=" + userImage
				+ ", session=" + session + ", classId=" + classId + "]";
	}




	

}
