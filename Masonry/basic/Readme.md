
<http://www.shiftbrain.co.jp/book/jquery/sample/chapter06/02/>

本次分成兩部份

1. 了解 Masonry
2. 撈 json 檔案的圖片資料並放進 Mansonry


# 1. 了解 Masonry

## 目的

製作一個圖片瀑布流的頁面。
練習用（html only）：<http://codepen.io/anon/pen/EVwJaL>  
純靜態完成版：<http://codepen.io/anon/pen/MaERYv>

## 了解 Masonry 外掛

Mansonry 預設會把 ul 列表內的所有項目全部變成瀑布流的形式。
但也可以自己指定class來作為瀑布流的物件。

### 語法sample

#### html

```
<ul id="masonry">
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片1">
        <img src="http://placehold.jp/999999/ffffff/230x150.png?text=圖片1" alt="圖片1">
      </a>
    </li>
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片2">
        <img src="http://placehold.jp/999999/ffffff/230x450.png?text=圖片2" alt="圖片2">
      </a>
    </li>
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片3">
        <img src="http://placehold.jp/999999/ffffff/230x530.png?text=圖片3" alt="圖片3">
      </a>
    </li>
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片4">
        <img src="http://placehold.jp/999999/ffffff/230x550.png?text=圖片4" alt="圖片4">
      </a>
    </li>
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片5">
        <img src="http://placehold.jp/999999/ffffff/230x250.png?text=圖片5" alt="圖片5">
      </a>
    </li>
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片6">
        <img src="http://placehold.jp/999999/ffffff/230x530.png?text=圖片6" alt="圖片6">
      </a>
    </li>
    <li>
      <a href="http://placehold.jp/999999/ffffff/640x480.png?text=原始圖片7">
        <img src="http://placehold.jp/999999/ffffff/230x550.png?text=圖片7" alt="圖片7">
      </a>
    </li>
</ul>
```

#### js (包括imageloaded)

```
$(document).ready( function() {
  // init Masonry
  var $grid = $('#masonry').masonry({
    columnWidth: 230,
    gutter: 10
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });
});

```

# 2. 撈 json 檔案的圖片資料並放進 Mansonry

## 目的

製作一個圖片瀑布流的頁面。  
且圖片位置是從 json 檔案中取得，可以動態變更頁面內容。

練習用（html)：<http://codepen.io/anon/pen/eprYjo>  
完成版：<http://codepen.io/anon/pen/gazOjx>

## 什麼是Json 

可以想成是一個純文字的試算表。

試算表長這樣的話：<https://docs.google.com/spreadsheets/d/1M6S5BC1vYaHtkKw47vkmehtEwKVHOFjIS6ooagKg4YE/edit?usp=sharing>

Json就長這樣：<https://sheetsu.com/apis/020147bf>

## 如何把 Google 試算表轉成 json

利用 [Sheetsu](https://sheetsu.com/) 服務來轉


## 步驟思考

1. 從json把圖片路徑、縮圖和標題抓出來後，要轉成html  
ex：  
`<li><a href="圖片路徑"><img src="縮圖" alt="標題"></a></li>`
2. 每一個圖片都要做上述的動作，所以要使用迴圈
3. 把所有轉好的html塞進`<ul id="masonry">`裡面

## 實際撰寫

1. 用`$.each`跑迴圈，並且找個地方塞（做個物件叫`elements`放進去）迴圈跑完後的資料
  * 用`$.getjson()`方法抓出json資料
  * 轉成html：先做一個html的模板（做個物件叫`itemHTML`放進去），讓迴圈套用
2. 把迴圈跑完後產生的資料（`elements`）用`append`塞進`<ul id="masonry">`裡面

## 語法講解

`$.getjson()`

ajax抓json檔案的一種簡潔寫法。

基礎用法：
``
$.getJSON('[json路徑]', function([JSON抓回來的資料轉成的物件名]) {
  // 抓取成功的話要跑的function
});
``

### 語法sample

#### html

```
<ul id="masonry">
    // 這邊用 javascript 撈 json 中的圖片資料，並用迴圈作成DOM元素帶入 //
</ul>
```

#### js (包括imageloaded)


```
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
```
