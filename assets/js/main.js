let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinbutton');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
}