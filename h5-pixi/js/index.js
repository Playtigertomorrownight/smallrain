//命名空间
var WY_SPACE = window.WY_SPACE || {};
//app配置
WY_SPACE.app = {
	  render: null
};

window.onload = function(){
	init();
}

//初始化操作，主要是设置画布位置及其大小
function init() {
	//创建渲染器，宽高为视窗的宽高
	let currentSize = WY_SPACE.util.getWindowSize();
  let render = new PIXI.CanvasRenderer(currentSize.width, currentSize.height);
	let contianer = document.querySelector("#cantainer");
	if(!contianer) {
		alert("has no contianer element!");
		return ;
	}
	contianer.appendChild(render.view);
	//创建一个容器对象：舞台
  var objPixiContainer = new PIXI.Container();
	
	//告诉渲染器去渲染舞台
  render.render(objPixiContainer);
	
	WY_SPACE.app.render = render;
	window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', adaptWindowSize, false);
}

//适应窗口大小
function adaptWindowSize(){
	// canvas 大小重置
	let currentSize = WY_SPACE.util.getWindowSize();
	WY_SPACE.app.render.resize(currentSize.width, currentSize.height);
}

