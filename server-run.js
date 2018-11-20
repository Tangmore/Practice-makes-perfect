const express=require('express'); //创建连接
var app=express();
var bodyParser = require('body-parser');  //body解析

app.use(bodyParser.urlencoded({extended: true}))
    .use(express.static('public'))  //对静态文件进行监听
	.get('/getlist', (req, res)=>{
		console.log(req.body);   //post请求
		var data={
                "code": "200",
                "msg": "success",
                "result": [{
					"id":1,
                    "name": "张三三",
                    "content": "广告投放1111"
                },
				{
					"id":2,
                    "name": "李四四",
                    "content": "广告投放22222"
                },
				{
					"id":3,
                    "name": "王五五",
                    "content": "广告投放33333"
                }]
            }
        res.end(JSON.stringify(data));    
	})
	.post('/info', (req,res)=> {
		console.log(req.body);
		var data = [];
		data.push(req.body);
		console.log(data);
		res.end(JSON.stringify(data));
	})
	.get('/pic',(req,res)=>{
    	var data={
			"status":1,
			"msg":"请求数据成功",
			"result":[{product_img_url:'image/1.jpg',discount_price:'￥5555',sale_price:'5000'},{product_img_url:'image/2.jpg',discount_price:'￥1555',sale_price:'1000'},
			{product_img_url:'image/4.jpg',discount_price:'￥2555',sale_price:'2000'},
			{product_img_url:'image/5.jpg',discount_price:'￥3555',sale_price:'3000'},
			{product_img_url:'image/6.jpg',discount_price:'￥4555',sale_price:'4000'},
			{product_img_url:'image/7.jpg',discount_price:'￥5555',sale_price:'5000'},
			{product_img_url:'image/8.jpg',discount_price:'￥6555',sale_price:'6000'},
			{product_img_url:'image/9.jpg',discount_price:'￥7555',sale_price:'7000'},
			{product_img_url:'image/10.jpg',discount_price:'￥8555',sale_price:'8000'},
			{product_img_url:'image/11.jpg',discount_price:'￥9555',sale_price:'9000'},
			{product_img_url:'image/12.jpg',discount_price:'￥1555',sale_price:'900'},
			{product_img_url:'image/13.jpg',discount_price:'￥2555',sale_price:'1200'},
			{product_img_url:'image/14.jpg',discount_price:'￥3555',sale_price:'3300'},
			{product_img_url:'image/3.jpg',discount_price:'￥4555',sale_price:'4200'},
		    {product_img_url:'image/4.jpg',discount_price:'￥2555',sale_price:'2000'},
			{product_img_url:'image/5.jpg',discount_price:'￥3555',sale_price:'3000'},
			{product_img_url:'image/6.jpg',discount_price:'￥4555',sale_price:'4000'},
			{product_img_url:'image/7.jpg',discount_price:'￥5555',sale_price:'5000'},
			{product_img_url:'image/8.jpg',discount_price:'￥6555',sale_price:'6000'},
			{product_img_url:'image/9.jpg',discount_price:'￥7555',sale_price:'7000'},
			{product_img_url:'image/10.jpg',discount_price:'￥8555',sale_price:'8000'},
			{product_img_url:'image/11.jpg',discount_price:'￥9555',sale_price:'9000'},
			{product_img_url:'image/12.jpg',discount_price:'￥1555',sale_price:'900'},
			{product_img_url:'image/13.jpg',discount_price:'￥2555',sale_price:'1200'},
			{product_img_url:'image/14.jpg',discount_price:'￥3555',sale_price:'3300'},
			{product_img_url:'image/3.jpg',discount_price:'￥4555',sale_price:'4200'},
		    {product_img_url:'image/4.jpg',discount_price:'￥2555',sale_price:'2000'},
			{product_img_url:'image/5.jpg',discount_price:'￥3555',sale_price:'3000'},
			{product_img_url:'image/6.jpg',discount_price:'￥4555',sale_price:'4000'},
			{product_img_url:'image/7.jpg',discount_price:'￥5555',sale_price:'5000'},
			{product_img_url:'image/8.jpg',discount_price:'￥6555',sale_price:'6000'},
			{product_img_url:'image/9.jpg',discount_price:'￥7555',sale_price:'7000'},
			{product_img_url:'image/10.jpg',discount_price:'￥8555',sale_price:'8000'},
			{product_img_url:'image/11.jpg',discount_price:'￥9555',sale_price:'9000'},
			{product_img_url:'image/12.jpg',discount_price:'￥1555',sale_price:'900'},
			{product_img_url:'image/13.jpg',discount_price:'￥2555',sale_price:'1200'},
			{product_img_url:'image/14.jpg',discount_price:'￥3555',sale_price:'3300'},
			{product_img_url:'image/3.jpg',discount_price:'￥4555',sale_price:'4200'},
			{product_img_url:'image/4.jpg',discount_price:'￥2555',sale_price:'2000'},
			{product_img_url:'image/5.jpg',discount_price:'￥3555',sale_price:'3000'},
			{product_img_url:'image/6.jpg',discount_price:'￥4555',sale_price:'4000'},
			{product_img_url:'image/7.jpg',discount_price:'￥5555',sale_price:'5000'},
			{product_img_url:'image/8.jpg',discount_price:'￥6555',sale_price:'6000'},
			{product_img_url:'image/9.jpg',discount_price:'￥7555',sale_price:'7000'},
			{product_img_url:'image/10.jpg',discount_price:'￥8555',sale_price:'8000'},
			{product_img_url:'image/11.jpg',discount_price:'￥9555',sale_price:'9000'},
			{product_img_url:'image/12.jpg',discount_price:'￥1555',sale_price:'900'},
			{product_img_url:'image/13.jpg',discount_price:'￥2555',sale_price:'1200'},
			{product_img_url:'image/14.jpg',discount_price:'￥3555',sale_price:'3300'},
			{product_img_url:'image/3.jpg',discount_price:'￥4555',sale_price:'4200'}]
		}

	res.send(JSON.stringify(data));
	})

	.listen(3000);
console.log('Server started on port 3000.');
