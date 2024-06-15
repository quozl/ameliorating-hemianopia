head = document.getElementById('head')
play = document.getElementById('play')
stop = document.getElementById('stop')
numb = document.getElementById('numb')
para = document.getElementById('para')

tid = 0;
n = 0;
a = new Audio();
a.src = 'burst-500ms-silence-7s.wav';

function dark() {
    head.style.color = play.style.color = stop.style.color = para.style.color = '#202020';
    play.style.border = "2px solid #202020";
    stop.style.border = "2px solid #202020";
    numb.style.color = "#600000";
}

function lite() {
    head.style.color = play.style.color = stop.style.color = para.style.color = 'white';
    play.style.border = "2px solid powderblue";
    stop.style.border = "2px solid powderblue";
    numb.style.color = "white";
}

function black() {
    document.body.style.background = 'black';
    head.style.background = 'black';
    play.style.background = 'black';
    stop.style.background = 'black';
    dark()
}

function white() {
    document.body.style.background = 'white';
    head.style.background = 'white';
    play.style.background = 'white';
    stop.style.background = 'white';
    lite()
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
    dark();
    a.play();
    t = 1000;
    tid = setTimeout(again, t);
});

stop.addEventListener('click', (event) => {
    lite();
    a.pause();
    if (tid != 0) {
	clearTimeout(tid);
	tid = 0;
    }
});
