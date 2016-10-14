/**
 * Created by YangJing on 2016/8/26.
 */
window.onload=function () {
	banner();
	$('[data-toggle="tooltip"]').tooltip()

	//产品模块，导航宽度
	productNav();
}

//轮播图的功能
function banner() {
	var bannerBox=document.querySelector('.wjs-banner');
	var startX=0;
	var moveX=0;
	var distanceX=0;
	bannerBox.addEventListener('touchstart',function (e) {
		startX= e.changedTouches[0].clientX;
	})
	bannerBox.addEventListener('touchmove',function (e) {
		moveX= e.changedTouches[0].clientX;
		distanceX=moveX-startX;
	})
	bannerBox.addEventListener('touchend',function () {
		if (distanceX>0) {
			$('.carousel').carousel('prev');
		}
		if (distanceX<0) {
			$('.carousel').carousel('next');
		}
	})
}

//产品模块
function productNav() {
	var nav=$('.wjs-nav-tabs');
	var lis=nav.find('li');
	var w=0;
	$.each(lis,function (index,item) {
		w+=$(item).innerWidth();
	})
	nav.width(w);
}