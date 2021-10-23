const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let isDrawing = false;
let mouseX = null;
let mouseY = null;


window.onload = () => {
    ctx.canvas.width = window.innerWidth - 40;
    ctx.canvas.height = window.innerHeight - 128;
    console.log(ctx); 
    clear();
}

window.addEventListener("resize", () => {
    ctx.canvas.width = window.innerWidth - 40;
    ctx.canvas.height = window.innerHeight - 128; 
    clear();
})

function clear(){
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();    
}

canvas.addEventListener("mousedown", (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    isDrawing =  true;
})

canvas.addEventListener("mousemove", (e) => {
    if (isDrawing === true){
        draw(mouseX, mouseY, e.offsetX, e.offsetY);
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
})

canvas.addEventListener("mouseup", (e) => {
    if (isDrawing === true){
        draw(mouseX, mouseY, e.offsetX, e.offsetY);
        mouseX = null;
        mouseY = null;
        isDrawing = false;
    }
})

function draw(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWith = 3;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}