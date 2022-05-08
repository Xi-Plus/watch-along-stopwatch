# watch-along-stopwatch

同步視聽碼表

## 使用方法

更簡便的方式請見[此頁面](https://xi-plus.github.io/watch-along-stopwatch/)。

1. 使用此程式碼建立書籤小程式。

```javascript
javascript: (function () {
  let script = document.createElement("script");
  script.src = "http://localhost:3000/dist/watch-along-stopwatch.iife.js";
  document.body.appendChild(script);
})();
```

2. 在影片頁面點擊此小書籤。
3. 點擊影片視窗（讓影片播放）。
   - 如果你的點擊位置不正確，將會彈出警告框。如果沒有看到警告框，請嘗試點擊鄰近的元素，例如在 Twitter 影片上點擊文字區域。
4. 應該會彈出一個碼錶視窗。

## How to use

Find a easier way [here](https://xi-plus.github.io/watch-along-stopwatch/).

1. Create a bookmarklet with the following code.

```javascript
javascript: (function () {
  let script = document.createElement("script");
  script.src = "http://localhost:3000/dist/watch-along-stopwatch.iife.js";
  document.body.appendChild(script);
})();
```

2. Click this bookmarklet on video page.
3. Click the video box (Let video play).
   - An alert box always pops up if your selection is incorrect. If there no alert box, try to click on adjacent elements. For example, click on text zone for Twitter videos.
4. A stopwatch window should be popup.
