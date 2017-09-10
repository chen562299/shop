package com.bwf.bean;
import java.util.List;

import com.bwf.bean.Classify;

public class MainClassify {

	private int mcid;
	private String mcname;
	
	private List<Classify> classify;
	
	
	
	
	

	@Override
	public String toString() {
		return "MainClassify [mcid=" + mcid + ", mcname=" + mcname + ", classify=" + classify + "]";
	}
	public List<Classify> getClassify() {
		return classify;
	}
	public void setClassify(List<Classify> classify) {
		this.classify = classify;
	}
	public int getMcid() {
		return mcid;
	}
	public void setMcid(int mcid) {
		this.mcid = mcid;
	}
	public String getMcname() {
		return mcname;
	}
	public void setMcname(String mcname) {
		this.mcname = mcname;
	}
	
}
