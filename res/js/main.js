import { Zombie } from "./zombies/Zombie.js";
import { Background, Crosshair, Healthbar } from "./ui/basic-util.js";

const background = new Background();
const crosshair = new Crosshair();
const healthBar = new Healthbar(100);

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
let mouseX;
let mouseY;
document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
  mouseY = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
});

document.addEventListener("click", (e) => {
  for (const zombie of Zombie.zombies) {
    if (
      zombie.position.x < crosshair.position.x + 40 &&
      zombie.position.x + zombie.size.width >
        crosshair.position.x + crosshair.size.width / 2 &&
      zombie.position.y < crosshair.position.y + 40 &&
      zombie.position.y + zombie.size.height >
        crosshair.position.y + crosshair.size.height / 2
    ) {
      zombie.respawn();
      break;
    }
  }
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
  Zombie.zombies.map((zombie) => {
    zombie.update(healthBar);
  });
};
const render = () => {
  Zombie.zombies.map((zombie) => {
    zombie.draw(ctx);
  });
  crosshair.draw(ctx, mouseX, mouseY);
  healthBar.draw(ctx);
};
const getFps = () => {};

//funkce pro nacteni dat
const loadData = async () => {
  //nacteme soubor s daty pro zombies - await - cekame nez se nacte
  //pokud je await musime dat async
  const zombiesFile = await fetch("./res/data/zombies.json");
  //konvertovani na json
  const zombiesData = await zombiesFile.json();
  // nastavime tride Zombies zombiesData
  Zombie.zombiesData = zombiesData;
};

window.onload = async () => {
  await loadData();
  Zombie.genZombies();
  console.log(Zombie.zombiesData);
  //vyzada si prvni snimek herni smycky
  window.requestAnimationFrame(gameLoop);
};
