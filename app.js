// body
let body = document.querySelector('body');
// timer
let mil = 0;
let sec = 25;
let spn_mil = document.querySelector('.mil');
let spn_sec = document.querySelector('.sec');
let interval;
// audio
var x = document.querySelector(".audio");
// btns
let btn_str = document.querySelector('.btn_1');
let btn_pau = document.querySelector('.btn_2');
let btn_stp = document.querySelector('.btn_stp');
let btn_res = document.querySelector('.btn_res');
let btn_wrk = document.querySelector('.btn_wrk');
let btn_brk = document.querySelector('.btn_brk');


// work > default > break
btn_wrk.onclick = () => {
	clearInterval(interval);
    sec = 25;
    mil = 0;
    spn_sec.innerHTML = sec;
    spn_mil.innerHTML = "0" + mil;
    // togggle
    btn_wrk.classList.add("hide");
    btn_brk.classList.remove("hide");
    console.log('work');
    defa();
}

// break > default > work 
btn_brk.onclick = () => {
	clearInterval(interval);
    sec = 5;
    mil = 0;
    spn_sec.innerHTML = "0" + sec;
    spn_mil.innerHTML = "0" + mil;
    // toggle 
    btn_wrk.classList.remove("hide");
    btn_brk.classList.add("hide");
    console.log('break');
    defa();
}
// T I M E R
let timer_start = () => {
    // back
    mil--
    // 00: 00
    if (mil > 9) {
        spn_mil.innerHTML = mil;
    }
    // 00:0 0
    if (mil < 9) {
        spn_mil.innerHTML = "0" + mil;
    }
    // 00:0 0
    if (mil < 1) {
        mil = 59;
        spn_mil.innerHTML = 59;
        sec--;
        spn_sec.innerHTML = sec;
	     if (sec == 0) {
	            clearInterval(interval);
	            defa();
	            reset();
                x.play();
	            console.log(mil);
	       }
    }
    if (sec < 9) {
        spn_sec.innerHTML = "0" + sec;
    }
}

// start : pause
btn_str.onclick = () => {
    interval = setInterval(timer_start,1000);
    btn_str.classList.add("hide");
    btn_pau.classList.remove("hide");
    console.log('start');
}


btn_pau.onclick = () => defa();


let defa=()=>{
	clearInterval(interval);
    btn_str.classList.remove("hide");
    btn_pau.classList.add("hide");
    console.log('stop');
    x.pause();
    x.currentTime = 0;
    console.log(x);
}

btn_res.onclick = () => reset()

let reset=()=>{
	mil = 0;
    sec = 25;
    spn_sec.innerHTML = sec;
    spn_mil.innerHTML = "0" + mil;
    x.pause();
    x.currentTime = 0;
}
