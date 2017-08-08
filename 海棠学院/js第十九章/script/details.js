//公用方法调用
yx.public.navFn();
yx.public.lazyImgFn();
yx.public.backUpFn();

var params = yx.parseUrl(window.location.href);			//href从问号开始，到#前面
var pageId = params.id;								//产品对应的id
var curData = productList[pageId];					//产品对应的数据
if(!pageId || !curData){
	//这个就是404页面出现的条件
	window.location.href = "404.html"
}


//面包屑
var positionFn = yx.g("#position");
positionFn.innerHTML = '<a href="index.html">首页</a>' + '>';
for(var i=0; i<curData.categoryList.length; i++){
	positionFn.innerHTML +='<a href="#">'+curData.categoryList[i].name+'</a>' + '>';
}
positionFn.innerHTML += curData.name;


//左边产品图片展示
(function(){
	//左边图片功能
	var bigImg = yx.g("#productImg .left img");
	var smallImgs = yx.ga("#productImg .smallImg img");
	//从数据中取出url
	bigImg.src = smallImgs[0].src = curData.primaryPicUrl;
	//替换小图并做一个选项阿卡
	
	
	var last = smallImgs[0];		//上一张图片
	for(var i=0; i<smallImgs.length; i++) {
		//如果i的值有，也就是不包含0，说明是从第二章图片开始
		if(i){
			smallImgs[i].src = curData.itemDetail['picUrl'+i];
		}
		
		//选项卡
		smallImgs[i].index = i;
		smallImgs[i].onmouseover = function(){
			bigImg.src = this.src;
			last.className = "";
			this.className = "active";
			
			last = this;
		}
	}
	
	//右边文字信息一块
	yx.g("#productImg .info h2").innerHTML = curData.name;
	yx.g("#productImg .info p").innerHTML = curData.simpleDesc;
	
	yx.g("#productImg .info .price").innerHTML ='<div><span>售价</span><strong>￥'+curData.retailPrice+'</strong><div><span>促销</span><a href="'+curData.hdrkDetailVOList[0].huodongUrlPc+'" class="tag">'+curData.hdrkDetailVOList[0].activityType+'</a>	<a href="'+curData.hdrkDetailVOList[0].huodongUrlPc+'" class="discount">'+curData.hdrkDetailVOList[0].name+'</a>	</div><div><span>服务</span><a href="#" class="service"><i></i>30天无忧退货<i></i>网易自营品牌<i></i>部分地区无法配送</a></div>';
	
	
	//创建规格dom
	var format= yx.g("#productImg .format");
	var dds = [];		
	for(var i=0; i<curData.skuSpecList.length; i++){
		var dl = document.createElement("dl");
		var dt = document.createElement("dt");
		dt.innerHTML = curData.skuSpecList[i].name;
		dl.appendChild(dt);
		
		for(var j=0; j<curData.skuSpecList[i].skuSpecValueList.length; j++){
			var dd = document.createElement("dd");
			dd.innerHTML = curData.skuSpecList[i].skuSpecValueList[j].value;
			dd.setAttribute("data-id",curData.skuSpecList[i].skuSpecValueList[j].id);
			
			dd.onclick = function(){
				
			};
			
			dl.appendChild(dd);
		}
		
		format.appendChild(dl);
	};
})();
