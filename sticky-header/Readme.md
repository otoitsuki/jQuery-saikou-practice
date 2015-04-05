
# Sticky Header

書上成果：

<http://www.shiftbrain.co.jp/book/jquery/sample/chapter05/03/>


## 設計邏輯

* 當頁面移動到看不見header區塊時，就把header區塊固定在最上方。
* 頁面移動回header應該在的位置時，讓header恢復成預設位置。

## 實際撰寫邏輯

1. 一開始要先知道HEADER和頁面TOP之間的距離，也就是HEADER的預設位置

2. 監控頁面捲軸捲動的距離，一但捲動距離超過HEADER預設位置的時候，就要把HEADER變成STICKY HEADER。

3. 變成STICKY HEADER之後，假設捲動距離小於預設HEADER和頁面TOP的距離，就要把HEADER放回預設位置，也就是解除STICKY HEADER

### 定義變數

1. HEADER預設位置
用offset去抓HEADER物件離TOP的距離

2. 捲軸和頁面TOP的距離
視窗物件的捲軸拖拉多少的距離
然而這個數值不能先在開頭設定變數，因為這是一個會隨著捲軸移動而變動的數值，因此要在捲軸移動的時候去抓這個數值。

然而實際上考慮到效能不要讓JQ一直去DOM抓CLASS物件，所以一開始定義變數時，就是抓頁面HEADER物件和視窗物件，而實際使用的時候，再進一步用方法去抓距離等等的數值。

### 謹慎的進階手法

有時候可能會用程式導入該頁面的某一個頁面內苗點，此時就會發現HEADER沒有出現在頁面上，這是因為依照上面的設定，只有在SCROLl的時候，才會呼叫把HEADER轉成STICKY HEADER的函示。因此此時就要用trigger語法呼叫SCROLL動作的方法，讓此頁面一旦被讀取，就會立刻呼叫SCROLL事件，執行函式來判斷HEADER是否要變STICKY HEADER。
