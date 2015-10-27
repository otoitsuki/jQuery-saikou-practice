$(document).ready( function() {

  // init Masonry //
  // 先把 Masonry 以 $grid 代稱，並且設定 #mansory 為 Masonry 的區塊
  var $grid = $('#masonry').masonry({
    
            columnWidth: 230,
            gutter: 10,
            itemSelector: '.gallery-item'
  });

  // 先建好等下迴圈做好後要塞的地方（是個陣列）
  var elements = [];

  // 先把json資料抓回來，抓回來後放在data裡面
  $.getJSON('https://sheetsu.com/apis/020147bf', function(data) {
    // 開始跑迴圈，定義剛抓回來的資料（data），還有每個項目的索引名稱（i）以及迴圈內的稱呼方式（item）
    $.each(data.result, function(i,item){
      // 做一個html的模板，並且套用json撈回來的資料
      console.log(item);
      var itemHTML = 
            '<li class="gallery-item ">' + 
              '<a href="'+ item.original +'">' + 
                '<img src="'+ item.thumb +'" alt="'+ item.title +'">' + 
              '</a>' + 
            '</li>';
      // 迴圈跑完一次了！此時把剛做好的html加工處理：
      // 1. 把剛才做好的東西 html 轉成 jQuery 物件，這樣才能用jquery語法處理它 → `$(itemHTML)`
      // 2. 用`.get()`方法抓出 jQuery 物件裡的東西並轉成 DOM → `$(itemHTML).get(0)`
      // 3. 用`.push()`塞到`elements`
      elements.push($(itemHTML).get(0));
    });

    // 再來就是把 elements 塞到一開始 Masonry 設定的區塊去。
    $grid.append(elements);

    // layout Isotope after each image loads
    $grid.imagesLoaded(function() {
        $grid.masonry('appended', elements);
    });

  });
  

});