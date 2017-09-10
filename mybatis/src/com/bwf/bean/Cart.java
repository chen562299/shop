package com.bwf.bean;

import java.util.ArrayList;

public class Cart {
	private ArrayList<Goods> goodsCart = new ArrayList<Goods>();
	private double price;
	public ArrayList<Goods> getGoodsCart() {
		return goodsCart;
	}
	public void setGoodsCart(ArrayList<Goods> goodsCart) {
		this.goodsCart = goodsCart;
	}
	public double getPrice(){
		double totalprice = 0;
		for(int i=0;i<goodsCart.size();i++){
			totalprice += Double.parseDouble(goodsCart.get(i).getGoodsPrice());
		}
		this.price = totalprice;
		return price;
	}
}
