tid = 0;
n = 0;
a = new Audio();
a.src = 'burst-500ms-silence-20s.wav';

function flash(cssClass, flashNum, delay, total) {
    if (typeof total === 'undefined') total = 1;
    if (typeof delay === 'undefined') delay = 500;
    document.body.classList.add(cssClass);
    setTimeout(function(){
	document.body.classList.remove(cssClass);
	if (total < flashNum) {
            setTimeout(function(){
		flash(cssClass, flashNum, delay, ++total);
            }, delay);
	}
    }, delay);
}

function again() {
    n++;
    a.pause();
    a.load();
    a.play();
    flash('white', 1, 500);
    t = (Math.random() * 4 + 2) * 1000;
    tid = setTimeout(again, t);
}

document.getElementById('play').addEventListener('click', (event) => {
    again();
});

document.getElementById('stop').addEventListener('click', (event) => {
    a.pause();
    if (tid != 0) {
	clearTimeout(tid);
	tid = 0;
    }
});
