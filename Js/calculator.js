//  all Selector

let topMonitor = document.querySelector('.dis_1')
let bttomMonitor = document.querySelector('.dis_2')

let cal = [];

let calcNumberss =(value ) => {
    cal.push(value);

    topMonitor.innerHTML = cal.join('');
    bttomMonitor.innerHTML = 0
}


let onedelete = () => {
    cal.pop();
    topMonitor.innerHTML = cal.join('');
    bttomMonitor.innerHTML = 0
}

let calResult = () => {
    let cal_string = cal.join('');
    bttomMonitor.innerHTML = eval(cal_string);
}


let alldelete = () => {
    cal = [];
    topMonitor.innerHTML = 0;
    bttomMonitor.innerHTML = "";
}