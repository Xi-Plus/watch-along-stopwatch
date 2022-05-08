(function(){"use strict";var r=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <title>Watch Along Stopwatch</title>

    <style>
      body {
        text-align: center;
        font-family: sans-serif;
        color: #000;
        background: #04f404;
      }

      #stopwatch {
        letter-spacing: 3px;
        font-size: 36px;
      }

      #colon {
        vertical-align: 7%;
      }
    </style>
  </head>

  <body>
    <div id="stopwatch">
      <span id="hour">00</span><span id="colon">:</span
      ><span id="minute">00</span><span id="colon">:</span
      ><span id="second">00</span><span id="point">.</span
      ><span id="decisecond">0</span>
    </div>
  </body>
</html>
`,a=null,t,l;function i(e){return e.toString().padStart(2,"0")}function d(){var e=a.currentTime,n=Math.floor(e),s=Math.floor((e-n)*100),c=Math.floor(n/60);n-=c*60;var m=Math.floor(c/60);c-=m*60,t.document.getElementById("hour").innerText=i(m),t.document.getElementById("minute").innerText=i(c),t.document.getElementById("second").innerText=i(n),t.document.getElementById("decisecond").innerText=i(s),t.closed&&clearInterval(l)}function o(e){if(e.target.tagName=="VIDEO"?a=e.target:e.target.parentElement.getElementsByTagName("video").length===1&&(a=e.target.parentElement.getElementsByTagName("video")[0]),a!==null){document.removeEventListener("click",o);for(let n=0;n<document.getElementsByTagName("iframe").length;n++)document.getElementsByTagName("iframe")[n].contentDocument!==null&&document.getElementsByTagName("iframe")[n].contentDocument.removeEventListener("click",o);t=window.open("","","width=250,height=60"),t.document.write(r),l=setInterval(d,5)}}document.addEventListener("click",o);for(let e=0;e<document.getElementsByTagName("iframe").length;e++)document.getElementsByTagName("iframe")[e].contentDocument!==null&&document.getElementsByTagName("iframe")[e].contentDocument.addEventListener("click",o)})();
