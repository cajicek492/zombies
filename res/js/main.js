import { Zombie } from "./zombies/Zombie.js";
import { Background } from "./ui/basic-util.js";
/*const myZombie = new Zombie("Tomas", 5, 0, 150);
myZombie.walk();*/

const myZombie = new Zombie("Janek", 5, 0, 4, 5);
const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
  //console.log(keys);

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
  background.draw(ctx);
};
const update = () => {
  myZombie.update();
};
const render = () => {
  myZombie.draw(ctx);
};
const getFps = () => {};

window.onload = () => {
  //vyzada si prvni snimek herni smycky
  window.requestAnimationFrame(gameLoop);
};
