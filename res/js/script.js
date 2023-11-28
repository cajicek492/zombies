const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = new Image();
const image2 = new Image();
const image3 = new Image();
const image4 = new Image();
const pozadi = new Image();
pozadi.src = "./res/img/background.png";
image.src = "./res/img/rohlik.jfif";
image3.src = "./res/img/zombies/zombie2.png";
image4.src = "./res/img/zombies/zombie1.png";
canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(200, 100, 150, 100);

ctx.strokeStyle = "red";
ctx.strokeRect(200, 300, 150, 100);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(150, 70);
ctx.lineTo(200, 20);
ctx.lineTo(50, 50);
ctx.fill();

let x = 450;
let y = 100;
let width = 60;
let height = 100;

let x2 = 650;
let y2 = 100;
let width2 = 60;
let height2 = 100;
window.onload = () => {
   
    setInterval(() => {
        y += 5;
        x += 10;
        width++;
        height++;
        y2 += 5;
        x2 -= 10;
        width2++;
        height2++;
        ctx.drawImage(pozadi, 0, 0, 1280, 720);
        ctx.drawImage(image4, x, y, width, height);
        ctx.drawImage(image3, x2, y2, width2, height2);

    }, 250);
   
}
