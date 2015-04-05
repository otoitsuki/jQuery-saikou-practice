var stickyHeader = function () {
		var $header = $(".page-header"),
				$window = $(window),
				// Header的預設位置
				$headerPosition = $header.offset().top;
		// 監控頁面捲軸,一旦元素捲動就要看是否需要調整header
		$window.on('scroll',function() {
		if ($window.scrollTop() > $headerPosition) {
			$header.addClass("sticky");
		} else {
			$header.removeClass("sticky");
		}
		});
		$window.trigger('scroll');
	}

$(document).ready(function (){
	stickyHeader();
});

