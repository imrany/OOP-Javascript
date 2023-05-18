import { TypeName } from "./types";

let username:TypeName={
    first_name:"Imran",
    last_name:"Matano"
}

console.log(username.first_name)
console.log(username.hasOwnProperty("middle_name"))