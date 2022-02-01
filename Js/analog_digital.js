//  all Selector

const s2 = document.querySelector('.s2');
const m2 = document.querySelector('.m2');
const h2 = document.querySelector('.h2');
const date = document.querySelector('.date');
const year = document.querySelector('.year');

setInterval(() => {

    let time = new Date();
    let fullYear = time.getFullYear();
    let month = time.getMonth()+1;
    let day = time.getDate();
    let courrentSec = time.getSeconds();
    let courrentMin = time.getMinutes();
    let courrentHour = time.getHours();
    s2.style.transform = `rotate(${rantime(60, courrentSec)}deg)`;
    m2.style.transform = `rotate(${rantime(60, courrentMin) + courrentSec / 60}deg)`;
    h2.style.transform = `rotate(${rantime(12, courrentHour) + courrentMin / 12}deg)`;

    date.innerHTML = `${zero(day) +" / " + zero(month)}`;
    year.innerHTML = `${fullYear}`;
    
}, 1000);



 /**
  * jest for (0) value returns.
  * @param {zero value} data 
  * @returns 
  */

function zero(data){
    if(data <= 9){
        return `0${data}`
    }else{
        return `${data}`
    }

}
