export class Zombie {
  //dana vec patri tride - volame pomoci - nazevTridy.neco - Zombie.zombiesData
  static zombiesData;
  // v tomto atributu se budou ukladat vsechny zombies
  static zombies = [];

  constructor(name, hp, speed, path) {
    this.name = name;
    this.hp = hp;
    this.speed = speed;
    this.img = new Image();
    this.path = path;
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
  // Death Sranding
  walk() {
    //posouvame o silu
    this.position.x -= this.velocity.ratio * 30;
    this.position.y += this.velocity.y;
    this.ratio += this.velocity.ratio;
    // PRENASTAVIT DONT FORGET MILIONS WEAR HATS
    this.size = {
      width: 100 * this.ratio,
      height: 200 * this.ratio,
    };
  }
  // aktualizace zombie
  update() {
    this.walk();
  }
  /*
  //nastaveni obrazu
  setType(type) {
    // pole s odkazama
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
    //nastaveni atrubut dle indexu
    this.path = paths[type];
  }*/
  static genZombies() {
    Zombie.zombiesData.map((zombie) => {
      Zombie.zombies.push(new Zombie(zombie.name, zombie.hp,zombie.speed,zombie.path));
    })
  }
}
