/**
 * you can download file using this function without opening new web page
 * @param {Object} path
 * @param {Object} params
 */
function downloadFile(path,params) {
    $("#downloadform").remove();  
    var form = $("<form>");//定义一个form表单  
    form.attr("id", "downloadform");  
    form.attr("style", "display:none");  
    form.attr("target", "");  
    form.attr("method", "post");  
    form.attr("action", path);
    for(var key in params){
        var input1 = $("<input>");  
        input1.attr("type", "hidden");  
        input1.attr("name", key); 
        input1.attr("value", params[key]);
        form.append(input1);          	
    }
    $("body").append(form);//将表单放置在web中  
    form.submit();//表单提交()
} 
	