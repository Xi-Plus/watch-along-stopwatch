(function(){"use strict";var s=`<!DOCTYPE html>
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
`,o,n,c;function e(t){return t.toString().padStart(2,"0")}function l(){var t=o.currentTime,a=Math.floor(t),m=Math.floor((t-a)*100),i=Math.floor(a/60);a-=i*60;var r=Math.floor(i/60);i-=r*60,n.document.getElementById("hour").innerText=e(r),n.document.getElementById("minute").innerText=e(i),n.document.getElementById("second").innerText=e(a),n.document.getElementById("decisecond").innerText=e(m),n.closed&&clearInterval(c)}function d(t){t.target.tagName=="VIDEO"&&(o=t.target,document.removeEventListener("click",d),n=window.open("","","width=250,height=60"),n.document.write(s),c=setInterval(l,5))}document.addEventListener("click",d)})();
