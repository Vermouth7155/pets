let cat = {
  name: 'Nut',
  age: 1,
  breed: 'Mankikang',
  weight: 7,
  isMale: false,
  isLive: true,
  health: 100,
  food: 100,
  water: 100,
  bark: function () {
    if (this.isLive){
      view.displaycatSay('miao~miao~miao~');
      this.water--;
    }
  },
  sayName: function () {
    if (this.isLive){
      this.food--;
      this.water--;
      return this.name;
    }
  },
  run: function() {
    if ( !this.isTired() ) {
      console.log('Meiri cat!');
      this.food -= 10;
      this.water = this.water - 10;
    } else {
      console.log('stop!');
    }
  },
  showStatus: function() {
    return 'health: ' + this.health + '; food: ' + this.food + '; water: ' + this.water;
  },
  xky: function() {
    return "health: " + this.health;
  },
  isTired: function() {
    if (this.food >= 20 && this.water >= 20) {
      return false;
    }
    return true;
  },
  live: function() {
    let self = this;
    this.liveInterval = setInterval(function(){
      self.water = self.water - 5;
      self.food = self.food - 3;
      self.checkStatus();
    }, 1000);
  },
  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.water = 100;
      this.food = 100;
      this.live();
      view.displaycatSay("Xiao smoke everywhere,for the war!");
    } else {
      view.displaycatSay("Hello,everyone.I'm still nut.");
    }
  },
  checkStatus: function () {
      this.water = this.water <= 0 ? 0 : this.water;
      this.food = this.food <= 0 ? 0 : this.food;
      if (this.water >= 50 && this.food >= 50) {
        this.health = this.health >= 100 ? 100 : this.health + 5;
      }
      if ( this.water <= 0 || this.food <= 0){
        this.health = this.health <= 0 ? 0 : this.health - 5;
        this.bark();
      };
      if (this.health === 0) {
        this.dead();
      }
  },
  dead: function () {
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displaycatSay("I'm dead.Don't miss me.");
  },
  eat: function () {
    if (this.isLive) {
      this.water = 100;
      this.food = 100;
      view.displaycatSay("Feel very funny!I'm going to poop.");
      setInterval(this.health = this.health - 5, 1000);
    }
  },
  isLiving: function () {
    if (this.isLive) {
      return true;
    }
    view.displaycatSay("Game over!");
    return false;
  },
  hit: function () {
    if (this.isLive && dog.health > 0) {
      dog.health = dog.health - 5;
      view.displayDogeSay("我被打了，主人快来救我！");
    }
  },
  head: function () {
    if (this.isLive && dog.health > 0) {
      dog.health = dog.health - 15;
    }
  },
  shit: function() {
    if (this.isLive && this.health < 95){
      this.health = this.health + 5;
      view.displaycatSay("It's really comfortable after pulling.");
    }
  },
  bath: function () {
    setInterval(this.health = this.health - 5, 2000);
    view.displaycatSay("I want to take a bath,master.");
  },
  clear: function () {
    if (this.isLive && this.health < 95){
      this.health = this.health + 5;
      view.displaycatSay("It's comfortable to take a shower.");
    }
  },
  boold: function () {
    if (this.isLive && this.health < 95) {
      this.health = this.health + 5;
    }
  },
}
let dog = {
  name: 'xixi',
  age: 13,
  breed: '中华田园犬',
  weight: 25,
  isMale: true,
  isLive: true,
  health: 100,
  food: 100,
  water: 100,
  liveInterval: null,
  bark: function () {
    if (this.isLiving()) {
      view.displayDogeSay('wang!wang!wang!');
      this.water--;
    }
  },
  sayName: function () {
    if (this.isLiving()) {
      this.food--;
      this.water--;
      return this.name;
    }
  },
  showStatus: function() {
    return 'health: ' + this.health + '; food: ' + this.food + '; water: ' + this.water;
  },
  xky: function() {
    return "health: " + this.health;
  },
  isTired: function() {
    if (this.food >= 20 && this.water >= 20) {
      return false;
    }
    return true;
  },
  live: function() {
    let self = this;
    this.liveInterval = setInterval(function(){
      self.water = self.water - 5;
      self.food = self.food - 3;
      self.checkStatus();
    }, 1000);
  },
  checkStatus: function () {
      this.water = this.water <= 0 ? 0 : this.water;
      this.food = this.food <= 0 ? 0 : this.food;
      if (this.water >= 50 && this.food >= 50) {
        this.health = this.health >= 100 ? 100 : this.health + 5;
      }
      if ( this.water <= 0 || this.food <= 0){
        this.health = this.health <= 0 ? 0 : this.health - 5;
        this.bark();
      };
      if (this.health === 0) {
        this.dead();
      }
  },
  dead: function () {
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displayDogeSay('主人我死了，不要想我！');
  },
  isLiving: function () {
    if (this.isLive) {
      return true;
    }
    view.displayDogeSay(this.name + '因为你的喂养不善，已经去了天堂，愿它安息');
    return false;
  },
  hit: function () {
    if (this.isLive && cat.health > 0) {
      cat.health = cat.health - 5;
      view.displaycatSay("Master,I am beaten came to save me please.");
    }
  },
  head: function () {
    if (this.isLive && cat.health > 0) {
      cat.health = cat.health - 15;
    }
  },
  clear: function () {
    if (this.isLive && this.health < 95){
      this.health = this.health + 5;
      view.displayDogeSay("洗完澡真舒服！");
    }
  },
  boold: function () {
    if (this.isLive && this.health < 95) {
      this.health = this.health + 5;
    }
  }
};
let view = {
  displayDogeStatus: function () {
    let statusBoard = document.getElementById('dogeStatus');
    setInterval( function () {
      statusBoard.innerHTML = dog.xky();
     }, 1000);
  },
  displayDogeSay: function (str) {
    let sayTxt = document.getElementById('dogeSay');
    sayTxt.innerHTML = str;
  },
  displaycatStatus: function () {
    let statusBoard = document.getElementById('catStatus');
    setInterval( function () {
      statusBoard.innerHTML = cat.xky();
     }, 1000);
  },
  displaycatSay: function (str) {
    let sayTxt = document.getElementById("catSay");
    sayTxt.innerHTML = str;
  },
}