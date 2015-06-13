# Tab

## 書上範例

<http://www.shiftbrain.co.jp/book/jquery/sample/chapter05/05/>

## 設計邏輯

* 點下 tab bar 上的 tab 後：
	* 點下的 tab 會變色或轉換樣式，代表已經被點選
	* 顯示對應的區塊

## 實際撰寫邏輯

* 點下 tab bar 上的 tab 後：
	* 處理 tab 
		* 關掉瀏覽器預設<a>的動作
		* 把所有 tab 切換成未點選的樣式
		* 被點選的 tab 切換為已點選的樣式
	* 處理對應區塊
		* 把所有 tab 隱藏起來
		* 把對應的區塊切換成顯示的樣式

## 變數與命名

### css
	* tab bar：ul.tabs-nav
	* 對應內容：.tabs-panel
