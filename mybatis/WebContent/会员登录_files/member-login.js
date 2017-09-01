
/**
 * @author qiyasen
 * desc:换一张
 */
function codeImage(){
	var opath = document.getElementById("proPath").value;
	document.getElementById("rcodeimageId").src=opath+"getVcode?timestamp="+new Date();
}
