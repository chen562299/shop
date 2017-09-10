package com.bwf.servlet;



import java.util.List;

import com.bwf.bean.Classify;
import com.bwf.bean.Goods;
import com.bwf.bean.MainClassify;
import com.bwf.service.OtherService;
import com.bwf.service.OtherServiceImpl;


public class Test {
	public static void main(String[] args) {
		OtherService others=new OtherServiceImpl();
		
		
		
		List<Goods> goods=others.selectGoods();
		
		List<MainClassify> maincassifys=others.selectMainClassify();
			
		for(MainClassify m:maincassifys){
			int mcid=m.getMcid();
			//加载分类
			List<Classify> cassifys=others.selectClassify(mcid);
			for(Classify c:cassifys){
				String cid=c.getCid();
				List<Goods> classgoods=others.selectCGoods(cid);
				c.setGoods(classgoods);
			}
			m.setClassify(cassifys);
			System.out.println(m.toString());
		}
		
	}
}
