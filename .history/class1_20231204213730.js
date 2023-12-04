class car{
    constructor(name,speed){
        this.name = name;
        this.speed=speed;
    }

    breakOn(){
        console.log(this.name + "has" + this.speed + "kilometers per hours.");
    }
}

const car1 = new car("mustang", 180)