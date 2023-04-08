//คลาส Animal
class Animal {
    constructor(age, gender) {
      this.age = age;
      this.gender = gender;
    }
  
    isMammal() {
      //คำสั่งในเมธอด
    }
  
    mate() {
        //คำสั่งในเมธอด
    }
  }

//คลาส Duck
  class Duck extends Animal{
    constructor(beakColor) {
        this.beakColor = beakColor;
      }
      swim(){
        //คำสั่งในเมธอด
      }
      quack(){
        //คำสั่งในเมธอด
      }
  }

//คลาส Fish
  class Fish extends Animal{
    constructor(sizeInFeet) {
        this.sizeInFeet = sizeInFeet;
      }
      canEat(){
        //คำสั่งในเมธอด
      }
     
  }

//คลาส Zebra
  class Zebra extends Animal{
    constructor(is_wild) {
        this.is_wild = is_wild;
      }
      run(){
        //คำสั่งในเมธอด
      }
     
  }