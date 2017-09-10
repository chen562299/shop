package com.bwf.bean;

import java.util.List;

import com.bwf.service.OtherService;
import com.bwf.service.OtherServiceImpl;

public class Classify{
	private String cid;
	private String cname;
	private List<Goods> goods;
	private String  mcid;


	

	@Override
	public String toString() {
		return "Classify [cid=" + cid + ", cname=" + cname + ", goods=" + goods + ", mcid=" + mcid + "]";
	}





	public String getMcid() {
		return mcid;
	}





	public void setMcid(String mcid) {
		this.mcid = mcid;
	}









	public List<Goods> getGoods() {
		return goods;
	}





	public void setGoods(List<Goods> goods) {
		this.goods = goods;
	}





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
