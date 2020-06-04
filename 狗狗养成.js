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
    run: function() {
      if (this.isLiving()) {
        if ( !this.isTired() ) {
          view.displayDogeSay('狗狗在小区草地上撒欢儿跑！');
          this.food -= 10;
          this.water = this.water - 10;
        } else {
          view.displayDogeSay('跑不动了');
        }
      }
    },
    showStatus: function() {
      return 'health: ' + this.health + '; food: ' + this.food + '; water: ' + this.water;
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
        view.displayDogeSay('为你而战，我的主人');
      } else {
        view.displayDogeSay('说啥呢，老子活蹦乱跳');
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
      view.displayDogeSay('主人我死了，不要想我！');
    },
    eat: function () {
      if (this.isLiving()) {
        this.water = 100;
        this.food = 100;
        view.displayDogeSay('我吃饱了，我要拉粑粑了。');
        setInterval(this.health = this.health - 5, 1000);
      }
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
    shit: function() {
      if (0 < this.health < 95){
        this.health = this.health + 5;
        view.displayDogeSay("上完厕所真舒服！");
      }
    },
    bath: function () {
      setInterval(this.health = this.health - 5, 1000);
      view.displayDogeSay("主人，我该洗澡了！");
    },
    clear: function () {
      if (this.isLive && this.health < 95){
        this.health = this.health + 5;
        view.displayDogeSay("洗完澡真舒服！");
      }
    },
  };
  let view = {
    displayDogeStatus: function () {
      let statusBoard = document.getElementById('dogeStatus');
      setInterval( function () {
        statusBoard.innerHTML = dog.showStatus();
       }, 1000);
    },
    displayDogeSay: function (str) {
      let sayTxt = document.getElementById('dogeSay');
      sayTxt.innerHTML = str;
    },
  }
view.displayDogeStatus();
dog.live();