/*const canvas = document.getElementById("canvas");
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
   
}*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "./res/img/background.png";
/* pole
const foo = [5, 6];
const names = ["radek", "tomas", "petr", "radim"];
names[3] = "jan";
console.log(names[3]);
*/
/*const zombie = {
    name: "Tomas",
    hp: 100,
    dmg: 6,
    drop: 15,
} 
console.log(zombie.dmg); //6
zombie.hp -= 50;
*/

// promena pr ukladanci vstupu z klavesnice
//Space: true =  keys[e.code] = true;
//Space: false
const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.code] = true; // Klaves: true
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false; // Klavesa: false
});
//herni smycka
const gameLoop = () => {
  console.log(keys);

  //resizeCanvas
  resizeCanvas();
  //clearCanvas
  clearCanvas();
  //update
  update();
  //render
  render();
  //fps
  getFps();
  window.requestAnimationFrame(gameLoop);
};

const resizeCanvas = () => {
  canvas.width = 1280;
  canvas.height = 720;
};
const clearCanvas = () => {
  ctx.drawImage(background, 0, 0, 1280, 720);
};
const update = () => {};
const render = () => {};
const getFps = () => {};

window.onload = () => {
  //vyzada si prvni snimek herni smycky
  window.requestAnimationFrame(gameLoop);
};
