    function  bwzSubmit(){
			var procureRequirements = $('input[name=procureRequirements]').val();
			var linkMan = $('input[name=linkMan]').val();
			var linkMobile = $('input[name=linkMobile]').val();
			var companyName = $('input[name=companyName]').val();
			if(checkCompanyName()&&checkRequirements()&&checkName()&&checkTel()){
				$.ajax({
		            cache: true,
		            type: "POST",
		            url:"/bangWZ/saveBangWZ",
		            data:"procureRequirements="+procureRequirements+"&linkMan="+linkMan+"&linkMobile="+linkMobile+"&companyName="+companyName,
		            async: false,
		            error: function(request) {
		                alert("小秘书没有收到你的采购需求，请重新发送!");
		            },
		            success: function(data) {
		            	if(data.statusCode == 106){
                            $(".find-goods-success").show(200);
						}else{
							alert("小秘书没有收到你的采购需求，请重新发送!");
						}
		            }
		        });
			}
		}
         
//验证特殊字符
function validate(value) {  
	var specialChar = /[~!@#$^&*()！￥（）……\\/|=+。	]/g;     
	return !specialChar.test(value);
}



//检查公司名称合法性
function checkCompanyName(){
    if($(".company-name").val()=='公司名称'){
        return false;
    }
	if($.trim($("input[name=companyName]").val())=="" || !validate($("input[name=companyName]").val())){
		 $("input[name=companyName]").addClass("ml-error");
		 return false;
	}else{
		$("input[name=companyName]").removeClass("ml-error");
		 return true;
	}

}

//检查公司名称合法性
function checkRequirements(){
    if($(".buy_content").val()=='采购内容'){
        return false;
    }
	if($.trim($("input[name=procureRequirements]").val())==""){
		$("input[name=procureRequirements]").addClass("ml-error");
		return false;
	}else if(!validate($("input[name=procureRequirements]").val())){
		$("input[name=procureRequirements]").addClass("ml-error");
		return false;
	}else{
		$("input[name=procureRequirements]").removeClass("ml-error");
		return true;
	}

}

//检查姓名合法性
function checkName(){
    if ($(".contact-person").val()=='联系人') {
        return false;
    }
	if($.trim($("input[name=linkMan]").val())==""){
		 $("input[name=linkMan]").addClass("ml-error");
		 return false;
	}else if(!validate($("input[name=linkMan]").val())){
		$("input[name=linkMan]").addClass("ml-error");
		return false;
	}else{
		$("input[name=linkMan]").removeClass("ml-error");
		return true;
	}

}

//检查联系方式合法性
function checkTel(){
    if($.trim($("input[name=linkMobile]").val())=="联系电话"){
    	return false;
	}
	if($.trim($("input[name=linkMobile]").val())!==""){
		if($("input[name=linkMobile]").val().match(/^1[3|4|5|8|7][0-9]\d{8}$/) ||  $("input[name=linkMobile]").val().match(/^((0\d{2,3})-)(\d{7,8})(-(\d{1,4}))?$/) ){
			 $("input[name=linkMobile]").removeClass("ml-error");
			 return true; 
		}else{
			$("input[name=linkMobile]").addClass("ml-error");
			 return false; 
		}
	}else{
		 $("input[name=linkMobile]").addClass("ml-error");
		 return false;
	}
}
$("input[name=linkMobile]").blur(function(){
	checkTel();
});
$("input[name=procureRequirements]").blur(function(){
	checkRequirements();
});
$("input[name=linkMan]").blur(function(){
	checkName();
});
$("input[name=companyName]").blur(function(){
	checkCompanyName();
});