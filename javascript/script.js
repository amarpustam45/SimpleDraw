const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

windowSize();

function windowSize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight; 
}

canvas.addEventListener("click", () => {
    draw();
})

function draw(){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(100,100,20,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}