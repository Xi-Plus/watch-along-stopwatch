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
`;if(document.getElementsByTagName("video").length===0&&document.getElementsByTagName("iframe").length>0){var i=document.getElementsByTagName("iframe")[0].src,m=["","about:blank"];m.indexOf(i)===-1&&confirm(`The video may be embedded from another page. Do you want to open the following url instead?
`+i)&&(window.location=i)}var d,n,c;function t(e){return e.toString().padStart(2,"0")}function u(){var e=d.currentTime,a=Math.floor(e),p=Math.floor((e-a)*100),o=Math.floor(a/60);a-=o*60;var l=Math.floor(o/60);o-=l*60,n.document.getElementById("hour").innerText=t(l),n.document.getElementById("minute").innerText=t(o),n.document.getElementById("second").innerText=t(a),n.document.getElementById("decisecond").innerText=t(p),n.closed&&clearInterval(c)}function r(e){e.target.tagName=="VIDEO"&&(d=e.target,document.removeEventListener("click",r),n=window.open("","","width=250,height=60"),n.document.write(s),c=setInterval(u,5))}document.addEventListener("click",r)})();
