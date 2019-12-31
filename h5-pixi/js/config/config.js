var WY_SPACE = window.WY_SPACE || {};

WY_SPACE.config = {
	app: { //application 配置
		widthPercent: 100, 	  //宽度百分比
		heightPercent: 100,      // 高度百分比
		antialias: true,  // 字体更加圆滑
		transparent: true, // 画布透明,用body做背景
		resolution: window.devicePixelRatio||1,    // 像素密度
		fullScreen: false,  //是否全屏，覆盖匡高设置
		background: '0x342c2c', //渲染背景
	}
}
