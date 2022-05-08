import stopwatch from './stopwatch.html?raw';

if (document.getElementsByTagName('iframe').length > 0) {
	var iframeUrl = document.getElementsByTagName('iframe')[0].src;
	if (confirm('The video may be embedded from another page. Do you want to open the following url instead?\n' + iframeUrl)) {
		window.location = iframeUrl;
	}
}

var targetVideo, win, intervalId;

function padZero(num) {
	return num.toString().padStart(2, '0');
}

function updateTime() {
	var currentTime = targetVideo.currentTime;
	var second = Math.floor(currentTime);
	var decisecond = Math.floor((currentTime - second) * 100);
	var minute = Math.floor(second / 60);
	second -= minute * 60;
	var hour = Math.floor(minute / 60);
	minute -= hour * 60;
	win.document.getElementById('hour').innerText = padZero(hour);
	win.document.getElementById('minute').innerText = padZero(minute);
	win.document.getElementById('second').innerText = padZero(second);
	win.document.getElementById('decisecond').innerText = padZero(decisecond);

	if (win.closed) {
		clearInterval(intervalId);
	}
}

function clickCallback(e) {
	if (e.target.tagName == 'VIDEO') {
		targetVideo = e.target;
		document.removeEventListener('click', clickCallback);
		win = window.open('', '', 'width=250,height=60');
		win.document.write(stopwatch);
		intervalId = setInterval(updateTime, 5);
	}
}
document.addEventListener('click', clickCallback);
