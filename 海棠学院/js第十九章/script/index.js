//公用方法调用
yx.public.navFn();
yx.public.lazyImgFn();
yx.public.backUpFn();


//banner轮播图
var bannerPic = new Carousel();
bannerPic.init({
	id:"bannerPic",	
	autoplay:true,		
	intervalTime:3000,	
	loop:true,			
	totalNum:5,			
	moveNum:1,			
	circle:true,		
	moveWay:"opacity"	
});

//新品首发轮播图
var newProduct = new Carousel();
newProduct.init({
	id:"newProduct",	
	autoplay:false,		
	intervalTime:3000,	
	loop:true,			
	totalNum:8,			
	moveNum:4,			
	circle:false,		
	moveWay:"position"	
});

//轮播图添加自定义事件
newProduct.on("rightEnd",function(){
	//alert("右边到头了");
	this.nextBtn.style.background = "#e7e2d7";
});

newProduct.on("leftEnd",function(){
	//alert("左边到头了");
	this.prevBtn.style.background = "#e7e2d7";
});
newProduct.on("rightClick",function(){
	//alert("右边点击了");
	this.prevBtn.style.background = "#d0c4af";
});
newProduct.on("leftClick",function(){
	//alert("左边点击了");
	this.nextBtn.style.background = "#d0c4af";
});



//人气推荐选项卡
//自执行函数避免变量污染
(function(){
	var titles = yx.ga("#hot header li");
	var contents = yx.ga("#hot .hotCon");
	
	for(var i=0; i<titles.length; i++) {
		titles[i].index = i;
		titles[i].onclick = function(){
			for(var i=0; i<titles.length; i++){
				titles[i].className = "";
				contents[i].style.display = "none";
			}
			titles[this.index].className = "active";
				contents[this.index].style.display = "block";
		}
	}
})();

//限时购
(function(){
	//左边的功能
	var timeBox = yx.g("#flash .timeBox");
	var spans = yx.ga("#flash .timeBox span");
	var timer = setInterval(showTime,1000);
	showTime();
	//倒计时
	function showTime(){
		var endTime = new Date(2017,7,15,15)			//Fri Sep 15 2017 13:00:00 GMT+0800 (中国标准时间)
		//限制当前时间不能超过截止时间，超过 了就显示000000
		//如果当前时间没有超过结束的时间采取做倒计时
		//console.log(endTime)
		
		
		if(new Date() < endTime) {
			var overTime = yx.cutTime(endTime);
			spans[0].innerHTML =yx.format(overTime.h);
			spans[1].innerHTML =yx.format(overTime.m);
			spans[2].innerHTML =yx.format(overTime.s);
		} else {
			clearInterval(timer);
		};
	}
	
	
	
	//数据结构
	var boxWrap = yx.g("#flash .boxWrap");
	var str = ""; 				//用于存储数据结构
	var item = json_promotion.itemList;		//简化json格式，直接拿出数据
	
	for(var i=0; i<item.length; i++){
		str += '<div class="flashBox scaleImg">'+
				'<a href="#" class="left"><img class="original" src="img/empty.gif" data-original="'+item[i].primaryPicUrl+'" /></a>'+
				'<div class="right">'+
					'<a href="#" class="title">'+item[i].itemName+'</a>'+
					'<p>'+item[i].simpleDesc+'</p>'+
					'<div class="numBar clearfix">'+
						'<div class="numCon">'+
							'<span style="width:'+Number(item[i].currentSellVolume)/Number(item[i].totalSellVolume)*100+'%"></span>'+
						'</div>'+
						'<span class="numTips">剩余'+item[i].currentSellVolume+'件</span>'+
					'</div>'+
					'<div>'+
						'<span class="xianshi">限时价<span class="symbol">￥</span><strong>'+item[i].actualPrice+'</strong></span><span class="yuan">原价￥'+item[i].retailPrice+'</span>'+
					'</div>'+
					'<a href="#" class="shopNow">立即抢购</a>'+
				'</div>'+
			'</div>'+
		'</div>';
	};
	boxWrap.innerHTML = str;
	
})();


//大家都在说轮播图
var talk = new Carousel();
talk.init({
	id:"talkPic",	
	autoplay:true,		
	intervalTime:3000,	
	loop:true,			
	totalNum:6,			
	moveNum:1,			
	circle:false,		
	moveWay:"position"	
});





