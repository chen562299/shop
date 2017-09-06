package com.bwf.bean;

public class Goods {
	private int goodsId;
	private String goodsName;
	private String goodsPrice;
	private String goodsPhoto;	
	private String	goodsDescribe;
	private String	isHot;
	private String	isOut;
	private String  cid;
	private Classify classify;
	
	
	
	
	@Override
	public String toString() {
		return "Goods [goodsId=" + goodsId + ", goodsName=" + goodsName + ", goodsPrice=" + goodsPrice + ", goodsPhoto="
				+ goodsPhoto + ", goodsDescribe=" + goodsDescribe + ", isHot=" + isHot + ", isOut=" + isOut + ", cid="
				+ cid + ", classify=" + classify.getCname() + "]";
	}
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	public Classify getClassify() {
		return classify;
	}
	public void setClassify(Classify classify) {
		this.classify = classify;
	}
	public int getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(int goodsId) {
		this.goodsId = goodsId;
	}
	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public String getGoodsPrice() {
		return goodsPrice;
	}
	public void setGoodsPrice(String goodsPrice) {
		this.goodsPrice = goodsPrice;
	}
	public String getGoodsPhoto() {
		return goodsPhoto;
	}
	public void setGoodsPhoto(String goodsPhoto) {
		this.goodsPhoto = goodsPhoto;
	}
	public String getGoodsDescribe() {
		return goodsDescribe;
	}
	public void setGoodsDescribe(String goodsDescribe) {
		this.goodsDescribe = goodsDescribe;
	}
	public String getIsHot() {
		return isHot;
	}
	public void setIsHot(String isHot) {
		this.isHot = isHot;
	}
	public String getIsOut() {
		return isOut;
	}
	public void setIsOut(String isOut) {
		this.isOut = isOut;
	}

	
}
