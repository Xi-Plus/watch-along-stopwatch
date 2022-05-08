(function(){"use strict";var l=`<!DOCTYPE html>
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
`,c,t,r;function a(n){return n.toString().padStart(2,"0")}function m(){var n=c.currentTime,e=Math.floor(n),s=Math.floor((n-e)*100),o=Math.floor(e/60);e-=o*60;var d=Math.floor(o/60);o-=d*60,t.document.getElementById("hour").innerText=a(d),t.document.getElementById("minute").innerText=a(o),t.document.getElementById("second").innerText=a(e),t.document.getElementById("decisecond").innerText=a(s),t.closed&&clearInterval(r)}function i(n){if(n.target.tagName=="VIDEO"){document.removeEventListener("click",i);for(let e=0;e<document.getElementsByTagName("iframe").length;e++)document.getElementsByTagName("iframe")[e].contentDocument.removeEventListener("click",i);c=n.target,t=window.open("","","width=250,height=60"),t.document.write(l),r=setInterval(m,5)}}document.addEventListener("click",i);for(let n=0;n<document.getElementsByTagName("iframe").length;n++)document.getElementsByTagName("iframe")[n].contentDocument.addEventListener("click",i)})();
