# Tab

## 書上範例

<http://www.shiftbrain.co.jp/book/jquery/sample/chapter05/05/>

## 設計邏輯

* 點下 tab bar 上的 tab 後：
	* 點下的 tab 會變色或轉換樣式，代表已經被點選
	* 顯示對應的區塊

## 實際撰寫邏輯

### 準備變數

* css
	* tab bar：ul.tabs-nav
		* tab ： ul.tabs-nav>li>a
		* 被點選的 tab ：ul.tabs-nav>li>a.active
	* 對應內容：.tabs-panel
		* 當前顯示的區塊：.tabs-panel.active

* js
	* Tab 列表：$('.tabs-nav')
	* 對應區塊：$('.tabs-panel')

### 撰寫 jQuery

* 點下 tab bar 上的 tab 後：
	* 處理 tab 
		* 判斷是不是當前動作（顯示）的tab，是的話就不做任何事情
		* 關掉瀏覽器預設<a>的動作
		* 把所有 tab 切換成未點選的樣式
		* 被點選的 tab 切換為已點選的樣式
	* 處理對應區塊
		* 把所有 tab 隱藏起來
		* 把對應的區塊切換成顯示的樣式
