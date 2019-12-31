var WY_SPACE = window.WY_SPACE || {};

WY_SPACE.util = {
	getWindowSize: function(){   //获取屏幕宽高
		return {
			  width:  window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth,
				height:  (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight)-4
			}
	},
	fullScreen: function(el) { //某个元素触发f11全屏
		let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
			wscript;
		if (typeof rfs != "undefined" && rfs) {
			rfs.call(el);
			return;
		}
		if (typeof window.ActiveXObject != "undefined") {
			wscript = new ActiveXObject("WScript.Shell");
			if (wscript) {
				wscript.SendKeys("{F11}");
			}
		}
	},
	exitFullScreen: function() {  //退出F11全屏
		let el = document,
			cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
			wscript;
		if (typeof cfs != "undefined" && cfs) {
			cfs.call(el);
			return;
		}
		if (typeof window.ActiveXObject != "undefined") {
			wscript = new ActiveXObject("WScript.Shell");
			if (wscript != null) {
				wscript.SendKeys("{F11}");
			}
		}
	},
	isMobile: function () {   //判断当前设备是否为移动端
        return null!=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    }

}
