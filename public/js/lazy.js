$(function(){
     imgList();
    $(window).scroll(function(){
        //当前页面之前已经滚动的页面高度 scrollTop()
        var scrollTop=Math.ceil($(this).scrollTop());
        //当前可视区域的高度
        var _height=$(this).height();
        //总高度
        var _h=$(document).height();
        if(scrollTop + _height >= _h){//滚动条触底
                imgList();
        }
        console.log('1:'+scrollTop);
        console.log('2:'+_height);
        console.log('3:'+_h);
    });
});
// function imgList(i){

    //var index=i || 1;
function imgList(){
    $.ajax({
        type:'get',
        // url:'http://localhost:3000/pic'+index,
        url:'http://localhost:3000/pic',
        async:true,
        dataType:'json',
        success: function(res) {
            console.log(res);
            var data=res.result;
            if(res.status=='1'){
        //         $.each(data,function(index,item){
        //             $(".index-main ul").append(` <li  class="lists">
        //             <img src="${item.product_img_url}" width="150px" height="150px"/>
        //             <label>
        //                 <b class="discount">￥3299</b>
        //                 <span class="price-text">￥3799</span>
        //             </label>
        //         </li>`)
        //         })
        //     }
        // },
        
        //jq懒加载
                $.each(data,function(index,item){
                    $(".index-main ul").append(` <li  class="lists">
                    <img data-original="${item.product_img_url}"  src="image/loading.gif" width="150px" height="150px"/>
                    <label>
                        <b class="discount">${item.discount_price}</b>
                        <span class="price-text">${item.sale_price}</span>
                    </label>
                </li>`)
                })
            }
            //懒加载
        $('.index-main ul img').lazyload({
            effect:'fadeIn' //淡入
        })
        },
        error:function(){
            console.log(error);
        }
    })
}