head = document.getElementById('head')
play = document.getElementById('play')
stop = document.getElementById('stop')
numb = document.getElementById('numb')

tid = 0;
n = 0;
a = new Audio();
a.src = 'burst-500ms-silence-7s.wav';

function black() {
    document.body.style.background = 'black';
    head.style.background = 'black';
    play.style.background = 'black';
    stop.style.background = 'black';
}

function white() {
    document.body.style.background = 'white';
    head.style.background = 'white';
    play.style.background = 'white';
    stop.style.background = 'white';
    setTimeout(black, 500);
}

function again() {
    n++;
    numb.innerHTML = n;
    a.pause();
    a.currentTime = 0;
    a.play();
    t = (Math.random() * 4 + 2) * 1000;
    tid = setTimeout(again, t);
}

// // laggy on iphone
// a.addEventListener('timeupdate', (event) => {
//     if (a.currentTime == 0) {
// 	white();
//     }
// });

a.addEventListener('seeked', (event) => {
    white();
});

play.addEventListener('click', (event) => {
    a.play();
    t = 1000;
    tid = setTimeout(again, t);
});

stop.addEventListener('click', (event) => {
    a.pause();
    if (tid != 0) {
	clearTimeout(tid);
	tid = 0;
    }
});
