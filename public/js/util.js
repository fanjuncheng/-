/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery'], function ($) {
    return{
        qs: function (key) {
            //获取URL参数中指定参数值
            var param = location.search.substr(1);
            var result = null;
            if(param){
                var ps=param.split('&');
                $.each(ps, function (index, item) {
                    var kv = item.split('=');
                    if(kv[0]=='key'){
                        result=kv[1];
                        return false;
                    }
                });
            }
            return result;
        },
        setMenu:function(path){
$('.aside .navs a[href="'+path+'"]').addClass('active').closest('ul').show();
        }
    }
    
});