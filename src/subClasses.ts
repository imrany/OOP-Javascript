class Animals {
    name:string
    age:number
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
} 

class Cats extends Animals {
    whiskerColor:string
    constructor(name:string, age:number, whiskerColor:string) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");
console.log(clara.dance)
console.log(clara.whiskers)