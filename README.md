# watch-along-stopwatch
共同視聽碼表

## 使用方法 How to use
更簡便的方式請見[此頁面](https://xi-plus.github.io/watch-along-stopwatch/) Find a easier way [here](https://xi-plus.github.io/watch-along-stopwatch/)

1. 使用此程式碼建立書籤小程式 Create a bookmarklet with the following code
```javascript
javascript:(function(){
let script = document.createElement('script');
script.src = 'https://xi-plus.github.io/watch-along-stopwatch/watch-along-stopwatch.iife.js';
document.body.appendChild(script);
})()
```
2. 在影片頁面點擊此小書籤 Click this bookmarklet on video page
3. 點擊影片視窗（讓影片播放） Click the video box (Let video play)
4. 應該會彈出一個碼錶視窗 A stopwatch window should be popup
