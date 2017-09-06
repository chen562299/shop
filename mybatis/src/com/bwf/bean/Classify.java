package com.bwf.bean;

public class Classify{
	private String cid;
	private String cname;
	
	
	
	public Classify(String cid, String cname) {
		super();
		this.cid = cid;
		this.cname = cname;
	}


	public Classify() {	}
	

	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

}
