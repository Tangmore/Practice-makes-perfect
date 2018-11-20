$(function(){
    var url='http://localhost:3000/getlist';//访问http://localhost:3000/index.html
    getList(url);
    $('.submit').click(function(){
        getHot();
    });

});
function getList(url){
    $.ajax({
        type:'get',
        url:url,
        async:true,
        dataType:'json',
        success: function(res) {
            if(res.code==200){
                var data=res.result;
                var token=res.code;
                console.log(res);
                //值存入本地
                //sessionStorage.setItem('token',token);
                $.each(data,function(index,item){
                    $('.new-list').append(` <li class="row">     
                    <a href="" class="col-6">${item.name}</a>
                    <a href="" class="col-6">
                   ${item.content}</a>
                </li>`);
                });
            }else{
                console.log('信息错误');
            }
        },
        error:function(){
            console.log(1111111111111);
        }
    })
};

function getHot(){
    var _textarea=$('.row textarea').val()
        _input1=$('.row .name').val();
        if(!_textarea||!_input1)  return;
        var data={
           // accesstoken:sessionStorage.getItem('token'),
            name:_input1,
            content:_textarea
        };
        $.ajax({
            type:'post',
            url:'http://localhost:3000/info',
            async:true,
            data:data,
            dataType:'json',
            success:function(res){
                console.log(res);
                var data=res;
                $.each(data,function(index,item){
                    $('.row .host-list').append(`<li class="row">   
                    <a href="" class="col-6">${item.name}</a>
                    <a href="" class="col-6">${item.content}</a>
                </li>`);
                });
                $('.row textarea').val('');
                $('.row input').val('');//清除数据
            },
            error:function(){
                
            }
        });
    
}