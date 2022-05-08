import stopwatch from './stopwatch.html?raw';

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
		document.removeEventListener('click', clickCallback);
		for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
			document.getElementsByTagName('iframe')[i].contentDocument.removeEventListener('click', clickCallback);
		}

		targetVideo = e.target;
		win = window.open('', '', 'width=250,height=60');
		win.document.write(stopwatch);
		intervalId = setInterval(updateTime, 5);
	}
}

document.addEventListener('click', clickCallback);
for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
	document.getElementsByTagName('iframe')[i].contentDocument.addEventListener('click', clickCallback);
}
