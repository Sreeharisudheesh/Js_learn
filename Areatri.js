const prompt = require("prompt-sync")({sigint:true});

const base= prompt('what is base of the triangle')
const height= prompt('what is height of the traingle')

const area= (base*height)/2
 
console.log(`this is the area of the triangle ${area}`)

console.log("area is"+ area);
