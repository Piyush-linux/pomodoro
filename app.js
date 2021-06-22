var dom = (x) =>document.querySelector(x)
let body = dom('body')
let mil = 0;
let sec = 0;

let btn_str = dom('.btn_str')
let btn_stp = dom('.btn_stp')
let btn_res = dom('.btn_res')

let spn_mil = dom('.mil')
let spn_sec= dom('.sec')

let interval;
	console.log(spn_mil)
// start
timer_start=()=>{
	mil++
	if ( mil < 9 ) {
		spn_mil.innerHTML = "0"+mil
	}
	if ( mil > 9 ) {
		spn_mil.innerHTML = mil
	}
	if ( mil > 99 ) {
		sec++
		spn_sec.innerHTML = "0"+sec
		mil = 0
		spn_mil.innerHTML = "0"+ mil
	}
	if (sec > 9) {
		spn_sec.innerHTML = sec
	}

}

btn_str.onclick=()=>{
	interval = setInterval(timer_start)
}
btn_stp.onclick=()=>{
	clearInterval(interval)
}
btn_res.onclick=()=>{
	mil = 0;
	sec = 0;
	spn_sec.innerHTML = "0"+sec
	spn_mil.innerHTML = "0"+ mil
}
