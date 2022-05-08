import stopwatch from './stopwatch.html?raw';

var targetVideo = null, win, intervalId;

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

function clearListeners() {
	document.removeEventListener('click', clickCallback);
	for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
		if (document.getElementsByTagName('iframe')[i].contentDocument !== null) {
			document.getElementsByTagName('iframe')[i].contentDocument.removeEventListener('click', clickCallback);
		}
	}
}

function clickCallback(e) {
	if (e.target.tagName == 'VIDEO') {
		clearListeners();
		targetVideo = e.target;
	} else {
		var curElement = e.target;
		while (curElement != null) {
			if (curElement.getElementsByTagName('video').length === 1) {
				clearListeners();
				targetVideo = curElement.getElementsByTagName('video')[0];
				break;
			} else if (curElement.getElementsByTagName('video').length > 1) {
				alert("2 or more videos found. I don't know which one is correct. Please try again.")
				return;
			}
			curElement = curElement.parentElement;
		}
	}

	if (targetVideo !== null) {
		win = window.open('', '', 'width=250,height=60');
		win.document.write(stopwatch);
		intervalId = setInterval(updateTime, 5);
	} else {
		alert("I can't find any videos. Please try again.")
	}
}

document.addEventListener('click', clickCallback);
for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
	if (document.getElementsByTagName('iframe')[i].contentDocument !== null) {
		document.getElementsByTagName('iframe')[i].contentDocument.addEventListener('click', clickCallback);
	}
}
