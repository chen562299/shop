package com.bwf.servlet;



import java.util.List;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.service.OtherService;
import com.bwf.service.OtherServiceImpl;



public class Test {
	public static void main(String[] args) {
		OtherService others=new OtherServiceImpl();
		
		List<Classify> cassifys=others.selectClassify();
		
		List<Goods> goods=others.selectGoods();
		
		List<Goods> goodsGaodian=others.selectGoodsGaodian();
		
		for(Goods g:goodsGaodian)
			 System.out.println(g.toString());
		
//		for(Classify c:cassifys)
//		 System.out.println(c.getCname());
	}
}
