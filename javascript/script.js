const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let isDrawing = false;
let mouseX = null;
let mouseY = null;
let colour = "black";
let pen__size = 10;
let undo_array = [];
let index = -1;

window.onload = () => {
    ctx.canvas.width = window.innerWidth - 40;
    ctx.canvas.height = window.innerHeight - 160;
    clear_screen();
}

window.addEventListener("resize", () => {
    ctx.canvas.width = window.innerWidth - 40;
    ctx.canvas.height = window.innerHeight - 160; 
    clear_screen();
})

function clear_screen(){
    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();

    undo_array = [];
    index = -1;
}


// canvas.addEventListener("touchstart", start, false);
// canvas.addEventListener("mousedown", start, false);
// canvas.addEventListener("touchmove", draw_line, false);
// canvas.addEventListener("mousemove", draw_line, false);
// canvas.addEventListener("touchend", stop_draw, false);
// canvas.addEventListener("mouseup", stop_draw, false);
// canvas.addEventListener("mouseout", stop_draw, false);


// function start(e){
//     mouseX = e.offsetX;
//     mouseY = e.offsetY;
//     isDrawing =  true;
// }

// function draw_line(e){
//     if (isDrawing === true){
//         draw(mouseX, mouseY, e.offsetX, e.offsetY);
//         mouseX = e.offsetX;
//         mouseY = e.offsetY;
//     }
// }

// function stop_draw(e){
//     if (isDrawing === true){
//         draw(mouseX, mouseY, e.offsetX, e.offsetY);
//         mouseX = null;
//         mouseY = null;
//         isDrawing = false;
//     }

//     undo_array.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
//     index += 1;
//     console.log(undo_array);
//     console.log(index);
// }

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

    undo_array.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    index += 1;
    console.log(undo_array);
    console.log(index);
})

function draw(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineCap = "round";
    ctx.lineWidth = pen__size;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function undo_function(){
    if(index <= 0){
        clear_screen();
    } else {
        index -= 1;
        undo_array.pop();
        ctx.putImageData(undo_array[index], 0, 0);
    }
}

function downloadImage(e){
    const imageURI = canvas.toDataURL("image/png");
    e.href = imageURI;
}