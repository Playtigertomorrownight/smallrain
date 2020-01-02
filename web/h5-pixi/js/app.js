//app 类
function WY_APP (config) {
	//私有变量
	this.element = null;  //绑定的元素
	this.render = null,  //渲染器
  this.contianer = null //舞台
	if(!config)  return;
	this.element = document.querySelector(config.elem);
	if(! this.element) {
		alert("has no contianer element!");
		return ;
	}
	//创建渲染器，宽高为视窗的宽高
	let currentSize = WY_SPACE.util.getWindowSize();
	this.render = new PIXI.CanvasRenderer(currentSize.width, currentSize.height);
	this.element.appendChild(this.render.view);  //添加渲染器
	//创建一个容器对象：舞台
	this.contianer = new PIXI.Container();
}

//成员方法
//渲染器大小改变
WY_APP.prototype.resize = function(width,height) {
	this.render.resize(width, height);
};

//渲染当前场景
WY_APP.prototype.renderCurrent = function() {
	this.render.render(this.contianer);
};

//add image 到场景中
WY_APP.prototype.addImage = function(imageUrl,loadingFunction) {
	let that = this ;
	//图片预加载
  PIXI.loader
    .add(imageUrl)
    .on("progress", function(){
        console.log("loading.....");
				if(loadingFunction) loadingFunction();
					
    }).load(function(){
	    console.log("load finish.....");
			//创建一个精灵
			let sprite = new PIXI.Sprite(PIXI.loader.resources[imageUrl].texture);
			//添加到舞台
			that.contianer.addChild(sprite);
	});
};


//add animation 到场景中 , 通过一系列序列图片形成动画
WY_APP.prototype.addAnimation = function(imageUrlArray,speed) {
	let that = this ;
	//精灵
	let sprite = new PIXI.extras.AnimatedSprite.fromImages(imageUrlArray)
	//精灵添加到舞台
	this.contianer.addChild(sprite)
	//找到序列帧所在的图层，放到对应位置，并设置移动速度
	sprite.animationSpeed = speed?speed:0.1; //控制速度
	sprite.play();//自动播放序列帧
};