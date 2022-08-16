let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let count = document.getElementById('count');
let color = document.getElementById('color');

let  int = parseInt(count.innerHTML);
inc.onclick = function () {
    if (int < 9) {
        console.log(int++);
    }
    if (int >= 1 && int <= 3) {
        color.style.backgroundColor = "red";
    }
    
    if (int >=4 && int <= 6) {
        color.style.backgroundColor = "yellow";
    }
    if (int >=7 && int <= 9) {
        color.style.backgroundColor = "green";
    }
}

dec.onclick = function () {
    if (int > 1) {
        console.log(int--);
    }
    if (int >= 1 && int <= 3) {
        color.style.backgroundColor = "red";
    }
    
    if (int >= 4 && int <= 7) {
        color.style.backgroundColor = "yellow";
    }
    if (int >=7 && int <= 9) {
        color.style.backgroundColor = "green";
    }
}






