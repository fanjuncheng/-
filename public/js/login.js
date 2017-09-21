/**
 * Created by Administrator on 2017/9/20.
 */
define(['jquery','cookie'], function ($) {
    //µÇÂ¼¹¦ÄÜ
    $('#loginBtn').click(function(){
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginFrom').serialize(),
            dataType:'json',
            success:function(data){
                if (data.code ==200) {
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href = '/main/index';
                }
                console.log(data);
            }

        });

        return false;
    });
})