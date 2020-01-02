//命名空间
var WY_SPACE = window.WY_SPACE || {};
//app 定义
WY_SPACE.app = null;

window.onload = function(){
	init();
}

//初始化操作，主要是设置画布位置及其大小
function init() {
	
	WY_SPACE.app = new WY_APP(
	  {
	    elem:	"#cantainer",
		}
	);
	
	//开始渲染舞台
  renderUpdate();
	
	WY_SPACE.app.addImage("http://oss.smallrain.top/image/pixi/xingkong1.jpg");
	
	//适应窗口大小
	window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', function (){
		let currentSize = WY_SPACE.util.getWindowSize();
		WY_SPACE.app.resize(currentSize.width, currentSize.height);
	}, false);
}

//

//刷新页面
function renderUpdate() {
	  //console.log(" render container");
    requestAnimationFrame(renderUpdate);
    WY_SPACE.app.renderCurrent();
}




