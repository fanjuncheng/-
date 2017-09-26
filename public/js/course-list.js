define(['jquery','template','util'],function($,template,util){
	util.setMenu(location.pathname);
	//获取所以得课程列表
	$.ajax({
		type:'get',
		url:'/api/course',
		dataType:'json',
		success:function(data){
			var html = template('courseTpl',{list:data.result});
			$('#courseInfo').html(html)
		}
	})
});