export class Zombie {
  constructor(name, hp, dmg, speed, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.speed = speed;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 100 * this.ratio,
      height: 200 * this.ratio,
    };
    this.position = {
      x: 600,
      y: 180,
    };
    this.velocity = {
      x: 1,
      y: 2,
      ratio: 0.005,
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  walk() {
    this.position.x -= this.velocity.ratio * 30;
    this.position.y += this.velocity.y;
    this.ratio += this.velocity.ratio;
    this.size = {
      width: 100 * this.ratio,
      height: 200 * this.ratio,
    };
  }
  // aktualizace zombie
  update() {
    this.walk();
  }

  setType(type) {
    const paths = [
      "./res/img/zombies/zombie1.png",
      "./res/img/zombies/zombie2.png",
      "./res/img/zombies/zombie3.png",
      "./res/img/zombies/zombie4.png",
      "./res/img/zombies/zombie5.png",
      "./res/img/zombies/zombie6.png",
      "./res/img/zombies/zombie7.png",
      "./res/img/zombies/zombie8.png",
      "./res/img/zombies/zombie9.png",
      "./res/img/zombies/zombie10.png",
      "./res/img/zombies/zombie11.png",
      "./res/img/zombies/zombie12.png",
      "./res/img/zombies/zombie13.png",
    ];
    this.path = paths[type];
  }
}
