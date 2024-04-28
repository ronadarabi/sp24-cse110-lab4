function everySecond() {
    let d = new Date(); 
    let time = d.toLocaleTimeString(); 
    console.log(time);
}

setInterval(everySecond,1000); 