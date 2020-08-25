$(function() {
	//左侧导航
	$('#nav li').click(function() {
		if($(this).hasClass('showa')){
			$(this).removeClass('showa');
			$(this).children('a').children('i').last().removeClass('fa-angle-double-right').addClass('fa-angle-double-up'); 
			$(this).children('ul').removeClass('sub-menu');      
		}else{
			$(this).addClass('showa');
			$(this).children('a').children('i').last().removeClass('fa-angle-double-up').addClass('fa-angle-double-right'); 
			$(this).children('ul').addClass('sub-menu');
		}  

	});
	//头部导航
	$('.container .left_open i').click(function(event) {
		if($('.left-nav').css('left') == '0px') {
			$('.left-nav').animate({
				left: '-221px'
			}, 100);
			$('.page-content').animate({
				left: '0px'
			}, 100);
			$('.page-content-bg').hide();
		} else {
			$('.left-nav').animate({
				left: '0px'
			}, 100);
			$('.page-content').animate({
				left: '221px'
			}, 100);
			if($(window).width() < 768) {
				$('.page-content-bg').show();
			}
		}
	});
	//加载弹出层
	layui.use(['form', 'element'],
		function() {
			layer = layui.layer;
			element = layui.element;
		});
	//点击查看
	$('#lookover').click(function(){
		$(this).attr('href','./detail.html')
	});

	$('.td-manage a').click(function(){
		$(this).attr('href','./student-detail.html')
	})
	// 分页样式
	$('.own-coverd a').click(function(){
		$(this).addClass('pagecoverd');
		$(this).siblings('a').removeClass('pagecoverd')
	})
	// 弹窗
   if($('#alertdialog').css('display')=='block'){
	 setTimeout(function(){$('#alertdialog').css('display','none') }, 3000);
	 }


})
