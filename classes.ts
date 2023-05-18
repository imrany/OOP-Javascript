import { TypeName } from "./types";

function dogObject(name:string, age:number){
    let dog=Object.create(constructorObject)
    dog.name=name
    dog.age=age
    return dog
}
let constructorObject={
    speak:()=>{
        return "I am a dog"
    }
}

const bingo=dogObject("bingo",24)
console.log(bingo)