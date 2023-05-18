// function Animals(name:string, age:number) {
//     let newAnimal = Object.create(animalConstructor);
//     newAnimal.name = name;
//     newAnimal.age = age;
//     return newAnimal;
// }
// let animalConstructor = {
//     sing: function():string {
//         return `${this.name} can sing`;
//     },
//     dance: function():string {
//         return `${this.name} can dance`;
//     }
// }
// function Cats(name:string, age:number, whiskerColor:string) {
//     let newCat = Animals(name, age);
//     Object.setPrototypeOf(newCat, catConstructor);
//     newCat.whiskerColor = whiskerColor;
//     return newCat;
// }
// let catConstructor = {
//     whiskers():string {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }
// Object.setPrototypeOf(catConstructor, animalConstructor);
// const clare = Cats("Clara", 33, "purple");
// clare.sing();
// clare.whiskers();