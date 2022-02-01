//  all Selector

const sec = document.querySelector('.s');
const m = document.querySelector('.m');
const h = document.querySelector('.h');

setInterval(() => {

    let time = new Date();
    let courrentSec = time.getSeconds();
    let courrentMin = time.getMinutes();
    let courrentHour = time.getHours();
    sec.style.transform = `rotate(${rantime(60, courrentSec)}deg)`;
    m.style.transform = `rotate(${rantime(60, courrentMin)+ courrentSec / 60}deg)`;
    h.style.transform = `rotate(${rantime(12, courrentHour) + courrentMin / 12}deg)`;
    
}, 1000);

function rantime(time, corrent){
    return (360* corrent) / time;
}