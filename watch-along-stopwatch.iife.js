(function(){"use strict";var m=`<!DOCTYPE html>
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
`;let r=m;window.trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("stopwatch",{createHTML:n=>n}).createHTML(r));var a=null,t,l;function i(e){return e.toString().padStart(2,"0")}function u(){var e=a.currentTime,n=Math.floor(e),g=Math.floor((e-n)*100),c=Math.floor(n/60);n-=c*60;var d=Math.floor(c/60);c-=d*60,t.document.getElementById("hour").innerText=i(d),t.document.getElementById("minute").innerText=i(c),t.document.getElementById("second").innerText=i(n),t.document.getElementById("decisecond").innerText=i(g),t.closed&&clearInterval(l)}function s(){document.removeEventListener("click",o);for(let e=0;e<document.getElementsByTagName("iframe").length;e++)document.getElementsByTagName("iframe")[e].contentDocument!==null&&document.getElementsByTagName("iframe")[e].contentDocument.removeEventListener("click",o)}function o(e){if(e.target.tagName=="VIDEO")s(),a=e.target;else for(var n=e.target;n!=null;){if(n.getElementsByTagName("video").length===1){s(),a=n.getElementsByTagName("video")[0];break}else if(n.getElementsByTagName("video").length>1){alert("2 or more videos found. I don't know which one is correct. Please try again.");return}n=n.parentElement}a!==null?(t=window.open("","","width=250,height=60"),t.document.write(r),l=setInterval(u,5)):alert("I can't find any videos. Please try again.")}document.addEventListener("click",o);for(let e=0;e<document.getElementsByTagName("iframe").length;e++)document.getElementsByTagName("iframe")[e].contentDocument!==null&&document.getElementsByTagName("iframe")[e].contentDocument.addEventListener("click",o)})();
