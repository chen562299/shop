package com.bwf.bean;

public class Oder {
	private	int oderId;
	private String oderTime;
	private User user;
	
	

	
	@Override
	public String toString() {
		return "Oder [oderId=" + oderId + ", oderTime=" + oderTime   + ", userId=" + user.getUserId() 
		+ ", userName=" + user.getUserName()+ "]";
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public int getOderId() {
		return oderId;
	}
	public void setOderId(int oderId) {
		this.oderId = oderId;
	}
	public String getOderTime() {
		return oderTime;
	}
	public void setOderTime(String oderTime) {
		this.oderTime = oderTime;
	}

}
