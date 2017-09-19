
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//实现退出功能
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if (data.code==200) {
					location.href = '/main/login';
				}
			}
		});
	});

	//检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	if (!flag) {
		location.href = '/main/login';
	}