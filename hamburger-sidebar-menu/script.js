// 漢堡選單 //
var hamburgerMenu = function() {

	// 設定選單出現消失速度
	var duration = 300;
	
	// 簡化jQ物件名稱
	var $button = $('.btn-hamburger-menu'),
	$menu = $('.sidebar-nav'),
	$menuFilter = $('.sidebar-nav-filter');

	// 點選按鈕後進行開關設定，並判斷開關狀態
	$button.click(function(event) {
		event.preventDefault(); 


		// 用增加/移除class的方式，把按鈕做成開關，呼叫MENU打開
		$button.toggleClass('open');

		if($button.hasClass('open')){

			// 芝麻開門
			$menu.animate({left:'+=223px'}, duration);
			// 固定完左邊後就可以綁定fixed
			$menu.css('position', 'fixed');
			$menuFilter.show();
		}else{
			$menu.animate({left:'-=223px'}, duration);
			$menu.css('position', 'absolute');
			$menuFilter.hide();
		};

	});

	// 點選filter就會移除開關，並關閉MENU
	$menuFilter.on('click', function(event) {
		$button.removeClass('open')
		$menu.animate({left:'-=223px'}, duration);
		$menuFilter.hide();
	});

};


$(document).ready(function (){
	hamburgerMenu();

});

